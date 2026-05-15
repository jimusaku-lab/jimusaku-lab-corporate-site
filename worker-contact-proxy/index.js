export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const allowedOrigin = "https://jimusaku-lab.com";
    const isAllowedOrigin = !origin || origin === allowedOrigin;
    const corsOrigin = allowedOrigin;
    const genericUpstreamError = "送信に失敗しました。時間をおいて再度お試しください。";
    const jsonResponse = (data, { status = 200 } = {}) => {
      return new Response(JSON.stringify(data), {
        status,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": corsOrigin,
        },
      });
    };
    const getWebhookUrl = () => env.N8N_CONTACT_WEBHOOK_URL || env.N8N_WEBHOOK_URL;
    const getSafeUrlInfo = (value) => {
      try {
        const url = new URL(value);
        return {
          hostname: url.hostname,
          protocol: url.protocol,
          isTestWebhook: url.pathname.includes("/webhook-test/"),
          isLocalHostname: ["localhost", "127.0.0.1", "0.0.0.0"].includes(url.hostname),
          isPrivateLan: /^192\.168\.|^10\.|^172\.(1[6-9]|2\d|3[0-1])\./.test(url.hostname),
        };
      } catch {
        return null;
      }
    };
    const summarizeBody = (text) => {
      if (!text) return "";
      return text.slice(0, 500);
    };

    if (request.method === "OPTIONS") {
      if (!isAllowedOrigin) {
        return jsonResponse({ ok: false, error: "Origin not allowed" }, { status: 403 });
      }
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": corsOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }
    if (request.method !== "POST") {
      return jsonResponse({ ok: false, error: "Method Not Allowed" }, { status: 405 });
    }
    if (!isAllowedOrigin) {
      return jsonResponse({ ok: false, error: "Origin not allowed" }, { status: 403 });
    }

    const webhookUrl = getWebhookUrl();
    if (!webhookUrl) {
      console.log("[contact-proxy] missing webhook URL env", {
        acceptedEnvNames: ["N8N_CONTACT_WEBHOOK_URL", "N8N_WEBHOOK_URL"],
      });
      return jsonResponse({ ok: false, error: genericUpstreamError }, { status: 500 });
    }
    const webhookUrlInfo = getSafeUrlInfo(webhookUrl);
    if (!webhookUrlInfo) {
      console.log("[contact-proxy] invalid webhook URL env");
      return jsonResponse({ ok: false, error: genericUpstreamError }, { status: 500 });
    }
    if (webhookUrlInfo.protocol !== "https:" || webhookUrlInfo.isTestWebhook || webhookUrlInfo.isLocalHostname || webhookUrlInfo.isPrivateLan) {
      console.log("[contact-proxy] rejected webhook URL", webhookUrlInfo);
      return jsonResponse({ ok: false, error: genericUpstreamError }, { status: 500 });
    }
    if (!env.CONTACT_PROXY_SECRET) {
      console.log("[contact-proxy] missing CONTACT_PROXY_SECRET");
      return jsonResponse({ ok: false, error: genericUpstreamError }, { status: 500 });
    }

    let payload;
    try {
      payload = await request.json();
    } catch (error) {
      console.log("[contact-proxy] invalid JSON", error);
      return jsonResponse({ ok: false, error: "Invalid JSON body" }, { status: 400 });
    }

    const patchedPayload = {
      ...(typeof payload === "object" && payload !== null ? payload : {}),
      secret: env.CONTACT_PROXY_SECRET,
    };

    const parseUpstreamBody = (text) => {
      if (!text) return "";
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    };

    try {
      console.log("[contact-proxy] forward start", { webhookHost: webhookUrlInfo.hostname });
      const upstreamResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patchedPayload),
      });
      const upstreamBodyText = await upstreamResponse.text();
      const upstreamBody = parseUpstreamBody(upstreamBodyText);
      console.log("[contact-proxy] forward done", {
        webhookHost: webhookUrlInfo.hostname,
        upstreamStatus: upstreamResponse.status,
        upstreamBody: summarizeBody(upstreamBodyText),
      });

      if (!upstreamResponse.ok) {
        return jsonResponse(
          {
            ok: false,
            error: genericUpstreamError,
          },
          { status: 502 }
        );
      }

      return jsonResponse({
        ok: true,
        message: upstreamBody?.message || "Sent",
      });
    } catch (error) {
      console.log("[contact-proxy] upstream error", {
        webhookHost: webhookUrlInfo.hostname,
        error: error instanceof Error ? error.message : String(error),
      });
      return jsonResponse(
        {
          ok: false,
          error: genericUpstreamError,
        },
        { status: 502 }
      );
    }
  },
};

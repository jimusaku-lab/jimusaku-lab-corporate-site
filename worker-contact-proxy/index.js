export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const allowedOrigin = "https://jimusaku-lab.com";
    const isAllowedOrigin = !origin || origin === allowedOrigin;
    const corsOrigin = allowedOrigin;
    const jsonResponse = (data, { status = 200 } = {}) => {
      return new Response(JSON.stringify(data), {
        status,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": corsOrigin,
        },
      });
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

    if (!env.N8N_WEBHOOK_URL) {
      console.log("[contact-proxy] missing N8N_WEBHOOK_URL");
      return jsonResponse({ ok: false, error: "Missing N8N_WEBHOOK_URL" }, { status: 500 });
    }
    if (!env.CONTACT_PROXY_SECRET) {
      console.log("[contact-proxy] missing CONTACT_PROXY_SECRET");
      return jsonResponse({ ok: false, error: "Missing CONTACT_PROXY_SECRET" }, { status: 500 });
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
      console.log("[contact-proxy] forward start");
      const upstreamResponse = await fetch(env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patchedPayload),
      });
      const upstreamBodyText = await upstreamResponse.text();
      const upstreamBody = parseUpstreamBody(upstreamBodyText);
      console.log("[contact-proxy] forward done", upstreamResponse.status);

      if (!upstreamResponse.ok) {
        return jsonResponse(
          {
            ok: false,
            upstreamStatus: upstreamResponse.status,
            error: upstreamBodyText || "Upstream request failed",
          },
          { status: 502 }
        );
      }

      return jsonResponse({
        ok: true,
        upstreamStatus: upstreamResponse.status,
        upstreamBody,
      });
    } catch (error) {
      console.log("[contact-proxy] upstream error", error);
      return jsonResponse(
        {
          ok: false,
          upstreamStatus: 502,
          error: error instanceof Error ? error.message : "Upstream request failed",
        },
        { status: 502 }
      );
    }
  },
};

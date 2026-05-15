import { existsSync, readFileSync } from "node:fs";

const envFiles = [".env", ".env.local", ".env.production"];

for (const file of envFiles) {
  if (!existsSync(file)) {
    continue;
  }

  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }
    const [key, ...valueParts] = trimmed.split("=");
    if (!process.env[key]) {
      process.env[key] = valueParts.join("=").replace(/^["']|["']$/g, "");
    }
  }
}

const endpoint = process.env.VITE_CONTACT_ENDPOINT;
if (!endpoint) {
  console.error("[env] Missing VITE_CONTACT_ENDPOINT. Set it to the contact proxy endpoint before building.");
  process.exit(1);
}

let url;
try {
  url = new URL(endpoint);
} catch {
  console.error("[env] VITE_CONTACT_ENDPOINT must be an absolute HTTPS URL.");
  process.exit(1);
}

if (url.protocol !== "https:") {
  console.error("[env] VITE_CONTACT_ENDPOINT must use HTTPS in production builds.");
  process.exit(1);
}

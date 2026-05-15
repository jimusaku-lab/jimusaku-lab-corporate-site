<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/12PlQmycLWPBQe3WYt_JeI_vcAzzSCRpS

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set `VITE_CONTACT_ENDPOINT` in `.env.local` to the contact proxy URL.
3. Run the app:
   `npm run dev`

## Verification (iOS Safari)

1. Start the dev server:
   `npm run dev`
2. Open the top page on iOS Safari and tap the hamburger menu.
3. Tap each menu item (Home / Services / Case Studies / Company / Consult).
4. Confirm there is no "invalid address" alert and the page scrolls to the right section.

## Build

`npm run build`

Theme: `alt` is the default; add `?theme=default` to switch back to the old theme.

## Deploy (GitHub Pages)

GitHub Pages is deployed by GitHub Actions (`.github/workflows/deploy-pages.yml`) from `dist/` on push (`main` / `theme-alt`).
Manual `docs/` sync is no longer required.

## Contact Form

送信経路は `Contact.tsx` -> `VITE_CONTACT_ENDPOINT` -> Cloudflare Worker `contact-proxy` -> n8n Production Webhook です。フロントからn8nへ直接POSTしません。

Required deploy settings:

- GitHub Pages build variable: `VITE_CONTACT_ENDPOINT`
- Cloudflare Worker secret: `N8N_CONTACT_WEBHOOK_URL` (preferred) or existing `N8N_WEBHOOK_URL`
- Cloudflare Worker secret: `CONTACT_PROXY_SECRET`

`N8N_CONTACT_WEBHOOK_URL` / `N8N_WEBHOOK_URL` はn8nのProduction Webhook URLを設定します。`/webhook-test/`、`localhost`、`127.0.0.1`、`192.168.*` などのローカルURLは本番用として使いません。

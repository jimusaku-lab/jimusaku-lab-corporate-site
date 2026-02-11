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
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
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

Theme: add ?theme=alt to enable the alt color theme.

#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   WEBHOOK_URL="https://your-n8n-domain/webhook/web-inquiry" \
#   SECRET="replace_me" \
#   ./scripts/test-webhook.sh

: "${WEBHOOK_URL:?Set WEBHOOK_URL to the n8n Production Webhook URL}"
: "${SECRET:?Set SECRET to match the workflow's secret check}"

now_iso=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

curl -sS -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "{\"body\":{\"name\":\"Test User\",\"email\":\"test@example.com\",\"message\":\"This is a test inquiry from the script.\",\"receivedAt\":\"$now_iso\",\"secret\":\"$SECRET\"}}"

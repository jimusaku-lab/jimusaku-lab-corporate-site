#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   WEBHOOK_URL="https://your-n8n-domain/webhook-test/..." \
#   SECRET="jimusaku_contact_proxy_20260116_x7Kp9Q2mV4aN8fR1" \
#   ./scripts/test-webhook.sh

: "${WEBHOOK_URL:?Set WEBHOOK_URL to the n8n test webhook URL}"
: "${SECRET:?Set SECRET to match the workflow's secret check}"

now_iso=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

curl -sS -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "{\"body\":{\"name\":\"Test User\",\"email\":\"test@example.com\",\"message\":\"This is a test inquiry from the script.\",\"receivedAt\":\"$now_iso\",\"secret\":\"$SECRET\"}}"

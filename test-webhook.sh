#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./test-webhook.sh BASE_URL SECRET
# Example:
#   ./test-webhook.sh "https://your-n8n-domain/webhook-test/web-inquiry" "REPLACE_ME_SECRET"

BASE_URL=${1:-}
SECRET=${2:-}

if [[ -z "$BASE_URL" || -z "$SECRET" ]]; then
  echo "Usage: $0 BASE_URL SECRET" >&2
  exit 1
fi

now_iso=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

curl -sS -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d "{\"body\":{\"name\":\"Test User\",\"email\":\"mizawa@gmail.com\",\"message\":\"This is a test inquiry from the script.\",\"receivedAt\":\"$now_iso\",\"secret\":\"$SECRET\"}}"

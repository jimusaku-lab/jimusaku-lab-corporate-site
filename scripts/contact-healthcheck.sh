#!/usr/bin/env bash
set -euo pipefail

N8N_BASE_URL="${N8N_BASE_URL:-https://n8n-admin.jimusaku-lab.com}"
N8N_WEBHOOK_PATH="${N8N_WEBHOOK_PATH:-/webhook/web-inquiry}"
CONTACT_PROXY_ENDPOINT="${CONTACT_PROXY_ENDPOINT:-https://contact-proxy.mizawa.workers.dev}"
ORIGIN="${ORIGIN:-https://jimusaku-lab.com}"

fail() {
  echo "[contact-healthcheck] FAIL: $*" >&2
  exit 1
}

check_status() {
  local label="$1"
  local expected="$2"
  local actual="$3"

  if [[ "$actual" != "$expected" ]]; then
    fail "$label returned HTTP $actual, expected $expected"
  fi
  echo "[contact-healthcheck] OK: $label returned HTTP $actual"
}

signin_status="$(
  curl -sS -o /dev/null -w '%{http_code}' \
    "${N8N_BASE_URL%/}/signin"
)"
check_status "n8n sign-in page" "200" "$signin_status"

webhook_status="$(
  curl -sS -o /dev/null -w '%{http_code}' \
    -X POST \
    -H 'Content-Type: application/json' \
    --data '{"name":"Healthcheck","email":"healthcheck@example.com","message":"healthcheck without secret","source":"github-actions","page":"healthcheck"}' \
    "${N8N_BASE_URL%/}${N8N_WEBHOOK_PATH}"
)"
check_status "n8n production webhook without secret" "401" "$webhook_status"

proxy_options_status="$(
  curl -sS -o /dev/null -w '%{http_code}' \
    -X OPTIONS \
    -H "Origin: ${ORIGIN}" \
    -H 'Access-Control-Request-Method: POST' \
    -H 'Access-Control-Request-Headers: Content-Type' \
    "$CONTACT_PROXY_ENDPOINT"
)"
check_status "contact proxy CORS preflight" "204" "$proxy_options_status"

echo "[contact-healthcheck] All checks passed."

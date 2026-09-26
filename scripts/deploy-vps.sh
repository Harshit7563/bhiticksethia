#!/usr/bin/env bash
# Deploy Bhitick Sethia site to Hostinger VPS
# Domain DNS already points here: bhiticksethia.com → 187.127.164.150
set -euo pipefail

VPS_HOST="${VPS_HOST:-root@187.127.164.150}"
REMOTE_DIR="/var/www/bhiticksethia"
APP_PORT="3020"
DOMAIN="bhiticksethia.com"
REPO_URL="https://github.com/Harshit7563/bhiticksethia.git"

echo "→ Deploying $DOMAIN to $VPS_HOST"

ssh -o StrictHostKeyChecking=accept-new "$VPS_HOST" \
  REMOTE_DIR="$REMOTE_DIR" APP_PORT="$APP_PORT" DOMAIN="$DOMAIN" REPO_URL="$REPO_URL" \
  bash -s <<'REMOTE'
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive

if ! command -v node >/dev/null 2>&1 || ! node -v | grep -qE 'v(20|22|24)\.'; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
apt-get install -y -qq nginx git curl
command -v pm2 >/dev/null 2>&1 || npm install -g pm2

mkdir -p /var/www
if [[ -d "$REMOTE_DIR/.git" ]]; then
  cd "$REMOTE_DIR"
  git fetch origin main
  git reset --hard origin/main
else
  rm -rf "$REMOTE_DIR"
  git clone "$REPO_URL" "$REMOTE_DIR"
  cd "$REMOTE_DIR"
fi

npm ci
npm run build

pm2 delete bhiticksethia >/dev/null 2>&1 || true
PORT="$APP_PORT" NODE_ENV=production pm2 start npm --name bhiticksethia -- start
pm2 save
pm2 startup systemd -u root --hp /root >/dev/null 2>&1 || true

cat > "/etc/nginx/sites-available/${DOMAIN}" <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    client_max_body_size 20M;

    location /_next/static/ {
        alias ${REMOTE_DIR}/.next/static/;
        access_log off;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 60s;
    }
}
NGINX

ln -sfn "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
nginx -t
systemctl reload nginx

if command -v certbot >/dev/null 2>&1; then
  certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos \
    --register-unsafely-without-email --redirect || true
fi

sleep 2
curl -s -o /dev/null -w "app:%{http_code}\n" "http://127.0.0.1:${APP_PORT}/" || true
curl -s -o /dev/null -w "nginx:%{http_code}\n" -H "Host: ${DOMAIN}" http://127.0.0.1/ || true
pm2 status bhiticksethia
echo "Done → https://${DOMAIN}"
REMOTE

#!/bin/bash
set -e  # stop jika ada error

PROJECT_DIR="/home/arc/msc/llmStroew"
LOG_FILE="$PROJECT_DIR/deploy.log"

cd $PROJECT_DIR

echo "[$(date)] Deploy started" >> $LOG_FILE

# Simpan commit sekarang untuk rollback
PREV_COMMIT=$(git rev-parse HEAD)

# Pull latest
git pull origin main

# Install & build
npm install --production
npm run build

# Restart app
pm2 restart llm-store || pm2 start npm --name "llm-store" -- start

echo "[$(date)] Deploy success: $(git rev-parse HEAD)" >> $LOG_FILE

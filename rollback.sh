#!/bin/bash
PROJECT_DIR="/home/arc/msc/llmStroew"
cd $PROJECT_DIR

# Rollback ke commit sebelumnya
git reset --hard HEAD~1
npm run build
pm2 restart llm-store

echo "[$(date)] Rolled back to: $(git rev-parse HEAD)"

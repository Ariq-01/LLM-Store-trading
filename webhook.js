// Phase 2: GitHub Webhook Auto-Deploy
// Aktifkan dengan: pm2 start webhook.js --name "webhook"
// Lalu set GitHub Webhook → http://YOUR_IP:9000/deploy

const http = require("http")
const { exec } = require("child_process")
const crypto = require("crypto")

const SECRET = process.env.WEBHOOK_SECRET || "a3f8c2d1e4b7f9a0c5d2e8f1b4a7c3d6e9f2a5b8c1d4e7f0a3b6c9d2e5f8a1b4"
const PORT = 9000

http.createServer((req, res) => {
  if (req.method !== "POST" || req.url !== "/deploy") {
    res.writeHead(404).end()
    return
  }

  let body = ""
  req.on("data", (chunk) => (body += chunk))
  req.on("end", () => {
    // Verify GitHub signature
    const sig = "sha256=" + crypto.createHmac("sha256", SECRET).update(body).digest("hex")
    if (req.headers["x-hub-signature-256"] !== sig) {
      res.writeHead(401).end("Unauthorized")
      return
    }

    res.writeHead(200).end("Deploying...")
    exec("/home/arc/msc/llmStroew/deploy.sh", (err, stdout) => {
      if (err) console.error("[webhook] Deploy failed:", err.message)
      else console.log("[webhook] Deploy success:", stdout)
    })
  })
}).listen(PORT, () => console.log(`Webhook listening on :${PORT}`))

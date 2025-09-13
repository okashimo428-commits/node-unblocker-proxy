const express = require("express");
const Unblocker = require("unblocker");
const helmet = require("helmet");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// セキュリティ対策
app.use(helmet());

// Unblocker をセットアップ
app.use(
  Unblocker({
    prefix: "/proxy/", // プロキシのパス
  })
);

// index.html を返すルート
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// サーバー起動
app.listen(port, () => {
  console.log(`✅ Node Unblocker Proxy is running on port ${port}`);
});

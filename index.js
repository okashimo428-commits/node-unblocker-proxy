const express = require("express");
const Unblocker = require("unblocker");
const helmet = require("helmet");

const app = express();
const port = process.env.PORT || 3000;

// セキュリティ対策
app.use(helmet());

// Unblocker をセットアップ
app.use(
  Unblocker({
    prefix: "/proxy/",
  })
);

// 動作確認用トップページ
app.get("/", (req, res) => {
  res.send("✅ Node Unblocker Proxy is running!");
});

// サーバー起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

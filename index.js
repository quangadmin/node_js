const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

//định nghĩa như ul mình học trong java kkk
app.use(morgan("combined"));
app.get("/trang-chu", (req, res) => {
  res.send(`<h1 style="color: blue;">Hello World!</h1>`);
});

//127.0.0.1 -1113
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

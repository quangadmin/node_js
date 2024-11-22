const express = require("express");
const app = express();
const port = 3000;

//định nghĩa như url mình học trong java kkk
app.get("/con=cac", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World!");
});

//127.0.0.1 -1113
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

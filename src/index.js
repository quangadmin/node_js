const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // Lấy engine từ express-handlebars
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
// Middleware
app.use(
  express.urlencoded({
    extended: true, // Thêm các thông tin về request và response vào body của request
  })
);
app.use(express.json());

// Middleware
//app.use(morgan("combined"));

// Cấu hình template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route
app.get("/trang-chu", (req, res) => {
  res.render("home"); // Render file home.handlebars từ thư mục views
});

//news

app.get("/news", (req, res) => {
  res.render("news"); // Render file home.handlebars từ thư mục views
});

app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  //lưu ý request.body dùng cho phương thức method là post: nhằm để bảo mật dữ liệu gửi server
  console.log(req.body);
  //còn request.body dùng cho phương thức method là get không bảo mật bằng post
  console.log(req.query);
  res.send("222");
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

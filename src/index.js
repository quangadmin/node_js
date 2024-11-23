const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // Lấy engine từ express-handlebars
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
// Middleware
app.use(morgan("combined"));

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

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

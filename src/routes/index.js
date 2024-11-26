const newsRouter = require("./news");
function route(app) {
  app.use("/news", newsRouter);

  app.get("/trang-chu", (req, res) => {
    res.render("home"); // Render file home.handlebars từ thư mục views
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
}
module.exports = route;

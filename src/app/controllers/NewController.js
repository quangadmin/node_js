class NewController {
  // [get] news
  home(req, res) {
    res.render("news");
  }
  // [get] news/
  show(req, res) {
    //res.send("<h1>news detail</h1>");
    res.send("xin chào ai đó !");
  }
}

//export cái gì thì khi require nhân về cái đó nhé
module.exports = new NewController();

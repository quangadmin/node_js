class NewController {
  // [get] news
  index(req, res) {
    res.render("news");
  }
  // [get] news/
  show(req, res) {
    res.send("news detail");
  }
}

//export cái gì thì khi require nhân về cái đó nhé
module.exports = new NewController();

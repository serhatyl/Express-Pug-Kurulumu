const express = require("express");
const app = express();

app.set("view engine", "pug");
//statik dosyaları belirtme
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index", { name: "Serhat", surname: "Yılmaz" });
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000, () => {
  console.log("express server running");
});

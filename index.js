const express = require("express");
const app = express();

app.set("view engine", "pug");
//statik dosyaları belirtme
app.use(express.static('public'));

//Routing
// ? - zorunlu olmayan
// * yıldızın bulunduğu yere herhangi bir ifade gelebilir
//+ soldaki ifadenin aynısı olduğu sürece çalışacaktır

app.get("/", (req, res) => {
  res.render("index", { name: "Serhat", surname: "Yılmaz" });
});

app.get("/home?", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post('/contact', (req, res) => {
  res.send('contact page post method');
});

app.all('/contact', (req, res) => {
  res.send('selam burası app.all()');
});

app.listen(3000, () => {
  console.log("express server running");
});

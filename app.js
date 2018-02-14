const express = require("express");
const app = express();

const signIn = require('./Routes/signIn');
const signUp = require('./Routes/signUp');

app.set("view engine", "pug");
//statik dosyaları belirtme
app.use(express.static('public'));

app.use('/user', signIn);
app.use('/kullanici', signUp);


app.listen(3000, () => {
    console.log("express server running");
});
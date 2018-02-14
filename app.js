const express = require("express");
const app = express();

const signIn = require('./Routes/signIn');
const signUp = require('./Routes/signUp');
const profile = require('./Routes/profile');
const user = require('./Routes/user');
//helpers
const isLogin = require('./Helper/isLogin');

//aşağıda 1. parametreyi kaldırırsak bütün routelarda çalışır ancak parametre belirtirsek sadece o route'ta çalışacaktır
// app.use('/profile', (req, res, next) => {
//     const isLogin = false;
//     if (isLogin)
//         next();
//     //next middleware'in bir sonraki aşamada bulunan işlemi yapmasını sağlar
//     else
//         res.send('Lütfen Giriş Yapın');
// });

app.set("view engine", "pug");
//statik dosyaları belirtme
app.use(express.static('public'));

app.use(isLogin);
app.use('/user', signIn);
app.use('/kullanici', signUp);
app.use('/profile', profile)
app.use('/member', user)


app.listen(3000, () => {
    console.log("express server running");
});
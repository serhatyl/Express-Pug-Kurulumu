const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const user = false;

    if (user)
        res.send("user sayfası");
    else
        return next({ status: 404, message: 'Bu Kullanıcı Bulanamadı' });
});

module.exports = router;
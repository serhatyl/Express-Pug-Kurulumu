const express = require('express');
const router = express.Router();

router.get('/signUp', (req, res) => {
    res.send('signUp sayfası');
});

router.post('/signUp', (req, res) => {
    res.send('signUp sayfası (Post Method)');
});

module.exports = router;
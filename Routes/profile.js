const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('profil sayfası');
});

module.exports = router;
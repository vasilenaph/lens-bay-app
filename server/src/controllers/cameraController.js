const router = require('express').Router();

router.get('/create', (req, res) => {
    res.json('create');
});

module.exports = router;
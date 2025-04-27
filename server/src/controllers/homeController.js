const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('home');
});

router.get('/about', (req, res) => {
    res.json('about');
});

router.get('/not-found', (req, res) => {
    res.json('not-found');
});

module.exports = router;
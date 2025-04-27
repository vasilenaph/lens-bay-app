const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('home');
});

router.get('/about', (req, res) => {
    res.json('about');
})

module.exports = router;
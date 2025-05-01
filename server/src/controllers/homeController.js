const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ page: 'home' }); 
});

router.get('/about', (req, res) => {
    res.json({ page: 'about' });  
});

router.get('/not-found', (req, res) => {
    res.json({ page: 'not-found' }); 
});

module.exports = router;

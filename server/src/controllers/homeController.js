const router = require('express').Router();
const cameraService = require('../services/cameraService');

router.get('/', (req, res) => {
    const cameras = cameraService.getAll();
    res.json(cameras); 
});

router.get('/about', (req, res) => {
    res.json({ page: 'about' });  
});

router.get('/not-found', (req, res) => {
    res.json({ page: 'not-found' }); 
});

module.exports = router;

const router = require('express').Router();
const cameraService = require('../services/cameraService');

router.get('/create', (req, res) => {
    res.json({ page: 'create' }); 
});

router.post('/create', (req, res) => {
    const newCamera = req.body;

    cameraService.create(newCamera);

    res.redirect('/');
});

module.exports = router;
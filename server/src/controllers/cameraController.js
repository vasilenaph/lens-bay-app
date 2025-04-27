const router = require('express').Router();
const cameraService = require('../services/cameraService');

router.get('/create', (req, res) => {
    res.json('create');
});

router.post('/create', (req, res) => {
    const newCamera = req.body;

    cameraService.create(newCamera);

    res.json('Movie should be created');
});

module.exports = router;
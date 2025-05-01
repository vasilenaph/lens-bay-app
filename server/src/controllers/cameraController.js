const router = require('express').Router();
const cameraService = require('../services/cameraService');

router.get('/cameras', (req, res) => {
    const cameras = cameraService.getAll();
    res.json(cameras); 
});

router.get('/create', (req, res) => {
    res.json({ page: 'create' }); 
});

router.post('/create', (req, res) => {
    const newCamera = req.body;

    cameraService.create(newCamera);

    res.json('/');
});

router.get('/cameras/:cameraId', (req, res) => {
    const cameraId = req.params.cameraId;
    const camera = cameraService.getById(cameraId); 

    if (!camera) {
        return res.status(404).json({ message: 'Camera not found' });
    }

    res.json(camera);
});

module.exports = router;
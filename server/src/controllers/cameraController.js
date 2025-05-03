const router = require('express').Router();
const cameraService = require('../services/cameraService');

router.get('/cameras', async (req, res) => {
    try {
        const cameras = await cameraService.getAll();
        res.json(cameras);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve cameras' });
    }
});


router.get('/create', (req, res) => {
    res.json({ page: 'create' }); 
});

router.post('/create', async (req, res) => {
    const newCamera = req.body;

    try {
        await cameraService.create(newCamera);
        
        res.status(201).json({ message: 'Camera created' });
    } catch (err) {
        console.log(err.message)
        res.status(404).end();
    }
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
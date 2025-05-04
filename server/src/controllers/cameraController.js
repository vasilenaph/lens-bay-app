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

router.get('/cameras/:cameraId', async (req, res) => {
    const cameraId = req.params.cameraId;

    try {
        const camera = await cameraService.getById(cameraId);

        if (!camera) {
            return res.status(404).json({ message: 'Camera not found' });
        }

        res.json(camera);
    } catch (error) {
        console.error('Error fetching camera:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/cameras/:cameraId/edit', async (req, res) => {
    const { cameraId } = req.params;

    try {
        const camera = await cameraService.getById(cameraId);

        if (!camera) {
            return res.status(404).json({ message: 'Camera not found' });
        }

        res.json(camera);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to load camera for edit' });
    }
});

router.post('/cameras/:cameraId/edit', async (req, res) => {
    const { cameraId } = req.params;
    const editedData = req.body;

    try {
        const editedCamera = await cameraService.edit(cameraId, editedData);

        if (!editedCamera) {
            return res.status(404).json({ message: 'Camera not found' });
        }

        res.json(editedCamera);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to update camera' });
    }
});

module.exports = router;
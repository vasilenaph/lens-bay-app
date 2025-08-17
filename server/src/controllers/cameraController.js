const router = require('express').Router();
const cameraService = require('../services/cameraService');

router.get('/', async (req, res) => {
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
    try {
        const createdCamera = await cameraService.create(req.body);
        res.status(201).json(createdCamera);  
    } catch (err) {
        console.error("Create camera error:", err);
        res.status(500).json({ message: 'Failed to create camera' });
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

router.get('/cameras/:cameraId/delete', async (req, res) => {
    const cameraId = req.params.cameraId;

    try {
        const deletedCamera = await cameraService.delete(cameraId);

        if(!deletedCamera) {
            return res.status(404).json({message: 'Camera not found!'});
        }

        res.status(200).json({message: 'Camera deleted succesfully'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to delete camera' });
    }
})

module.exports = router;
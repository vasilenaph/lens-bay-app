const router = require('express').Router();

const homeController = require('./src/controllers/homeController');
const cameraController = require('./src/controllers/cameraController');

router.use(homeController);
router.use(cameraController);

router.get('*', (req, res) => {
    res.redirect('/not-found');
})

module.exports = router;
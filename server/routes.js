const router = require('express').Router();

const homeController = require('./src/controllers/homeController');
const cameraController = require('./src/controllers/cameraController');
const userController = require('./src/controllers/userController');

router.use(homeController);
router.use(cameraController);
router.use('/api/users', userController);

router.get('*', (req, res) => {
    res.redirect('/not-found');
})

module.exports = router;
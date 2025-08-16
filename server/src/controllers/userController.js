const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/sign-up', async (req, res) => {
    try {
        const { email, password } = req.body;

        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hash });

        res.status(201).json({ message: 'User created', user: { email: user.email, id: user._id } });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/sign-in', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(400).json({ message: 'Invalid email or password' });

        res.json({ message: 'Login successful', user: { id: user._id, email: user.email } });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;

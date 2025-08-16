const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateToken } = require('../config/jwt');

router.post('/sign-up', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hash });

        const token = generateToken({ id: user._id, email: user.email });

        // Send back only the token and user info
        res.status(201).json({
            user: { id: user._id, email: user.email },
            token
        });
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

        const token = generateToken({ id: user._id, email: user.email });

        res.json({
            message: 'Login successful',
            user: { id: user._id, email: user.email },
            token
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async ({ email, password }) => {
    const hash = await bcrypt.hash(password, 10);
    return await User.create({ email, password: hash });
};
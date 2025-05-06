const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: false
    },
    sensor: {
        type: String,
        required: true
    },
    megapixels: {
        type: String,
        required: true
    },
    isoRange: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    connectivity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?/ 
    }
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;
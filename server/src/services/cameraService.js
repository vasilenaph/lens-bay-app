const Camera = require('../models/Camera');

const cameras = [{
    "_id": 1,
    "name": "Sony A7",
    "price": 2000
}];

exports.getAll = async () => {
    return await Camera.find();
}

exports.getById = (cameraId) => {
    const camera = cameras.find(camera => camera._id == cameraId);

    return camera;
}

exports.create = async (cameraData) => {
    const result = await Camera.create(cameraData);
    return result;
}

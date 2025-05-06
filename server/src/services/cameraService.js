const Camera = require('../models/Camera');

exports.getAll = async () => {
    return await Camera.find();
}

exports.getById = (cameraId) => {
    return Camera.findById(cameraId);
};

exports.create = async (cameraData) => {
    const result = await Camera.create(cameraData);
    return result;
}

exports.edit = async (cameraId, cameraData) => {
    return Camera.findByIdAndUpdate(cameraId, cameraData, { new: true });
};

exports.delete = async (cameraId) => {
    return await Camera.findByIdAndDelete(cameraId);
};

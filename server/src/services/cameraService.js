const cameras = [{
    "_id": 1,
    "name": "Sony A7",
    "price": 2000
}];

exports.getAll = () => {
    return [...cameras];
}

exports.create = (cameraData) => {
    cameras.push(cameraData);
}

exports.getById = (cameraId) => {
    return cameras.find(camera => camera.id === cameraId);
}
const cameras = [
    {
        "name": "Sony A7", "price": 2000
    }
];

exports.create = (cameraData) => {
    cameras.push(cameraData);
}
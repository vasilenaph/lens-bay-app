const cameras = [
    {
        "name": "Sony A7", 
        "price": 2000
    }
];

exports.getAll = () => {
    return [...cameras];
}

exports.create = (cameraData) => {
    cameras.push(cameraData);
}
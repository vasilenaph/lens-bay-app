const express = require('express');
const PORT = 5000;

const app = express();

let cameras = [
    {
        "cameraFirst": "Canon Powershot SX50HS",
        "cameraSecond": "Nikon D3000",
    }
]

app.get('/cameras', (req, res) => {
    res.json(cameras);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(routes);

mongoose.connect('mongodb://localhost:27017/lensbayDB')
    .then(() => {
        console.log(`DB Connected`);

        app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
    })
    .catch(err => console.log('Cannot connect to DB'));





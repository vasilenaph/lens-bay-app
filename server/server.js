const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/lensbayDB')
    .then(() => {
        console.log(`DB Connected`);

        app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
    })
    .catch(err => console.log('Cannot connect to DB'));





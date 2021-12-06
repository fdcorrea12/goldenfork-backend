const mongoose = require('mongoose');

const URL = 'mongodb+srv://dbGoldenFork:Goldenfork2021@cluster0.qle6c.mongodb.net/GoldenFork?retryWrites=true&w=majority';

mongoose.connect(URL)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
const mongoose = require('mongoose');
const config   = require('../config.json')

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/JewelryShop');
mongoose.connect(config.db);
module.exports = {mongoose};

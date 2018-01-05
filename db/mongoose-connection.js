const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/JewelryShop');
mongoose.connect('mongodb://gianevag:*******@ds145302.mlab.com:45302/local_library')
module.exports = {mongoose};

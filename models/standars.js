var mongoose = require('mongoose');

var Standars = mongoose.model('Standars', {
    gold_price: {
        type: Number
    },
    coif_K9: {
        type: Number
    },
    coif_K14: {
        type: Number
    },
    coif_K18: {
        type: Number
    },
    diamond_price: {
        type: Number
    },
    mult: {
        type: Number
    },
    EurDolExch: {
        type: Number
    },
    DateCreated: {
        type: Date,
        default: Date.now
    },
    DateUpdated: {
        type: Date
    }
});

module.exports = {Standars};
var mongoose = require('mongoose');

var Jewelry = mongoose.model('Jewelry', {
    jewelry_id:{
        type: String
    },
    imgPath:{
        type: String
    },
    work_cost: {
        type: Number
    },
    other_cost: {
        type: Number
    },
    silver_metal_weight: {
        type: Number
    },
    gemstones: {
        type: Number
    },
    diamonds_per_piece: {
        type: Number
    },
    diamond_cost: {
        type: Number
    },    
    prices: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    gold_metal_price: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    gold_metal_weight: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    commission_etsy:{
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }        
    },
    retail_price_eur: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    retail_price_dol: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    cost: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    taxis: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    incomes: {
        price_9K: {
            type: Number
        },        
        price_14K: {
            type: Number
        },
        price_18K: {
            type: Number
        }
    },
    DateCreated: {
        type: Date,
        default: Date.now
    },
    DateUpdated: {
        type: Date
    }

});

module.exports = {Jewelry};
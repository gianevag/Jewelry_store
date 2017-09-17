var express = require('express');
var router = express.Router();

var {Jewelry} = require('./../models/jewelry')
var {mongoose} = require('./../db/mongoose-connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST jewelry 
router.post('/jewelry', (req,res) => {
  var jewel = new Jewelry({
    jewelry_id: req.body.jewelry_id,
    gold_metal_price : req.body.gold_metal_price
  })
  
  console.log(jewel)
  jewel.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })

});

// GET /Jewelry
router.get('/jewelry', (req,res) => {
  Jewelry.find().select().then((jewel) => {
    res.render('jewelry.hbs',{jewel})
  }, (e) => {
    res.status(400).send(e);
  })
});

module.exports = router;

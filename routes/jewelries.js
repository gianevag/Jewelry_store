var express = require('express');
var router = express.Router();

var {Jewelry} = require('./../models/jewelry')
var {mongoose} = require('./../db/mongoose-connection');

// GET /Jewelry
router.get('/', (req,res,next) => {
    Jewelry.find().select().then((jewel) => {
      res.render('jewelry.hbs',{jewel})
    }, (e) => {
      res.status(400).send(e);
    })

  });

// POST jewelry 
router.post('/', (req,res,next) => {
    var jewel = new Jewelry({
      jewelry_id: req.body.jewelry_id,
      work_cost : req.body.work_cost,
      other_cost: req.body.other_cost
    })
    

    // console.log(jewel)
    jewel.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    })
  
  });

//GET jewelry/create
router.get('/create', (req,res,next) => {
  res.render('jewelry_form.hbs',{
    title: 'Create Jewelry'
  })
});

module.exports = router;
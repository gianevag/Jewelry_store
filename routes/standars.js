var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs')

var {Standars} = require('./../models/standars')
var {mongoose} = require('./../db/mongoose-connection');


// GET /Jewelry
router.get('/', (req,res,next) => {
    Standars.find().sort({DateCreated: 'desc'}).then((stand) => {
      res.render('standars.hbs',{
        stand: stand[0],
        title:'Σταθερές'})
    }, (e) => {
      res.status(400).send(e);
    })

  });


//GET jewelry/create
router.get('/create', (req,res,next) => {
    res.render('standarsForm.hbs',{

      title: 'Create Standars'
    })
  });
  

// POST jewelry/create 
router.post('/', (req,res,next) => {

    var stand = new Standars({
      
      gold_price: req.body.gold_price,
        coif_K9 : req.body.coif_K9,
        coif_K14: req.body.coif_K14,
        coif_K18: req.body.coif_K18,
        diamond_price: req.body.diamond_price,
        mult: req.body.mult,
        EurDolExch: req.body.EurDolExch
    })
    

    console.log(stand);
    //console.log(jewel)
    stand.save().then((doc) => {
      res.send({redirect: '/standars'});
    }, (e) => {
      res.status(400).send(e);
    })
    


  });


//DELETE jewelry/delete/:id
router.delete('/delete/:jewelId', (req,res,next) => {

  Jewelry.findByIdAndRemove(req.params.jewelId).then((doc) => {
    //console.log('Succeful Remove')
    res.send('Succeful remove')
  }, (e) => {
    res.status(400).send(e);
  });
});


//GET jewelry/edit/:id
router.get('/edit/:jewelId',(req,res,next) => {
  
    if (!res.statusCode===200) {
      console.log('Unsucess Update');
    } else {
        Jewelry.findById(req.params.jewelId).then((jewel)=>{
          res.render('jewelryEdit.hbs',{jewel,title: 'Edit Jewelry'})
        }, (e) => {
          res.status(400).send(e);
        })
  
      }
  })

  
//PUT jewelry/edit/:id
router.put('/edit/:jewelId',(req,res,next) => {

  // Chain Promises example
  if (!res.statusCode===200) {
    console.log('Unsucess Update');
  } else {
      Jewelry.findById(req.params.jewelId).then((doc)=>{
        doc.jewelry_id = req.body.jewelry_id;
        doc.work_cost  = req.body.work_cost;
        doc.other_cost = req.body.other_cost;

        return doc.save()
      }).then((data)=>{
        res.send({redirect: '/jewelry'});
      }, (e) => {
        res.status(400).send(e);
      })
    }
})

module.exports = router;
var express = require('express');
var router = express.Router();
var path = require('path')
var multer = require('multer')
var fs = require('fs')

var {Jewelry} = require('./../models/jewelry')
var {mongoose} = require('./../db/mongoose-connection');
var {Standars} = require('./../models/standars')

// GET /Jewelry
router.get('/', (req,res,next) => {
    
  Jewelry.find().select().then((jewel) => {

    Standars.find().sort({DateCreated: 'desc'}).then((stand) => {
      res.render('jewelry.hbs',{
        stand: stand[0],
        jewel: jewel})

  })
  }, (e) => {
    res.status(400).send(e);
  })

  });

// POST jewelry 
router.post('/', (req,res,next) => {


  if (req.file){
    var pathname = './public/upload/'+ req.body.jewelry_id +'/'+ req.body.jewelry_id + '.jpg'

  //create a folder with jewelry_id name and push the upload file
    fs.exists('./public/upload/'+ req.body.jewelry_id, (exist) => {
      if(!exist) {
        fs.mkdir('./public/upload/'+ req.body.jewelry_id, (err) => {
          if (err){
            console.log(err)
          } else {
            //move the upload data from temporary file to upload file
            fs.rename('./public/upload/temp/' + req.file.filename, pathname, (err) => {
              if(err) {
                console.log(err);
              }
            });
          }
        })
      } else {
        //move the upload data from temporary file to upload file
        fs.rename('./public/upload/temp/' + req.file.filename,pathname , (err) => {
          if(err) {
            console.log(err);
          }
    });
      }
    })
} else {
  console.log('Doesnt Upload any file!!')
}

  var jewel = new Jewelry({
      jewelry_id          : req.body.jewelry_id,
      work_cost           : req.body.work_cost,
      other_cost          : req.body.other_cost,
      silver_metal_weight : req.body.silver_metal_weight,
      gemstones           : req.body.gemstones,
      diamonds_per_piece  : req.body.diamonds_per_piece,
      gold_metal_price    : {price_9K: req.body.price_9K,
                             price_14K: req.body.price_14K,
                             price_18K: req.body.price_18K},
      gold_metal_weight    : {price_9K: req.body.gold_priceK9,
                              price_14K: req.body.gold_priceK14,
                              price_18K: req.body.gold_priceK18},
      commission_etsy     : {price_9K: req.body.commission_etsyK9,
                              price_14K: req.body.commission_etsyK14,
                              price_18K: req.body.commission_etsyK18},
      retail_price_eur    : {price_9K: req.body.retail_price_eurK9,
                              price_14K: req.body.retail_price_eurK14,
                              price_18K: req.body.retail_price_eurK18},
      retail_price_dol    : {price_9K: req.body.retail_price_dolK9,
                              price_14K: req.body.retail_price_dolK14,
                              price_18K: req.body.retail_price_dolK18},
      cost                : {price_9K: req.body.costK9,
                              price_14K: req.body.costK14,
                              price_18K: req.body.costK18},
      taxis               : {price_9K: req.body.taxisK9,
                                price_14K: req.body.taxisK14,
                                price_18K: req.body.taxisK18},
      incomes             : {price_9K: req.body.incomesK9,
                                  price_14K: req.body.incomesK14,
                                  price_18K: req.body.incomesK18},
      imgPath             : pathname
    })
    
    console.log(jewel);
    //console.log(jewel)
    jewel.save().then((doc) => {
      res.send({redirect: '/jewelry'});
    }, (e) => {
      res.status(400).send(e);
    })
    


  });


//GET jewelry/create
router.get('/create', (req,res,next) => {

 Standars.find().sort({DateCreated: 'desc'}).then((stand) => {
      res.render('jewelry_form.hbs',{
        stand: stand[0]})
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
        doc.jewelry_id          = req.body.jewelry_id;
        doc.work_cost           = req.body.work_cost;
        doc.other_cost          = req.body.other_cost;
        doc.silver_metal_weight = req.body.silver_metal_weight
        doc.gemstones           = req.body.gemstones
        doc.diamonds_per_piece  = req.body.diamonds_per_piece   

        return doc.save()
      }).then((data)=>{
        res.send({redirect: '/jewelry'});
      }, (e) => {
        res.status(400).send(e);
      })
    }
})

module.exports = router;
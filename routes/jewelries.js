var express = require('express');
var router = express.Router();
var path = require('path')
var multer = require('multer')
var fs = require('fs')

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
      jewelry_id: req.body.jewelry_id,
      work_cost : req.body.work_cost,
      other_cost: req.body.other_cost,
      imgPath   : pathname
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
  res.render('jewelry_form.hbs',{
    title: 'Create Jewelry'
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
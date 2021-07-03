const { Router } = require('express');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const multer = require('multer');
let { Template } = require('../models/admin-fileUpload-model');
// const checkAuth = require('../middleware/check-auth');

router.post('/add', upload.single('image'), (req, res) => {
  const itemtype = req.body.itemtype;
  const size = req.body.size;
  const image = req.body.image;
  //const uId = req.body.uId;

  console.log(req.body);

  let template = new Template({
    itemtype,
    size,
    image
  });
  if (req.file) {
    template.image = req.file.path;
  }
  template
    .save()
    .then((template) => {
      res.status(200).json({ message: 'Template added Succefully' });
      console.log(template);
    })
    .catch((err) => {
      res.status(200).send({ message: 'Please try again' });
    });
});

//get
router.get('/:id', function (req, res) {
  template.find({ uId: req.params.id }, function (err, template) {
    if (err) console.log(err);
    else {
      res.json(template);
    }
  });
});

//delete
router.post('/delete/:id', function (req, res) {
  template.deleteOne({ _id: req.params.id }, function (err, template) {
    if (err) res.json(err);
    else res.json('successfully removed');
  });
});

//edit
router.get('/edit/:id', function (req, res) {
  let id = req.params.id;
  template.findById(id, function (err, template) {
    res.json(template);
  });
});

//update
router.post('/update/:id', function (req, res) {
  template.findById(req.params.id, function (err, template) {
    if (!template) res.status(404).send('data is not found');
    else {
      template.itemtype = req.body.itemtype;
      template.size = req.body.size;
      template.uId = req.body.uId;
      template
        .save()
        .then((template) => {
          res.json('Update complete');
        })
        .catch((err) => {
          res.status(400).send('unable to update database ');
        });
    }
  });
});

module.exports = router;



// app.post('/upload',(req,res)=>{
//     if(req.files===null) {
//         return res.status(400).json({msg: 'No file uploaded'});

//     }
//     const file = req.files.file;
//     file.mv(`${__dirname}/uploads/${file.name}`, err=>{
//         if(err){
//             console.error(err);
//             res.status(500).send(err);
//         }
//         res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
//     });
// }) 
module.exports = router;
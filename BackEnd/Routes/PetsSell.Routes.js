// Importing important packages
const express = require("express");

const sharp = require('sharp');
bodyParser = require("body-parser");


//const RNFS = require('react-native-fs');

// Using express and routes
const app = express();
const petRoutes = express.Router();


//Import multer
const multer = require("multer");

//file system
const fs = require("fs");

//path
path = require("path");

//moongoose
const mongoose = require('mongoose');
const petModel = require("../Models/PetsSell");

var  product = require("../Models/ProductsSell.js");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});

//method to store image on disks
//images to be stored in uploads
var dir = "./Upload/Images";
var upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null, "./Upload/Images");
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),

  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return callback(/*res.end('Only images are allowed')*/ null, false);
    }
    callback(null, true);
  },
});




/* Api to add Product */
petRoutes.post("/addpets", upload.any(), (req, res) => {



  //const encoded = req.file.buffer.toString('base64')
  //console.log(encoded)

  try {
    if (
      req.files &&
      req.body &&
      req.body.name &&
      req.body.description &&
      req.body.price &&
      req.body.selectedcity &&
      req.body.contact &&
      req.body.selectedcat&&
      req.body.title
    ) {
      let new_product = new petModel();
     new_product.name = req.body.name;
      new_product.description = req.body.description;
      new_product.price = req.body.price;
      new_product.imgforsell = req.files[0].filename;
      new_product.selectedcity = req.body.selectedcity;
      new_product.contact = req.body.contact;
      new_product.title = req.body.title;
      new_product.selectedcat = req.body.selectedcat;

      //new_product.user_id = req.user.id;
      new_product.save((err, data) => {
        if (err) {
          res.status(400).json({
            errorMessage: err,
            status: false,
          });
        } else {
          res.status(200).json({
            status: true,
            title: "Product Added successfully.",
          });
        }
      });
    } else {
      res.status(400).json({
        errorMessage: "Add proper parameter first!",
        status: false,
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});


// To Get List Of pets
/*petRoutes.route("/get-products").get(function (req, res) {
  petModel.find(function (err, pet) {
    if (err) {
      console.log(err);
    } else {
      res.json(pet);
    }
  });
});

// To Get Employee Details By Employee ID
petRoutes.route('/products/editProducts/:contact').get(function (req, res) {
  let contact = req.params.contact;
  petModel.findById(contact, function (err, products) {
  res.json(products);
  });
  });
  // To Get List Of pets
 petRoutes.route('/').get(function (req, res) {
  petModel.find(function (err, pets) {
  if (err) {
  console.log(err);
  }
  else {
  res.json(pets);
  }
  });
  });
*/
// To Get List of Products

  petRoutes.route('/').get(function (req, res) {
    product.find(function (err, product) {
    if (err) {
    console.log(err);
    }
    else {
    res.json(product);
    }
    });
    });

    // Details



    
  

module.exports = petRoutes;

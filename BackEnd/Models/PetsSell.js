

  const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for pets schema
 let Pets = new Schema({
 name: {
 type: String,
 require:true
 },
 title: {
 type: String,
 require:true
 },
 
 contact: {
 type: Number,
 require:true
 },
 price: {
  type: Number,
  require:true
  },
  description:{
    type:String
  },
  selectedcat:{
    type:String
  },
  selectedcity:{
    type:String
  }
 },{
 collection: 'pets'
 });
 
 module.exports = mongoose.model('Pets', Pets);
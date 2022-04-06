

  const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for pets schema
 let Pets = new Schema({
 name: {
 type: String
 },
 title: {
 type: String
 },
 
 contact: {
 type: Number
 }
 },{
 collection: 'pets'
 });
 
 module.exports = mongoose.model('Pets', Pets);
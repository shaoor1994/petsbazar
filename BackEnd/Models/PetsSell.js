const { Timestamp } = require('mongodb');
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
    type:String,
    require:true
  },
  selectedcity:{
    type:String,
    require:true
  },
  //_id: mongoose.Schema.Types.ObjectId,
  
  imgforsell:{
    type:String,
    require:true,
  //  base64: String,
//imageFormat: String
    data: Buffer, 
    //contentType: String
    //type:Buffer
  },
 // user_id: Schema.ObjectId,
	//is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }
 },
 { timestamps: true },
{
 collection: 'pets'
 }
 
 
 );
 
 const petModel = mongoose.model('pets', Pets);
 module.exports = petModel;
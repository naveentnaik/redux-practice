const mongoose = require('mongoose');

const ProductScema= new mongoose.Schema({
   image:{
    type:String,
    required:true
   },
   name:{
    type:String,
    required:true
   },
   price:{
    type:String,
    required:true
   }
},{timestamps:true})

const Product= mongoose.model('Product',ProductScema)

module.exports = Product
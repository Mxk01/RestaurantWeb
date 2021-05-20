/*
import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import 
*/

let express = require('express');
// let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let shortid = require('short-id');
let app = express();
let port = process.env.PORT || 5000;



app.use(express.json()); 

mongoose.connect("mongodb://localhost/react-shopping-cart-db",
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,

})
.then(()=>{console.log('Connected to mongoose')})

// mongoose.model accepts two parameters
// 1. name of collection in database 
// 2. list of fields 
const Product = mongoose.model("products",new mongoose.Schema(
    {
        _id:{type:String,default:shortid.generate},
        title:{type:String},
        description:{type:String},
        image:{type:String},
        price:{type:Number},
        availableSizes:[String],
    }
)); 


app.get("/api/products",async(req,res)=>{
  const products = await Product.find({})
  res.send(products);
  if(products==='')
  {
      res.send('No products found')
  }
})

// in postman body we can set up the json data and save it in the database via post route
app.post("/api/products",async(req,res)=>{
    // making a new Product 
   const newProduct = new Product(req.body);
    // saving it 
   const savedProduct = await newProduct.save();
   res.send(savedProduct);
})


app.delete("/api/products/:id",async (req,res)=>{
     // finding element by id and deleting
    let deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct + 'was deleted')
})

app.listen(port,()=>{console.log('Listening to port 5000')})
var express = require('express');
var router = express.Router();
var Product=require('../database/product');
var ObjectId = require('mongoose').Types.ObjectId; 

/* GET home page. */
router.get('/', function(req, res, next) {
  var productArray=Product.find(function(err,docs){
    var chunksData=[];
     var chunkSize=3;
     docs=docs.map(function(data){
        data.description=data.description.substring(0,250)+"...";
        return data;
     });
     for(var i=0;i<docs.length;i+=chunkSize){
       chunksData.push(docs.slice(i,i+chunkSize));
     }
res.render('shop/index', { title: 'Shopping Cart',products:chunksData });
  }); 
  
});
router.get('/itemdeatils/:id',function(req,res,next){
   
Product.find({_id:new ObjectId(req.params.id)},function(err,docs){
         res.render('shop/itemdeatils',{product:docs[0]});
    })
  })

module.exports = router;

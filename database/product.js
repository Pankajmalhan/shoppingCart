var mongoose = require('mongoose'); 
// Connection URL  
var Schema = mongoose.Schema;
var product_Schema = new Schema({
    imagePath:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
});

var Employee = mongoose.model('Product', product_Schema);
 
 module.exports=Employee;
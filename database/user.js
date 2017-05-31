var mongoose = require('mongoose'); 
// Connection URL  
var Schema = mongoose.Schema;
var schema_ = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
});

var User = mongoose.model('User', schema_);
 
 module.exports=User;
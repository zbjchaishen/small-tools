var mongoose=require('../lib/mongo.js')
var userSchema=new mongoose.Schema({
    name:String
});
var userModel=mongoose.model('user',userSchema);

module.exports=userModel;
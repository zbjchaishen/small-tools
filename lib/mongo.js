var config=require('config-lite');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb);
var db=mongoose.connection;
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
    console.log("db is connect");
});



module.exports=mongoose;
var userModel=require('../models/user.js');

module.exports=function (app) {
    app.get('/',function (req,res,next) {
        var person=new userModel({name:"有意思"});
        person.save(function (err) {
            if(err){
                console.log(err);
            }else {
                console.log("successful");
            }
        });
        res.send('123');
    })
};
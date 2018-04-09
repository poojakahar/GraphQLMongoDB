var mongoose=require('../db/db')

var SUser=mongoose.Schema({
    name:{
        type: String
    }
})

var user=mongoose.model("user",SUser);

module.exports=user
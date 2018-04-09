var mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/graphqldb").then((db)=>{
    console.log("Connected to mongodb")
},(err)=>{
    console.log("Fail to connect: " + err)
})

module.exports=mongoose;
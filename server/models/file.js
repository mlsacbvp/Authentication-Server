const mongoose=require('mongoose');
const fileSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    downloadSchema:{
        type:Number,
        required:true,
        default:0
    }

});
const File=mongoose.model("File",fileSchema);
module.exports=File;
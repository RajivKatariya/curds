const mongoose=require('mongoose');


const studentSchemaVariable = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:Number
    }
})




const studentModalVariable = mongoose.model('studentModalKey',studentSchemaVariable);


module.exports = studentModalVariable;

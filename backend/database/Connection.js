const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const DB ="mongodb+srv://rajivkatariya098:ffHRdgOVYBeY4Rns@cluster0.vpbccfu.mongodb.net/mydatabase"


mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));
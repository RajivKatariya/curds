require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

require("./database/Connection");
const userdata = require("./modals/schema");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const router = require("./routes/route");



app.use(cors());
app.use(cookiParser());
app.use(express.json());
app.use(router);






app.listen(PORT,()=>{
    console.log(`server is start at ${PORT}`);
})
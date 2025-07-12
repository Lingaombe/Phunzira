import mongoose, { trusted } from "mongoose";

const paperSchema = new mongoose.Schema({

    stream: String,
    subject: String,
    papername: String,
    year: Number,
    papersem: String,
    papertype: String,
    paperpdf: String
    
},{collection: 'paper'});

mongoose.model("paper", paperSchema);   

import mongoose, { trusted } from "mongoose";

const paperSchema = new mongoose.Schema({
    stream:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    papername:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    papersem:{
        type: String,
        required: true
    },
    papertype:{
        type: String,
        required: true
    }/* ,
    paperpdf:{
        type: BinData, 
        required: true
     */
})

const Paper = mongoose.model('Paper', paperSchema);

export default Paper;
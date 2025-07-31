import mongoose from "mongoose";

const paperSchema = new mongoose.Schema({
    stream: { type: String, required: true },   
    subject: { type: String, required: true },
    papername: { type: String, required: true },
    year: { type: String, required: true },
    papersem: { type: String, required: true },
    papertype: { type: String, required: true },
    paperpdf: { type: String, required: true }
}, {
    collection: "phunzira",
    }
);

mongoose.model("paperSchema", paperSchema);
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

//MONGO connection -----------------------------------------------------------------------------------------------------------------

const MONGO ="mongodb+srv://mmb01217:flamingoZ2@cluster0.dhfkb7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

//Multer ----------------------------------------------------------------------------------------------------------------------

import multer from 'multer';
import './paperSchema.js';
const paperSchema = mongoose.model("paperSchema");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 },
});

//APIs ------------------------------------------------------------------

app.get("/", (req, res) => {
    res.send("Welcome to the backend server!");
});

app.post("/papers", upload.single('paperpdf'), async (req, res) => {
    console.log(req.file);
    const { stream, subject, papername, year, papersem, papertype } = req.body;
    const paperPdf = req.file;
    try {
        await paperSchema.create({
            stream: stream,
            subject: subject,
            papername: papername,
            year: year,
            papersem: papersem,
            papertype: papertype,
            paperpdf: paperPdf
        });
        res.status(201).json({ success: true, message: "Paper added successfully!" });
    } catch (error) {
        console.error("Error adding paper:", error);
        res.status(500).json({ success: false, message: "Failed to add paper." });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

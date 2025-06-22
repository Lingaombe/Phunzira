/* import express from 'express';

import multer from 'multer';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

import Paper from '../models/paper.model.js';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = file.originalname
    cb(null, uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

const router = express.Router();

router.post("/", upload.single('file'), async(req,res)=>{
    const paper = req.body;
    const newPaper = new Paper(paper)

    if(!newPaper.stream || !newPaper.subject || !newPaper.papername || !newPaper.year || !newPaper.papersem || !newPaper.papertype || !newPaper.paperpdf){
        return{ success: false, message: "Please fill all the fields" };
    }

    try{
        await newPaper.save();
        res.status(201).json({ success: true, data:newPaper});
    }catch(error){
        console.error(`Error: ${error.message}`)
        res.status(500).json({ success: false, message: "Server Error"})
    }
})

app.get("/", async(req,res)=>{
    res.send("Welcome to the Paper API");
    try{
        const papers = await Paper.find({});
        res.status(200).json({ success: true, data: papers });
    }catch(error){
        console.error(`Error: ${error.message}`)
        res.status(500).json({ success: false, message: "Server Error"})
    }
})


export default router; */
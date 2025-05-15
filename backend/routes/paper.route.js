import express from 'express';

import Paper from '../models/paper.model.js';

const router = express.Router();

router.post("/", async(req,res)=>{
    const paper = req.body;
    const newPaper = new Paper(paper)

    if(!newPaper.stream || !newPaper.subject || !newPaper.papername || !newPaper.year || !newPaper.papersem || !newPaper.papertype){
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

router.get("/", async(req,res)=>{
    try{
        const papers = await Paper.find({});
        res.status(200).json({ success: true, data: papers });
    }catch(error){
        console.error(`Error: ${error.message}`)
        res.status(500).json({ success: false, message: "Server Error"})
    }
})


export default router;
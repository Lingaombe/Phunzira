import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import axios from 'axios';
import sound from '../assets/button.mp3';


function Add(){
    const [newPaper, setNewPaper] = useState({
        stream: "",
        subject: "",
        papername: "",
        year: "",
        papersem: "",
        papertype: ""
    });
    const [paperpdf, setPaperPdf] = useState("");

    const toast = useToast();

    function music() {
        new Audio(sound).play();
    };

    const handleAddPaper = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("stream", newPaper.stream);
        formData.append("subject", newPaper.subject);
        formData.append("papername", newPaper.papername);
        formData.append("year", newPaper.year);
        formData.append("papersem", newPaper.papersem);
        formData.append("papertype", newPaper.papertype);
        formData.append("paperpdf", paperpdf);

        
        formData.forEach((value, key) => {
            console.log(key, value); });
        const result = await axios.post("http://localhost:5000/papers", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }); 
        console.log(result);
        if(result.status == 201){
            toast({
                title: "Success",
                status: "success",
                description: "Paper added successfully!",
                duration: 3000,
                isClosable: false,
                position: "bottom"
            });
        }else if(!result.status){
            toast({
                title: "Success",
                status: "success",
                description: "Failed to add paper.",
                duration: 3000,
                isClosable: false,
                position: "bottom"
            });
        }
    
        setNewPaper({
            stream: "", 
            subject: "",
            papername: "",  
            year: "",
            papersem: "",
            papertype: ""
        });
        setPaperPdf(""); 
    };

    return(
        <>
            <form className="form" onSubmit={handleAddPaper} method="POST" action={"/papers"} enctype="multipart/form-data">
                <p className="title">Add A Paper </p>
                <p className="message">Make a contribution to the Vault <i className="bi bi-emoji-sunglasses"></i> </p>
                <div className="coolinput">

                    <label htmlFor="menu" className="text">Stream:</label>
                    <select required id="menu" className="select" value={newPaper.stream} onChange={(e) => setNewPaper({ ...newPaper, stream: e.target.value })}>
                        <option value="">Select...</option>
                        <option value="BSc">BSc</option>
                        <option value="BCS">BCS</option>
                        <option value="Biotech Entire">Biotech Entire</option>
                        <option value="BCom">BCom</option>
                        <option value="BA">BA</option>
                        <option value="BBA">BBA</option>
                    </select>

                    <label className="text">Subject:</label>
                    <input type="text" required placeholder="Ex. Computer Science..." name="input" className="input" value={newPaper.subject} onChange={(e) => setNewPaper({ ...newPaper, subject: e.target.value })}></input>

                    <label className="text">Name of paper:</label>
                    <input type="text" required placeholder="Ex. Introduction to DBMS..." name="input" className="input" value={newPaper.papername} onChange={(e) => setNewPaper({ ...newPaper, papername: e.target.value })}></input>

                    <label className="text">Year of paper:</label>
                    <input type="number" min="2020" required placeholder="Ex. 2025..." name="input" className="input" value={newPaper.year} onChange={(e) => setNewPaper({ ...newPaper, year: e.target.value })}></input>

                    <label htmlFor="controlled-dropdown" className="text">Paper Semester:</label>
                    <select id="controlled-dropdown" className="select" required value={newPaper.papersem} onChange={(e) => setNewPaper({ ...newPaper, papersem: e.target.value })}>
                        <option value="">Select...</option>
                        <option value="Sem I">Sem I</option>
                        <option value="Sem II">Sem II</option>
                        <option value="Sem III">Sem III</option>
                        <option value="Sem IV">Sem IV</option>
                        <option value="Sem V">Sem V</option>
                        <option value="Sem VI">Sem VI</option>
                    </select>

                    <label htmlFor="controlled-dropdown" className="text">Major/Minor:</label>
                    <select id="controlled-dropdown" className="select" required value={newPaper.papertype} onChange={(e) => setNewPaper({ ...newPaper, papertype: e.target.value })}>
                        <option value="">Select...</option>
                        <option value="Major">Major</option>
                        <option value="Minor">Minor</option>
                    </select><br/>

                    <input type="file" name="file" className="file" multiple accept=".pdf" required onChange={(e) => setPaperPdf(e.target.files[0] )}  />                               
                    
                </div>
                    
                <button className="submit" onClick={music}><input type="submit"></input></button>
            </form>
            
        </>
    )
}

export default Add
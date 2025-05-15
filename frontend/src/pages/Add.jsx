import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePaperStore } from '../store/paper.js';
import { useToast } from '@chakra-ui/react';


function Add(){
    const [newPaper, setNewPaper] = useState({
        stream: "",
        subject: "",
        papername: "",
        year: "",
        papersem: "",
        papertype: ""
    });

    const toast =useToast();

    const {createPaper} = usePaperStore()

    const handleAddPaper = async()=>{
        const {success, message} = await createPaper(newPaper);
        if(!success){
            toast({
                title: "Error",
                status: "error",
                description: message,
                duration: 3000,
                isClosable: false,
                position: "bottom"
            })
        }
        else{
            toast({
                title: "Success",
                status: "success",
                description: message,
                duration: 3000,
                isClosable: false,
                position: "bottom"
            })
        }
        setNewPaper({
            stream: "",
            subject: "",
            papername: "",
            year: "",
            papersem: "",
            papertype: ""
        });
    };
    return(
        <>
            <div className="form">
                <p className="title">Add A Paper </p>
                <p className="message">Make a contribution to the Vault <i className="bi bi-emoji-sunglasses"></i> </p>
                <div className="coolinput">

                    <label htmlFor="menu" className="text">Stream:</label>
                    <select required id="menu" className="select" value={newPaper.stream} onChange={(e) => setNewPaper({ ...newPaper, stream: e.target.value })}>
                        <option value="">Select...</option>
                        <option value="BSc">BSc</option>
                        <option value="BCS">BCS</option>
                        <option value="CS Entire">CS Entire</option>
                        <option value="CS Entire">Biotech Entire</option>
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

                    <input type="file" multiple name="file" className="attach"></input>
                    <p className="small">Upload the pictures in order</p>

                </div>
                    
                <button className="submit" onClick={handleAddPaper}>Submit</button>
            </div>
        </>
    )
}

export default Add
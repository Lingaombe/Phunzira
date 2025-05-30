import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePaperStore } from '../store/paper.js';
import { useToast } from '@chakra-ui/react';
import "./upload.css";
import { Link } from 'react-router-dom';


function Add(){
    const [newPaper, setNewPaper] = useState({
        stream: "",
        subject: "",
        papername: "",
        year: "",
        papersem: "",
        papertype: ""
        /* paperpdf: null */
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
            /* paperpdf: null */
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

                    <div className="files">
                        <label class="custum-file-upload" for="file">
                            <p>pics</p>
                            <div class="icons">
                                <Link to={"https://www.ilovepdf.com/jpg_to_pdf"} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
                                </Link>
                            </div>
                        </label>
                        <label class="custum-file-upload" for="file">
                            <p>pdf</p>
                            <div class="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
                            </div>
                            <input type="file" id="file" className="file" accept=".pdf" required /* onChange={(e) => setNewPaper({ ...newPaper, paperpdf: e.target.files[0] })}  *//>
                        </label>
                    </div>
                    
                </div>
                    
                <button className="submit" onClick={handleAddPaper}>Submit</button>
            </div>
            
        </>
    )
}

export default Add
import './Pages.css';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import sound from '../assets/sound.mp3';
import axios from 'axios';


function Home(){
    function play(){
        new Audio(sound).play();
    }
    
    return(
        <>
            <Search/>
            <div className="cards">
                
            </div>
        </>    
    )
}

export default Home
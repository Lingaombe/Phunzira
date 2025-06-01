import './Pages.css';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import sound from '../assets/sound.mp3';


function Home(){
    function play(){
        new Audio(sound).play();
    }
    return(
        <>
            <Search/>
            <div className="cards">
                <div className="card" onClick={play}>
                    <h2><Link to={"/BSc"}>BSc</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/BCS"}>BCS</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/BCA"}>BCA</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/Biotech"}>Biotech Entire</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/BCom"}>BCom</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/BA"}>BA</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/BBA"}>BBA</Link></h2>
                </div>
            </div>
        </>    
    )
}

export default Home
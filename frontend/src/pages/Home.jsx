import './Pages.css';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

function Home(){
    return(
        <>
            <Search/>
            <div className="cards">
                <div className="card">
                    <h2><Link to={"/BSc"}>BSc</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/BCS"}>BCS</Link></h2>
                </div>
                <div className="card">
                    <h2><Link to={"/CSE"}>CS Entire</Link></h2>
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
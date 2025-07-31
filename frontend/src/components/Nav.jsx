import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./components.css"
import { useColorMode } from "@chakra-ui/react"
import icon from '../assets/icon.png'

function Nav(){
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <div className="NavBar">
            <div className="home">
                <img src={icon} alt="VCKVault Icon" className="logo" />
                <Link to={"/"}><h3 title='Home'>Phunzira</h3></Link> 
            </div>
            <div className="buttons">
                <button title="ToDo"><Link to={"/todo"}><i className="bi bi-journals"></i></Link></button>
                <button title='Add'><Link to={"/add"}><i className="bi bi-file-earmark-plus"></i></Link></button>
                <button onClick={toggleColorMode}> 
                    {colorMode === "light" ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
                </button>
            </div>
        </div>
    )
}

export default Nav


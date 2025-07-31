import "./components.css"
import { Link } from "react-router-dom"

export default function Footer(){
    let date = new Date().getFullYear();
    return(
        <footer>
            <p>Created by hanmngoli <Link to={"https://github.com/Lingaombe"} target="_blank"><i class="bi bi-github"></i></Link></p>
            <p>© {date} </p>
        </footer>
    )
}
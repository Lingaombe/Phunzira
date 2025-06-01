import "./components.css"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <p>&copy;2025 Vivekanand College Kolhapur</p>
            <p>Created by hanmngoli <Link to={"https://github.com/Lingaombe"} target="_blank"><i class="bi bi-github"></i></Link></p>
        </footer>
    )
}
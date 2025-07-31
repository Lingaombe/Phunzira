/* sci-hub.se research papers 
gutenberg.org free books
classcentral.com free online courses
*/

import { Link } from "react-router-dom"

export default function Resources() {
    return(
        <div className="mid">
        <div className="resources">
            <Link to={"/home"} className="resource">
                <h2 style={{fontSize: "2rem"}}>Papers</h2>
                <p>Access the papers from students past.</p>
            </Link>
            <Link to="https://sci-hub.se" target="_blank" className="resource">
                <h2 style={{fontSize: "2rem"}}>Sci-Hub</h2>
                <p>Access research papers on various topics.</p>
            </Link>
            <Link to="https://www.gutenberg.org" target="_blank" className="resource">
                <h2 style={{fontSize: "2rem"}}>Project Gutenberg</h2>
                <p>Explore a collection of free books.</p>
            </Link> 
            <Link to="https://www.classcentral.com" target="_blank" className="resource">
                <h2 style={{fontSize: "2rem"}}>Class Central</h2>
                <p>Learn new skills with free online courses.</p>
            </Link>              
        </div>
        </div>
    )
}
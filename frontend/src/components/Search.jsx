import "./components.css"
/* import { useEffect, useState } from "react" */

function Search(){

    /* const {query, setQuery} = useState("");
    const {result, setResult} = useState([]);
    const {loading, setLoading} = useState(false);

    useEffect(()=>{
        if(query.length > 2){
            setLoading(true)
            fetch(`http://dummyjson.com/products/search?q=${query}`)
            .then((res) => res.json())
            .then((data) => setResult(data))
            .finally(() => setLoading(false));
        } else{
            setResult([]);
        }
    }, [query]) */
    return(
        <>
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search the vault" type="search" className="search" 
                /* onChange={e => setQuery(e.target.value)} value={query} *//>
            </div><br/>
        </>
    )
}

export default Search
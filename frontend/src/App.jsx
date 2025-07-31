import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home'
import Add from './pages/Add'
import Resources from './pages/resources'
import "./index.css"


import Nav from './components/Nav'
import Footer from './components/Footer';

function App() {
  return (
    <div className="font">
      <Nav/>
      <Routes>
        <Route path="/" element={<Resources/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

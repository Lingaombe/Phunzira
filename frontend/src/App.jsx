import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home'
import Add from './pages/Add'

import BSc from './pages/BSc'
import BCS from './pages/BCS';
import CSE from './pages/CSE';
import Biotech from './pages/Biotech';
import BCom from './pages/BCom';
import BA from './pages/BA';
import BBA from './pages/BBA';


import Nav from './components/Nav'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/BSc" element={<BSc/>} />
        <Route path="/BCS" element={<BCS/>} />
        <Route path="/CSE" element={<CSE/>} />
        <Route path="/Biotech" element={<Biotech/>} />
        <Route path="/BCom" element={<BCom/>} />
        <Route path="/BA" element={<BA/>} />
        <Route path="/BBA" element={<BBA/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

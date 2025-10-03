import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Certificate from './components/Certificate'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
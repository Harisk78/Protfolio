import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Certificate from './components/Certificate'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const obj = {
    name: "sk",
    age: 21,
    car: "mini"
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home userData={obj} />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
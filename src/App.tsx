

import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';
import React from 'react';

const App : React.FC =() =>{


  return (
    <>
    <Header/>
    <Routes>
         <Route path="/" element={<Hero/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path='/projects/:id' element={<ProjectDetails/>} /> 
         {/* <Route path="*" element={<Hero/>} /> */}
    
      </Routes>

      
     <Footer />
    </>
  )
}

export default App

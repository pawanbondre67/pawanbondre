import './App.css'
import Footer from './components/extras/footer/Footer'
import Header from './components/extras/header/Header'
import Hero from './components/hero/Hero'
import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';
import { BlogList } from './components/BlogList';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path="/blogs" element={<BlogList />} />
     
      </Routes>
      <Footer />
    </>
  )
}

export default App

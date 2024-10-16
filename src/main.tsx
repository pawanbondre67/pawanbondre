import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './components/Projects/Projects.tsx';
import ProjectDetails from './components/Projects/ProjectDetails.tsx';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />, 
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <Header />
  <RouterProvider router={router} />
  <Footer/>
  </StrictMode>,
)

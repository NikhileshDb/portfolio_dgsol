import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectPage';
import TestimonialPage from './pages/TestimonialPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';



function App() {
  return (
   
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/testimonials" element={<TestimonialPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        
    </Routes>
    </BrowserRouter>

  );
}

export default App;

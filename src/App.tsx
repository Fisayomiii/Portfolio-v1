import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import About from "./pages/Routes/About/About";
import Skills from "./pages/Routes/Skills/Skills";
import NotFound from './pages/404/NotFound'
import Projects from "./pages/Routes/Portfolio/Projects";
import Contact from "./pages/Routes/Contact/Contact";
import kursor from 'https://unpkg.com/kursor/dist/kursor.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
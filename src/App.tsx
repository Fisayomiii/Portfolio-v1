import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Routes/About/About";
import Contact from "./pages/Routes/Contact/Contact";
import Projects from "./pages/Routes/Portfolio/Projects";
import Skills from "./pages/Routes/Skills/Skills";
import NotFound from "./pages/404/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
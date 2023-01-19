import Sidebar from "../../components/Sidebar/Sidebar";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Intro />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
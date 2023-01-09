import Sidebar from "../../components/Sidebar/Sidebar";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Project from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="section-home">
          <Intro />
          <About />
          <Project />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default Home
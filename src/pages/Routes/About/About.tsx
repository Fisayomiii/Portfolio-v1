import Aboutme from "../../../components/About/About";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Footer from "../../../components/Footer/Footer";

function About() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="main"><br /><br /><br /><br /><br /><br />
          <Aboutme />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default About
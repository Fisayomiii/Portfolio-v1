import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Animation from "../../../Ui/skills-Animation/Animation";
// import { motion, Variants } from "framer-motion";

function Skills() {
  // const cardVariants: Variants = {
  //   offscreen: { scale: 0.9, opacity: 0 },
  //   onscreen: {
  //     scale: 1, opacity: 1,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8
  //     }
  //   }
  // };
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="main"><br /><br /><br /><br /><br /><br />
          <div className="container">
            <div className="content">
              <h2 aria-label="About me" className="blast-root">
                <span className="blast" aria-hidden="true" >W</span>
                <span className="blast" aria-hidden="true" >h</span>
                <span className="blast" aria-hidden="true" >a</span>
                <span className="blast" aria-hidden="true" >t</span>
                <span className="blast" aria-hidden="true" style={{ opacity: 0 }} >.</span>
                <span className="blast" aria-hidden="true" >c</span>
                <span className="blast" aria-hidden="true" >a</span>
                <span className="blast" aria-hidden="true" >n</span>
                <span className="blast" aria-hidden="true" style={{ opacity: 0 }}>.</span>
                <span className="blast" aria-hidden="true" >i</span>
                <span className="blast" aria-hidden="true" style={{ opacity: 0 }}>.</span>
                <span className="blast" aria-hidden="true" >d</span>
                <span className="blast" aria-hidden="true" >o</span>
                <span className="blast" aria-hidden="true" >?</span>
              </h2>
              <div className="fake-big-1">Skills</div>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">I like to craft solid and scalable frontend products with great user experiences.<br /> With the skills I posses,
                I use various Frontend technologies to design and develop attractive websites which converts visitors to customers. I develop creative and responsive Frontend layouts. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
              </p><br /><br />
              <Animation />
            </div>
          </div>
          <Footer />

        </main>
      </div>
    </>
  )
}

export default Skills
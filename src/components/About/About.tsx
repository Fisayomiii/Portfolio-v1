import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function About() {

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const scrollrevealanimation = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollrevealanimation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      scrollrevealanimation.start({
        opacity: 0,
        y: "100px",
      });
    }

    // console.log(inView);
  }, [inView]);

  return (
    <><br />
      <div className="container" >
        <div className="content">
          <div className="fake-big-1 ">About Me</div>
          <motion.div ref={ref} animate={scrollrevealanimation}>
            <h2 aria-label="About me" className="blast-root fadeIn" >
              <span className="blast" aria-hidden="true" >W</span>
              <span className="blast" aria-hidden="true" >h</span>
              <span className="blast" aria-hidden="true" >o</span>
              <span className="blast" aria-hidden="true" style={{ opacity: 0 }} >.</span><span className="blast" aria-hidden="true" >a</span>
              <span className="blast" aria-hidden="true" >m</span>
              <span className="blast" aria-hidden="true" style={{ opacity: 0 }}>.</span>
              <span className="blast" aria-hidden="true" >i</span>
              <span className="blast" aria-hidden="true" > ?</span>
            </h2>
            <motion.p >
              Hello! I'm <span className='portfolio_link'>Fisayomi </span>, a <span className='portfolio_link'>Frontend developer</span> based in Lagos, Nigeria. My passion lies in designing user-friendly interfaces that enhance the overall user experience. I am driven by the desire to work collaboratively with like-minded developers and designers who share my vision for creating seamless digital experiences.
            </motion.p>

            <br />
            <p className="fadeIn">Having honed my skills in frontend development, I am constantly seeking opportunities to learn and grow from talented individuals who can broaden my knowledge and expertise. Working in a team environment allows me to gain insights from different perspectives, fostering creativity and innovation.</p>

            <br />
            <p className="fadeIn">
            In addition to my development work, I am a <span className='portfolio_link'>Video editor</span> and a <span className='portfolio_link'>Digital Marketer</span>. I am passionate about creating visually compelling content that not only captures attention but also delivers a meaningful message. My video editing skills allow me to bring ideas to life, weaving together visuals and sound to tell stories that resonate with audiences.✨
            </p>
          </motion.div>

          <br /><br />
        </div>
      </div>
    </>
  )
}

export default About

import Project from "./Projects/Project";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


function Portfolio() {

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
        <>
            <div>
                <div >
                    <div className="container" >
                        <div className="content">
                            <div className="fake-big-1">Work</div>
                            <motion.div ref={ref} animate={scrollrevealanimation}>
                                <h2 aria-label="My Portfolio" className="blast-root">
                                    <span className="blast" aria-hidden="true" >M</span>
                                    <span className="blast" aria-hidden="true" >y</span>
                                    <span className="blast" aria-hidden="true" style={{ opacity: 0 }}>.</span>
                                    <span className="blast" aria-hidden="true" >P</span>
                                    <span className="blast" aria-hidden="true" >o</span>
                                    <span className="blast" aria-hidden="true" >r</span>
                                    <span className="blast" aria-hidden="true" >t</span>
                                    <span className="blast" aria-hidden="true" >f</span>
                                    <span className="blast" aria-hidden="true" >o</span>
                                    <span className="blast" aria-hidden="true" >l</span>
                                    <span className="blast" aria-hidden="true" >i</span>
                                    <span className="blast" aria-hidden="true" >o</span>
                                </h2>
                                <p>
                                    A small gallery of recent projects done by me.
                                    Interested to see all of the projects pushed to my Github repository? Then visit my
                                    <a href="http://github.com/Fisayomiii" target="_blank" rel="noreferrer" className='portfolio_link'> GitHub</a> page.<br />
                                </p>
                            </motion.div>

                        </div>
                    </div><br /><br />
                    <Project />

                </div>
            </div>

        </>
    )
};

export default Portfolio;
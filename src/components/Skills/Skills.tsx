import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Skills() {
    const skills = ['HTML', 'CSS', 'Tailwind CSS', 'Javascript', 'React JS', 'React TS', 'Vue', 'Angular ( Seldomly build with it. )'];
    const devtools = ['Github', 'GPT', 'Codepen', 'VS Code', 'Vercel', 'Netlify', 'Midjourney'];

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

    const mvariant1 = {
        offscreen: { scale: 0.9, opacity: 0 },
        onscreen: { scale: 1, opacity: 1, transition: { delay: 1.1 } }
    };

    return (
        <>
            <div className="container" >
                <div className="content" >
                    <motion.div ref={ref} animate={scrollrevealanimation} >
                        <motion.h2 aria-label="About me" className="blast-root">
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
                        </motion.h2>
                        <div className="fake-big-1">Skills</div>
                        <p>I like to craft solid and scalable frontend products with dope user experiences ⚡.<br /> With the skills I posses,
                            I use various Frontend technologies to design and develop attractive websites which converts visitors to customers. I develop creative and responsive Frontend layouts. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        </p><br />
                        <p >Here are a few technologies I work with:
                            <ul className="skills-list">
                                {skills.map((skill, i) => <motion.li variants={mvariant1} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} key={i}>{skill}</motion.li>)}
                            </ul>
                        </p><br />
                        <p>This are some of the tools I use when building:
                            <ul className="skills-list">
                                {devtools.map((tools, i) => <motion.li variants={mvariant1} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} key={i}>{tools}</motion.li>)}
                            </ul>
                        </p>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Skills
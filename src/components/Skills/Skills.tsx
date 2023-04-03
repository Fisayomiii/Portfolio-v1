import { motion, Variants } from "framer-motion";

function Skills() {
    const skills = ['HTML', 'CSS', 'Tailwind CSS', 'Javascript', 'React JS', 'React TS', 'Vue', 'Angular ( Seldomly build with it. )'];
    const devtools = ['Github', 'GPT 4', 'Intellitools', 'Chrome', 'VS Code', 'Vercel', 'Netlify', 'Midjourney'];

    const cardVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 60,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const mvariant1 = {
        offscreen: { scale: 0.9, opacity: 0 },
        onscreen: { scale: 1, opacity: 1, transition: { delay: 1 } }
    };

    return (
        <>
            <motion.div className="container" initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                <motion.div className="content" variants={cardVariants}>
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
                    <motion.p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">I like to craft solid and scalable frontend products with dope user experiences ⚡.<br /> With the skills I posses,
                        I use various Frontend technologies to design and develop attractive websites which converts visitors to customers. I develop creative and responsive Frontend layouts. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                    </motion.p><br />
                    <motion.p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Here are a few technologies I work with:
                        <ul className="skills-list">
                            {skills.map((skill, i) => <motion.li variants={mvariant1} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} key={i}>{skill}</motion.li>)}
                        </ul>
                    </motion.p><br />
                    <motion.p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">This are some of the tools I build with:
                        <ul className="skills-list">
                            {devtools.map((tools, i) => <motion.li variants={mvariant1} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} key={i}>{tools}</motion.li>)}
                        </ul>
                    </motion.p>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Skills

function Skills() {
    const skills = ['TypeScript', 'React', 'Angular', 'HTML', 'CSS', 'Vite'];

    const devtools = ['Bootstrap ', 'Tailwind', 'Github', 'Codepen', 'Terminal', 'Vercel', 'Netlify', 'Midjourney'];

    return (
        <>
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
                    </p><br />
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Here are a few technologies i work with:
                        <ul className="skills-list">
                            {skills.map((skill, i) => <li key={i}>{skill}</li>)}
                        </ul>
                    </p><br />
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Here are few of my Dev tools:
                        <ul className="skills-list">
                            {devtools.map((tools, i) => <li key={i}>{tools}</li>)}
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Skills
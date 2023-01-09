import Projects from './projects/Projects';

function Project() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="fake-big-1">Work</div>
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
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">I like to Create standard and pixel
                        perfect Frontend Product with great
                        User experiences .<br />
                        A small gallery of recent projects done by me.
                        I.
                        interested to see some of the projects pushed to my github repository? Then Visit my<a
                            href="https://github.com/Fisayo6969" target="_blank" rel="noreferrer" className='portfolio_link'> GitHub</a> page.<br />
                        {/* Or if you are interested to see some of the Design projects on my Behance profile? Then Visit my <a href="https://www.behance.net/fisayomi" className='portfolio_link'>Behance</a> page.<br /> */}
                    </p>
                </div>
            </div>
            <Projects />

        </>
    )
}

export default Project;

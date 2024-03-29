import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Contact() {
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
            <div className="container">
                <div className="content contact-section">
                    <motion.form ref={ref} animate={scrollrevealanimation} className="contact-form">
                        <div className="contact-heading">
                            <div id="header">
                                <div className="fake-big-1">@@</div>
                                <h2 aria-label="My Portfolio" className="blast-root">
                                    <span className="blast" aria-hidden="true" >C</span>
                                    <span className="blast" aria-hidden="true" >o</span>
                                    <span className="blast" aria-hidden="true" >n</span>
                                    <span className="blast" aria-hidden="true" >t</span>
                                    <span className="blast" aria-hidden="true" >a</span>
                                    <span className="blast" aria-hidden="true" >c</span>
                                    <span className="blast" aria-hidden="true" >t</span>
                                    <span className="blast" aria-hidden="true" style={{ opacity: 0 }}>.</span>
                                    <span className="blast" aria-hidden="true" >M</span>
                                    <span className="blast" aria-hidden="true" >e</span>
                                </h2>
                            </div>
                            <p>
                                Got a question or proposal, or just want to say hello? Go ahead. You're Free {":)"}
                            </p>
                        </div>

                        <a href="mailto:oluwafisayomiofficial@gmail.com" rel="noopener noreferrer" target="_blank" className="contact-button">
                            <div>
                                <span className="bg"></span>
                                <span className="base"></span>
                                <span className="text">
                                    Send Message
                                </span>
                            </div>
                        </a>
                        {/* <div className="form-input-wrapper">
                            <div className="form-input-group">
                                <input type="text" placeholder="Name" name="name" className="name" />
                                <span></span>
                            </div>
                            <div className="form-input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="email"
                                />
                                <span></span>
                            </div>
                        </div>
                        <div className="form-input-group">
                            <textarea

                                placeholder="Message"
                                className="textarea"
                                name="message"
                            ></textarea>
                            <span></span>
                        </div>
                        <div className="message"></div>
                        <button type="submit" className="contact-button submit-button">
                            <div>
                                <span className="bg"></span>
                                <span className="base"></span>
                                <span className="text">
                                    Send Message
                                </span>
                            </div>
                        </button> */}
                    </motion.form>

                    <motion.div className="google-map" ref={ref} animate={scrollrevealanimation} >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932733844!2d3.1438722012219147!3d6.548376808966097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1672598599388!5m2!1sen!2sng"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Contact
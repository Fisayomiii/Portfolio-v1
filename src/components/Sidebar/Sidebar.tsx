import { useState } from 'react';
import { Dialog } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import Social from '../../Ui/social/Social';

function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // bigger screen animation

    const variant1 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 3.5 } }
    };

    const variant2 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 3.7 } }
    };

    const variant3 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 3.8 } }
    };

    const variant4 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 4 } }
    };

    const variant5 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 4.2 } }
    };
    const varianta = {
        hidden: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        visible: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
                delay: 3
            }
        }
    };

    // smaller screen animation
    const mvariant1 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 1 } }
    };

    const mvariant2 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 1.3 } }
    };

    const mvariant3 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 1.5 } }
    };

    const mvariant4 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 1.7 } }
    };

    const mvariant5 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 2 } }
    };
    return (
        <>
            {/* Sidebar */}
            <aside>
                <div className="sidebar" ><br />
                    <motion.ul>
                        <motion.li variants={varianta} initial="hidden" animate="visible">
                            <NavLink to="/" className="navitem">
                                <i className='bx bx-chevrons-down'></i>
                            </NavLink>
                        </motion.li>
                        <motion.li variants={variant1} initial="hidden" animate="visible">
                            <NavLink to="/" className="navitem">
                                <i className="bx bx-home" ></i>
                                <span>Home</span>
                            </NavLink>
                        </motion.li>
                        <motion.li variants={variant2} initial="hidden" animate="visible">
                            <NavLink to="/about" className="navitem">
                                <i className="bx bx-user" ></i>
                                <span>About me</span>
                            </NavLink>
                        </motion.li>
                        <motion.li variants={variant3} initial="hidden" animate="visible">
                            <NavLink to="/portfolio" className="navitem">
                                <i className="bx bx-briefcase" ></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </motion.li>
                        <motion.li variants={variant4} initial="hidden" animate="visible">
                            <NavLink to="/skills" className="navitem">
                                <i className="bx bx-code" ></i>
                                <span>Skills</span>
                            </NavLink>
                        </motion.li>
                        <motion.li variants={variant5} initial="hidden" animate="visible">
                            <NavLink to="/contact" className="navitem">
                                <i className="bx bx-envelope" ></i>
                                <span>Contact me</span>
                            </NavLink>
                        </motion.li>
                    </motion.ul>
                </div>

                {/* mobilesidebar */}
                <Dialog as="div" className="mobilesidebar" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="menu-toggle" onClick={() => setMobileMenuOpen(false)}>
                        <div className="line-wrapper">
                            <span className="line1"></span>
                            <span className="line2"></span>
                        </div>
                    </div>
                    <Dialog.Panel as="div">
                        <motion.ul>
                            <motion.li variants={mvariant1} initial="hidden" animate="visible">
                                <NavLink to="/" className="navitem">
                                    <i className="bx bx-home" ></i>
                                    <span>Home</span>
                                </NavLink>
                            </motion.li>
                            <motion.li variants={mvariant2} initial="hidden" animate="visible">
                                <NavLink to="/about" className="navitem">
                                    <i className="bx bx-user" ></i>
                                    <span>About me</span>
                                </NavLink>
                            </motion.li>
                            <motion.li variants={mvariant3} initial="hidden" animate="visible">
                                <NavLink to="/portfolio" className="navitem">
                                    <i className="bx bx-briefcase" ></i>
                                    <span>Portfolio</span>
                                </NavLink>
                            </motion.li>
                            <motion.li variants={mvariant4} initial="hidden" animate="visible">
                                <NavLink to="/skills" className="navitem">
                                    <i className="bx bx-code" ></i>
                                    <span>Skills</span>
                                </NavLink>
                            </motion.li>
                            <motion.li variants={mvariant5} initial="hidden" animate="visible">
                                <NavLink to="/contact" className="navitem">
                                    <i className="bx bx-envelope" ></i>
                                    <span>Contact me</span>
                                </NavLink>
                            </motion.li>
                        </motion.ul>

                    </Dialog.Panel>
                </Dialog>
            </aside>

            {/* hamburger */}
            <div className="menu-toggle">
                <div className="hamburger" onClick={() => setMobileMenuOpen(true)} >
                    <input type="checkbox" />
                    <div className="hamburgerlines">
                        <span className="lines line1"></span>
                        <span className="lines line2"></span>
                        <span className="lines line3"></span>
                    </div>
                </div>
            </div>
            <Social />
        </>
    )
}

export default Sidebar;

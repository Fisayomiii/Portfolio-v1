import '../social/social.css';
import { motion } from "framer-motion";

function Social() {
    const variant4 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 3.5 } }
    };

    const variant3 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 3.7 } }
    };

    const variant2 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 3.8 } }
    };

    const variant1 = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 4 } }
    };
    return (
        <>
            <div className="hOvuuP">
                <ul className='dVLQAC'>
                    <motion.li variants={variant1} initial="hidden" animate="visible" className='github'>
                        <a href="https://github.com/Fisayomiii" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <i className='bx bxl-github' ></i>
                        </a>
                    </motion.li>
                    <motion.li variants={variant2} initial="hidden" animate="visible" className='twitter'>
                        <a href="https://twitter.com/999tweets_her" aria-label="Twitter" target="_blank" rel="noreferrer">
                            <i className='bx bxl-twitter'></i>
                        </a>
                    </motion.li>
                    <motion.li variants={variant3} initial="hidden" animate="visible" className='linkedin'>
                        <a href="https://www.linkedin.com/in/fisayomiii" aria-label="Linkedin" target="_blank" rel="noreferrer">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                    </motion.li>
                    <motion.li variants={variant4} initial="hidden" animate="visible" className='figma'>
                        <a href="https://dev.to/fisayomi" aria-label="Dev.to" target="_blank" rel="noreferrer">
                            <i className='bx bxl-dev-to'></i>
                        </a>
                    </motion.li>
                </ul>
            </div>
        </>
    )
}

export default Social;

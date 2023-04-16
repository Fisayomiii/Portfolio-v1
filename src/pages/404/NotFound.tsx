import { NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";

import "../404/NotFound.css";

function NotFound() {
  const cardVariants: Variants = {
    offscreen: { scale: 0.9, opacity: 0 },
    onscreen: {
      scale: 1, opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: .5
      }
    }
  };

  const cardVariants2: Variants = {
    offscreen: { scale: 0.9, opacity: 0 },
    onscreen: {
      scale: 1, opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: .7
      }
    }
  };

  const cardVariants3: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: .9
      }
    }
  };
  return (
    <>
      <div className="cover">
        <motion.h3 initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }} variants={cardVariants}>404</motion.h3>
        <div className="infoandcalltoaction">
          <motion.span initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }} variants={cardVariants2}>Fisayomi didn't route this page you are trying to access!</motion.span>
          <NavLink to={"/"} className="nfound-button">
            <motion.div initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }} variants={cardVariants3}>
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">Go to Home</span>
            </motion.div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NotFound;

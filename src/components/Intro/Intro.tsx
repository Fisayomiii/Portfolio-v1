import ScrollDrown from "../../Ui/scroll/Scroll";
import Button from "../../Ui/viewResumeBtn/Button";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

function Intro() {
  const variant1 = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: .6 } }
  };

  const variant2 = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 2 } }
  };

  const variant3 = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 2.4 } }
  };

  const variant4 = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 2.8 } }
  };

  return (
    <>
      <div className="text-zone">
        <h1>
          <motion.span initial="hidden" animate="visible" variants={variant1} >Hi,</motion.span><br />
          <motion.p initial="hidden" animate="visible" variants={variant2}>I'm <b>
            <strong className='oshawdow'>
              O
            </strong>
            <a href="http://twitter.com/999tweets_her" target="_blank" rel='noreferrer'>luwafisayomi,</a>
          </b>
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={variant3}>
            <Typewriter options={{ strings: ['Frontend Developer.', 'Video Editor', 'Teenager'], autoStart: true, loop: true, }} />
          </motion.div>
        </h1><br />

        <motion.div initial="hidden" animate="visible" variants={variant4}>
          <Button />
          <ScrollDrown />
        </motion.div>
      </div>
    </>
  )
}

export default Intro;


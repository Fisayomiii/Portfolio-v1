import ScrollDrown from "../../Ui/scroll/Scroll";
import Button from "../../Ui/viewResumeBtn/Button";
import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <>
      <div className="text-zone">
        <h1><span >Hi,</span> <br />
          I'm <b><strong className='oshawdow'>O</strong><a href="https://twitter.com/999tweets_her" target="_blank" rel='noreferrer'>luwafisayomi,</a></b> <br /> <Typewriter options={{ strings: ['Frontend Developer.', 'Teenager.', 'Ai Enthusiast.', 'Ai Artist.'], autoStart: true, loop: true, }} />
        </h1><br />
        <Button />
        <ScrollDrown />
      </div>
    </>
  )
}

export default Intro;
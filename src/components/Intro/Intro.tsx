import Typewriter from 'typewriter-effect';
import ScrollDrown from '../../Ui/scroll/Scroll';
import Button from '../../Ui/viewResumeBtn/Button';

function intro() {

  return (
    <>
      <div className="text-zone">
        <h1>Hi, <br /> I'm <b><strong className='oshawdow'>O</strong><a href="https://twitter.com/999tweets_her" target="_blank" rel='noreferrer'>luwafisayomi,</a></b> <br /> <Typewriter options={{ strings: ['Frontend Developer.', 'Aspiring Ui/Ux Designer.', 'Teenager.'], autoStart: true, loop: true, }} />
        </h1>
        <Button />
        <ScrollDrown/>
      </div>
    </>
  )
}

export default intro;

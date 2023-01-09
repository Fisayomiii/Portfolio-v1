import '../skills-Animation/animation.css';

const Animation = () => {
  return (
    <>
      <ul className="skills-bar-container">
        <label>HTML</label>
        <span className="percent" id="html-pourcent"></span>
        <li>
          <span className="progressbar progresspink" id="progress-html"></span>
        </li>

        <label>CSS</label>
        <span className="percent" id="css-pourcent"></span>
        <li>
          <span className="progressbar progresslime" id="progress-css"></span>
        </li>

        <label>React js</label>
        <span className="percent" id="javascript-pourcent"></span>
        <li>
          <span className="progressbar progresspink" id="progress-javascript"></span>
        </li>

        <label>Typescript</label>
        <span className="percent" id="angular-pourcent"></span>
        <li>
          <span className="progressbar progresspink" id="progress-angular"></span>
        </li>
      </ul>
    </>
  )
}

export default Animation
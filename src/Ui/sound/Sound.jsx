import '../sound/sound.css';

function Sound() {
  return (
    <>
      <div id="sound">
        <audio id="myAudio" src='https://musica-api.up.railway.app/audio/audio_4.mp3' controls></audio>
        <i className='bx bxl-soundcloud'></i>
        <span>Sound</span>
        <div className="on-off">
          <span id="off">OFF</span>
          {/* <span id="on"> On</span> */}
        </div>
      </div>
    </>
  )
}

export default Sound;

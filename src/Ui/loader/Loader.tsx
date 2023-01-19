import '../loader/loader.css';

const Loader = () => {
  return (
    <>
        <div className="loader-wrapper">
          <div className="inner">
            <span>Fisayomi Thinks...</span><br />
            <div className="progress-loader">
              <div className="progress"></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Loader;

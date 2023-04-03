import { NavLink } from "react-router-dom";
import "../404/NotFound.css";

function NotFound() {
  return (
    <>
      <div className="cover">
        <h3>404</h3>
        <div className="infoandcalltoaction">
          <span>Fisayomi didn't route this page you are trying to access!</span>
          <NavLink to={"/"} className="nfound-button">
            <div>
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">Go to Home</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NotFound;

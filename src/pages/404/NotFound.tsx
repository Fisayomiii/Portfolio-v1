import { NavLink } from 'react-router-dom';
import '../404/NotFound.css';

function NotFound() {
  return (
    <>
      <div className="cover">
        <h3>404</h3>
        <div className="infoandcalltoaction">
          <span>Fisayomi didn't route this page!</span>
          <p>
            <NavLink to={'/'}>
              Go back Home
            </NavLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default NotFound;

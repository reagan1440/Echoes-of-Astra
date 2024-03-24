import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cosmog from '../../assets/images/Cosmog.png';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/donationHistory">
              Make a Donation
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/auth">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-2">
      <h1>
      <Link to="/">
          {/* <img src={Cosmog} alt="Cosmog" style={{ width: '50px' }} /> */}
          Echoes Of Astra
        </Link>

      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;

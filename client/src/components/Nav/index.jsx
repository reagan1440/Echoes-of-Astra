import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { IoHome } from "react-icons/io5";


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
          <Link  className="icons" to="/donations"  title="Make a donation">
           <BiSolidDonateHeart style={{ fontSize: "30px" }} />
           </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a className="icons" title="Logout" href="/" onClick={() => Auth.logout()}>
            <IoLogOut style={{ fontSize: "30px" }} />
            </a>
          </li>
          <li className="mx-1">
            <Link className="icons" to="/"  title="Go to homepage">
            <IoHome style={{ fontSize: "30px" }} />
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="icons">
            <Link to="/auth" title="Login">
              <CgProfile style={{ fontSize: "30px" }} />
            </Link>
          </li>
          <li className="icons">
            <Link to="/donations"  title="Make a donation">
           
              <BiSolidDonateHeart style={{ fontSize: "30px" }} />
            </Link>
          </li>
          <li className="icons">
            <Link to="/"  title="Go to homepage">
            <IoHome style={{ fontSize: "30px" }}/>
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-2" style={{ justifyContent: 'space-between' }}>
      <h1>
        <Link to="/">
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
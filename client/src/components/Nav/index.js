import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasolid, facloud } from '@fortawesome/fontawesome-free-solid'

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
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
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav>
        {showNavigation()}
      </nav>

      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag"></span>    
          <FontAwesomeIcon icon="fa-solid fa-cloud" fade style={{color: "#4cbd3d",}} />
          You Stink
          <FontAwesomeIcon icon="fa-solid fa-skull" shake style={{color: "#b3b8c1",}} />
        </Link>
      </h1>

    </header>
  );
}

export default Nav;

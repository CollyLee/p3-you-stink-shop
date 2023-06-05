import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasolid, facloud } from '@fortawesome/fontawesome-free-solid'
import noseimage from "../../assets/NoseLogo.jpg"
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
    <header className="px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag"></span>
          <img src={noseimage} alt="nose"></img>
        </Link>
      </h1>
      <nav>
        {showNavigation()}
      </nav>

    </header>
  );
}

export default Nav;

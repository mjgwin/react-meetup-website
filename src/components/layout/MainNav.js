import React from "react";
import { Link } from "react-router-dom";
import MainNavStyles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={MainNavStyles.header}>
      <div className={MainNavStyles.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newMeetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;

import { NavLink } from 'react-router-dom';
import React from 'react';
import Logo from './planet.png';
import css from './Header.module.css';

export default function Header() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <nav>
        <div className={css.left_section}>
          <img src={Logo} alt="Logo" className={css.logo} />
          <h1 className={css.logo_title}>Space Travelers&apos; Hub</h1>
        </div>
        <ul className={css.nav_links}>
          <li className={css.nav_link}>
            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/">Rockets</NavLink>
          </li>
          <div className={css.combine}>
            <li className={css.nav_link}>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/missions"
              >
                Missions

              </NavLink>
            </li>
            <div className={css.vLine} />
            <li className={css.nav_link}>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/profile"
              >
                My Profile

              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

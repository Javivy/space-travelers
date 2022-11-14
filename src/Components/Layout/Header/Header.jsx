import React from 'react';
import Logo from './planet.png';
import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <nav>
        <div className={css.left_section}>
          <img src={Logo} alt="Logo" className={css.logo} />
          <h1 className={css.logo_title}>Space Travelers&apos; Hub</h1>
        </div>
        <ul className={css.nav_links}>
          <li className={css.nav_link}>
            <a to="/Rockets">Rockets</a>
          </li>
          <div className={css.combine}>
            <li className={css.nav_link}>
              <a to="/Missions">Missions</a>
            </li>
            <div className={css.vLine} />
            <li className={css.nav_link}>
              <a to="Profile">My Profile</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

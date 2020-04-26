import React from 'react';
import { Link } from 'gatsby';
import styles from './Navbar.module.scss';
import logo from '../../images/logo.svg';

const Navbar = () => (
  <nav className={styles.Navbar}>
    <Link to="/">
      <img src={logo} alt="personal logo" style={{ cursor: 'pointer' }} />
    </Link>
    <ul className={styles.navItems}>
      <Link
        to="/"
        className={styles.navItem}
        activeStyle={{ fontWeight: '700' }}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={styles.navItem}
        activeStyle={{ fontWeight: '700' }}
      >
        About
      </Link>
      {/*🚧 <li>Portfolio</li> 🚧*/}
    </ul>
  </nav>
);

export default Navbar;

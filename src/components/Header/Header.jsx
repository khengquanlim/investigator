import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to Invest-igator!</h1>
      <div className="header-icons">
        <Link className="icon-spacing" to="/" >🏠</Link>
        <Link className="icon-spacing" to="/portfolio">✉️</Link>
      </div>
    </header>
  );
}

export default Header;
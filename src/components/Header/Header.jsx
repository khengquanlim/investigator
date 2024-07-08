import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = ({ scrollToFeed, scrollToStock, scrollToContact, activeSection }) => {
  return (
    <header className="header sticky">
      <h1>Welcome to Invest-igator!</h1>
      <div className="header-icons">
        <div className={`icon-spacing ${activeSection === 'feed' ? 'active' : ''}`} onClick={scrollToFeed}>
          <FontAwesomeIcon icon={faHome} className="feed icon"/> Feed
        </div>
        <div className={`icon-spacing ${activeSection === 'stock' ? 'active' : ''}`} onClick={scrollToStock}>
          <FontAwesomeIcon icon={faEnvelope} className="stock icon"/> Stock
        </div>
        <div className={`icon-spacing ${activeSection === 'contact' ? 'active' : ''}`} onClick={scrollToContact}>
          <FontAwesomeIcon icon={faEnvelope} className="contact icon"/> Contact
        </div>
      </div>
    </header>
  );
};

export default Header;
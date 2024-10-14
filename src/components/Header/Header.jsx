import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = ({ scrollToHome, scrollToStock, activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClickPageTab = (page) => {
    switch (page) {
      case 'home':
        if (location.pathname === '/') {
          scrollToHome();
        } else {
          navigate('/');
          setTimeout(scrollToHome, 0);
        }
        break;
      case 'stock':
        if (location.pathname === '/') {
          scrollToStock();
        } else {
          navigate('/');
          setTimeout(scrollToStock, 0);
        }
        break;
      case 'news':
        navigate('/news');
        break;
      default:
        break;
    }
  };

  return (
    <header className="header sticky">
      <h1>Welcome to Invest-igator!</h1>
      <div className="header-icons">
        <div
          className={`icon-spacing ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => handleOnClickPageTab('home')}
        >
          <FontAwesomeIcon icon={faHome} className="home icon" /> Home
        </div>
        <div
          className={`icon-spacing ${activeSection === 'stock' ? 'active' : ''}`}
          onClick={() => handleOnClickPageTab('stock')}
        >
          <FontAwesomeIcon icon={faEnvelope} className="stock icon" /> Stock
        </div>
        <div
          className={`icon-spacing ${activeSection === 'news' ? 'active' : ''}`}
          onClick={() => handleOnClickPageTab('news')}
        >
          <FontAwesomeIcon icon={faBook} className="book icon" /> News
        </div>
      </div>
    </header>
  );
};

export default Header;
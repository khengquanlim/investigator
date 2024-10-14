import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = ({ scrollToFeed, scrollToStock, activeSection }) => {
  const navigate = useNavigate();

  const handleOnClickPageTab = (page) => {
    switch (page) {
      case 'feed':
        scrollToFeed();
        break;
      case 'stock':
        scrollToStock();
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
          className={`icon-spacing ${activeSection === 'feed' ? 'active' : ''}`}
          onClick={() => handleOnClickPageTab('feed')}
        >
          <FontAwesomeIcon icon={faHome} className="feed icon" /> Feed
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
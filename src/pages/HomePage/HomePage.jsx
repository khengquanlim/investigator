import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header.jsx';
import Feed from '../../components/Feed/Feed.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import StockPage from '../StockPage/StockPage.jsx';
import ContactPage from '../ContactPage/ContactPage.jsx';
import './HomePage.css'; 

const HomePage = () => {
  const feedRef = useRef(null);
  const stockRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('feed');

  const handleScrollToFeed = () => {
    if (feedRef.current) {
      feedRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('feed');
    }
  };

  const handleScrollToStock = () => {
    if (stockRef.current) {
      stockRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('stock');
    }
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('contact');
    }
  };

  return (
    <div className="homepage">
      <Header
        scrollToFeed={handleScrollToFeed}
        scrollToStock={handleScrollToStock}
        scrollToConatct={handleScrollToContact}
        activeSection={activeSection}
      />
      <div className="homepage-content">
        <div ref={feedRef}>
          <Feed />
        </div>
        <Sidebar />
      </div>
      <div ref={stockRef} className="stock-content">
        <StockPage />
      </div>
      <div ref={contactRef} className="contact-content">
        <ContactPage />
      </div>
    </div>
  );
};

export default HomePage;
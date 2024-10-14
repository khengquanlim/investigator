import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header.jsx';
import Feed from '../../components/Feed/Feed.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import StockPage from '../StockPage/StockPage.jsx';
import './HomePage.css'; 

const HomePage = () => {
  const homeRef = useRef(null);
  const stockRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const handleScrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('home');
    }
  };

  const handleScrollToStock = () => {
    if (stockRef.current) {
      stockRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('stock');
    }
  };

  return (
    <div className="homepage">
      <Header
        scrollToHome={handleScrollToHome}
        scrollToStock={handleScrollToStock}
        activeSection={activeSection}
      />
      <div ref={stockRef} className="stock-content">
        <StockPage />
      </div>
      <div className="homepage-content">
        <div ref={homeRef}>
          <Feed />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default HomePage;
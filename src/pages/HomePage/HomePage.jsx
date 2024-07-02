import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Feed from '../../components/Feed/Feed.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import StockPage from '../../components/Stock/StockPage/StockPage.jsx';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
        <div className="homepage-content">
          <Feed />
          <Sidebar />
        </div>
        <div className="stock-content">
        < StockPage />
        </div>
    </div>
  );
}

export default HomePage;
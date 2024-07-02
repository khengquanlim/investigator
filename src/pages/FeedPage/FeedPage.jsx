import React from 'react';
import Header from '../../components/Header/Header';
import Feed from '../../components/Feed/Feed';
import Sidebar from '../../components/Sidebar/Sidebar';
import './FeedPage.css';

const FeedPage = () => {
  return (
    <div className="feedpage">
      <Header />
      <div className="feedpage-content">
        <Feed />
        <Sidebar />
      </div>
    </div>
  );
}

export default FeedPage;
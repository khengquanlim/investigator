import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FeedPage from './pages/FeedPage/FeedPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/portfolio" element={<FeedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
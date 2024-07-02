import React from 'react';
import './Sidebar.css'; 

import dogProfilePic from '../../assets/images/debug/dogProfilePic.jpg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="user-profile">
        <img src={dogProfilePic} alt="Dog Profile" className="profile-image" />
        <div className="user-info">
          <h3>Lim Kheng Quan</h3>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
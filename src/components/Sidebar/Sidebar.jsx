import React from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="user-profile">
        <img src="path/to/user/profile.jpg" alt="User Profile" className="profile-image" />
        <div className="user-info">
          <h3>Username</h3>
          <p>Full Name</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
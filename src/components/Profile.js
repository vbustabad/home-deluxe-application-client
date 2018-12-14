import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => (
    <div className="Profile">
      <h1>User Profile</h1>

      <h3>Welcome, {}.</h3>

      <Link to="/shopping-cart">My Shopping Cart</Link><br /><br />
      <Link to="/order">My Order</Link>
    </div>
  );
  
export default Profile;
  
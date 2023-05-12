import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button className="joinBtn">Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test2</span>
      </div>
    </div>
  );
};

export default Navbar;

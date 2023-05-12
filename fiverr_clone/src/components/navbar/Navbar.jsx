import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    usename: 'voldemort',
    isSeller: true,
  };
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
          {!currentUser ? <span>Sign In</span> : <></>}
          {!currentUser?.isSeller ? <span>Become a Seller</span> : <></>}
          {!currentUser ? <button className="joinBtn">Join</button> : <></>}
        </div>
      </div>
      {active ? (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;

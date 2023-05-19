import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  let currentUser = {
    id: 1,
    username: 'shitStorm',
    isSeller: true,
  };

  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link
            className="link"
            to={'/'}
            onClick={() => {
              setOpen(false);
            }}
          >
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser ? <span>Sign In</span> : <></>}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button className="joinBtn">Join</button>}
          {currentUser && (
            <div
              className="user"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                className="userDP"
                src="https://shorturl.at/ktIRX"
                alt="XD"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to={'/gigs'} className="link">
                        <span>Gigs</span>
                      </Link>
                      <Link to={'/add'} className="link">
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  )}
                  <Link className="link" to={'/orders'}>
                    <span>Orders</span>
                  </Link>
                  <Link className="link" to={'/messages'}>
                    <span>Messages</span>
                  </Link>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
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

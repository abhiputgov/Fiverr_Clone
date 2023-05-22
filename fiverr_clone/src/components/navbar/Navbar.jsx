import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
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
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
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
                      <Link to={'/mygigs'} className="link">
                        Gigs
                      </Link>
                      <Link to={'/addGig'} className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to={'/orders'}>
                    Orders
                  </Link>
                  <Link className="link" to={'/messages'}>
                    Messages
                  </Link>
                  <Link className="link">Logout</Link>
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

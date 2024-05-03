import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import ButtonNav from '../components-ui/ButtonNav';
import MobileMenu from '../components/MobileMenu';

import './Header.css';

function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [arrowState, setArrowState] = useState({
    backgroundPositionX: 'right',
    transition: 'background-position-x 15s ease',
  });
  const arrowElement = useRef(null);
  const arrowElementWidth = arrowElement.current ? arrowElement.current.offsetWidth : 0;

  // slowly move the arrow to the left, as if pulling a spring
  const handleMouseEnter = () => setArrowState({ backgroundPositionX: `calc(100% - ${arrowElementWidth}px + 5vw` });
  // release the arrow as a spring
  const handleMouseUp = () =>
    setArrowState({ backgroundPositionX: 'right', transition: 'background-position-x 0.1s ease-out' });

  const handleAboutClose = () => {
    setShowAbout(false);
  };

  useEffect(() => {
    if (!showAbout) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleAboutClose();
      }
    };

    const handleMouseEnterAbout = (e) => {
      const aboutPage = document.getElementById('about-container');
      if (aboutPage && !aboutPage.contains(e.target)) {
        e.preventDefault();
        handleAboutClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseEnterAbout);
    // clean-up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseEnterAbout);
    };
  }, [handleAboutClose, handleAboutClose]);

  useEffect(() => {
    // prevents scrolling of body when about or menu is open
    if (showAbout || showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showAbout, showMenu]);

  function handleHamburgerClick() {
    // prevents unnecessary scroll "leftovers" caused by hamburger-inner animations
    const siteContainer = document.getElementById('site-container');
    const hamburger = document.querySelector('.hamburger');
    if (showMenu) {
      handleMenuClose();
    }

    if (!showMenu) {
      siteContainer.style.overflow = 'hidden';
      setShowMenu(true);
      // let the mobile menu slide in, then show the close button
      setTimeout(() => {
        hamburger.classList.add('is-active');
        hamburger.classList.add('z-index-999');
      }, 500);
    }
  }

  function handleMenuClose() {
    const hamburger = document.querySelector('.hamburger');
    const siteContainer = document.getElementById('site-container');

    setShowMenu(false);
    hamburger.classList.remove('is-active');
    hamburger.classList.remove('z-index-999');
    siteContainer.style.overflow = '';
  }

  const designActive = window.location.pathname === '/design' || window.location.pathname.includes('/design/project');
  const location = useLocation();

  return (
    <div id="header-container">
      <div className="header-top">
        <div className="header-left">
          <NavLink to="/redirect/design">
            <div className="logo"></div>
          </NavLink>
          <p className="logo-subtitle">dev & design portfolio</p>
        </div>

        <div className="hamburger hamburger--collapser" onClick={() => handleHamburgerClick()}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>

        <nav id="header-nav">
          <ButtonNav>
            <NavLink to="/" className={designActive ? 'active' : ''}>
              design
            </NavLink>
          </ButtonNav>
          {/*
          <ButtonNav>
              <NavLink to="/vote">vote</NavLink>
            </ButtonNav>
          */}
          <ButtonNav>
            <NavLink to="/skills/dev">skills</NavLink>
          </ButtonNav>
          <ButtonNav>
            <div className={showAbout ? 'active' : ''} onClick={() => setShowAbout(true)}>
              about
            </div>
          </ButtonNav>
        </nav>
      </div>

      <div className="become-slogan">
        <span className="become-left">
          ideas<strong>become</strong>brands
        </span>
        <span
          className="become-middle"
          style={arrowState}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseUp}
          ref={arrowElement}
        ></span>
        <span className="become-right">
          brands<strong className="b">become</strong>icons
        </span>
      </div>
      <AboutPage location={{ location }} showAbout={showAbout} onClose={handleAboutClose} />
      {showMenu && <MobileMenu showMenu={showMenu} onClose={handleMenuClose} />}
    </div>
  );
}

export default Header;

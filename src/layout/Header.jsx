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
  const [becomeState, setBecomeState] = useState({});
  const [sloganState, setSloganState] = useState({});
  const [shotCount, setShotCount] = useState(0);

  const arrowElement = useRef(null);
  const becomeElement = useRef(null);
  const sloganElement = useRef(null);
  const hoverStartTime = useRef(null);

  const arrowElementWidth = arrowElement.current ? arrowElement.current.offsetWidth : 0;

  useEffect(() => {
    setShotCount(0);
    setArrowState({ backgroundPositionX: '100%', transition: 'background-position-x 0.2s ease-out' });
  }, []);

  const handleArrowMouseEnter = () => {
    hoverStartTime.current = performance.now();
    setArrowState({ backgroundPositionX: `calc(100% - ${arrowElementWidth}px + 5vw)` });
  };

  const handleArrowMouseLeave = () => {
    const hoverEndTime = performance.now();
    const hoverTime = hoverEndTime - hoverStartTime.current;

    shootTheArrow(hoverTime);

    if (hoverTime > 2000) {
      bounceTheIcons(hoverTime);
    }
  };

  const shootTheArrow = ({ hoverTime }) => {
    setArrowState({ backgroundPositionX: 'right', transition: 'background-position-x 0.1s ease-out' });

    setTimeout(
      () => setArrowState({ backgroundPositionX: '100%', transition: 'background-position-x 0.2s ease-out' }),
      500
    );
  };

  const bounceTheIcons = ({ hoverTime }) => {
    setShotCount(shotCount + 1);
    console.log('🍌🥕 shotCount', shotCount);
    console.log('🍌🥕 hoverTime', hoverTime);

    setTimeout(
      () => setArrowState({ backgroundPositionX: '115%', transition: 'background-position-x 0.1s ease-out' }),
      100
    );
    setTimeout(
      () => setArrowState({ backgroundPositionX: '100%', transition: 'background-position-x 0.2s ease-out' }),
      200
    );
    setTimeout(
      () => setArrowState({ backgroundPositionX: '102%', transition: 'background-position-x 0.1s ease-out' }),
      400
    );

    setBecomeState({ transform: 'translateX(0.5%)', transition: 'all 0.01s ease-out' });
    setBecomeState({
      transform: 'translateX(8%)',
      transition: 'all 0.01s ease-out',
    });
    setTimeout(() => setBecomeState({ transform: 'none', transition: 'transform 0.05s ease-out' }), 50);

    if (shotCount > 2) {
      setSloganState({
        transform: `rotate(2.82deg)`,
        transformOrigin: 'center left',
        transition: 'transform 0.1s ease-out',
      });

      setTimeout(
        () =>
          setBecomeState({
            animation: 'becomeSloganFall 2.5s ease-out',
            animationFillMode: 'forwards',
            transition: 'transform 0.05s ease-out',
          }),
        600
      );

      setTimeout(
        () =>
          setSloganState({
            animation: 'becomeSloganFall 2.5s ease-out',
            animationFillMode: 'forwards',
            transition: 'transform 0.05s ease-out',
          }),
        2000
      );

      setTimeout(
        () =>
          setSloganState({
            display: 'none',
          }),
        4490
      );

      return;
    }

    if (shotCount > 0) {
      setSloganState({
        transform: `rotate(0.${shotCount * 3}deg)`,
        transformOrigin: 'center left',
        transition: 'transform 0.1s ease-out',
      });
    }
  };

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

    const handleArrowMouseEnterAbout = (e) => {
      const aboutPage = document.getElementById('about-container');
      if (aboutPage && !aboutPage.contains(e.target)) {
        e.preventDefault();
        handleAboutClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleArrowMouseEnterAbout);
    // clean-up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleArrowMouseEnterAbout);
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
          <ButtonNav>
            <NavLink to="/skills/dev">dev skills</NavLink>
          </ButtonNav>
          <ButtonNav>
            <NavLink to="/vote">vote</NavLink>
          </ButtonNav>
          <ButtonNav>
            <NavLink to="/about">about</NavLink>
          </ButtonNav>
        </nav>
      </div>

      <div className="become-slogan" style={sloganState} ref={sloganElement}>
        <span className="become-left">
          ideas<strong>become</strong>brands
        </span>
        <span
          className="become-middle"
          style={arrowState}
          onMouseEnter={handleArrowMouseEnter}
          onMouseLeave={handleArrowMouseLeave}
          ref={arrowElement}
        ></span>
        <span className="become-right" style={becomeState} ref={becomeElement}>
          brands<strong className="b">become</strong>icons
        </span>
      </div>
      <AboutPage location={{ location }} showAbout={showAbout} onClose={handleAboutClose} />
      {showMenu && <MobileMenu showMenu={showMenu} onClose={handleMenuClose} />}
    </div>
  );
}

export default Header;

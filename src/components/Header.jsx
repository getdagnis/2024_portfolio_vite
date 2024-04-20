import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import AboutPage from '../pages/AboutPage';

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

  // useEffect(() => {
  //   if (showAbout) {
  //     document.body.style.overflow = 'hidden'; // disable body background scrolling
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [showAbout]);

  useEffect(() => {
    if (!showAbout) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleAboutClose();
      }
    };

    const handleMouseEnter = (e) => {
      const aboutPage = document.getElementById('about-container');
      if (aboutPage && !aboutPage.contains(e.target)) {
        e.preventDefault();
        handleAboutClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseEnter);
    // clean-up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseEnter);
    };
  }, [handleAboutClose, handleAboutClose]);

  function handleHamburgerClick() {
    setShowMenu(!showMenu);
  }

  const designActive = window.location.pathname.includes('/design') || window.location.pathname === '/design';

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-left">
          <NavLink to="/redirect">
            <div className="logo"></div>
          </NavLink>

          <p className="logo-subtitle">dev & design portfolio</p>
        </div>
        <div
          className={`hamburger hamburger--collapse ${showMenu ? 'is-active' : ''}`}
          onClick={() => handleHamburgerClick()}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={designActive ? 'active' : ''}>
                design
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/vote">vote</NavLink>
            </li> */}
            <li>
              <NavLink to="/skills">skills</NavLink>
            </li>
            <li>
              <div onClick={() => setShowAbout(true)}>about</div>
            </li>
          </ul>
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
      <AboutPage showAbout={showAbout} onClose={handleAboutClose} />
    </div>
  );
}

export default Header;

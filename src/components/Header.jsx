import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import AboutPage from '../pages/AboutPage';

function Header() {
  const [showAbout, setShowAbout] = useState(false);

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

    const handleMouseDown = (e) => {
      const aboutPage = document.getElementById('about-container');
      if (aboutPage && !aboutPage.contains(e.target)) {
        e.preventDefault();
        handleAboutClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    // clean-up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleAboutClose, handleAboutClose]);

  const designActive = window.location.pathname.includes('/design') || window.location.pathname === '/design';

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-left">
          <NavLink to="/">
            <div className="logo"></div>
          </NavLink>

          <p className="logo-subtitle">dev & design portfolio</p>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/" className={designActive ? 'active' : ''}>
                design
              </NavLink>
            </li>
            <li>
              <NavLink to="/vote">vote</NavLink>
            </li>
            <li>
              <NavLink to="/dev">dev</NavLink>
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
        <span className="become-middle"></span>
        <span className="become-right">
          brands<strong className="b">become</strong>icons
        </span>
      </div>
      <AboutPage showAbout={showAbout} onClose={handleAboutClose} />
    </div>
  );
}

export default Header;

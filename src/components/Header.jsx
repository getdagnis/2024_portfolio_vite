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
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleAboutClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Clean-up function to remove listener on unmount
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleAboutClose]);

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
              <NavLink to="/" activeClassName="active">
                design
              </NavLink>
            </li>
            <li>
              <NavLink to="/vote" activeClassName="active">
                vote
              </NavLink>
            </li>
            <li>
              <NavLink to="/dev" activeClassName="active">
                dev
              </NavLink>
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
      {showAbout && <AboutPage showAbout={showAbout} onClose={handleAboutClose} />}
    </div>
  );
}

export default Header;

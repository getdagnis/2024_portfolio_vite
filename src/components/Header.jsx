import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import AboutPage from '../pages/AboutPage';

function Header() {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClose = () => {
    setShowAbout(false);
  };

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-left">
          <Link to="/design">
            <div className="logo"></div>
          </Link>

          <p className="logo-subtitle">dev & design portfolio</p>
        </div>
        <nav>
          <ul>
            <li className="active">
              <Link to="/design">design</Link>
            </li>
            <li>
              <Link to="/vote">vote</Link>
            </li>
            <li>
              <Link to="/dev">dev</Link>
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

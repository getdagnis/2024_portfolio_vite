import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './MobileMenu.css';

function MobileMenu({ onClose }) {
  const [designActive, setDesignActive] = useState(false);

  useEffect(() => {
    window.location.pathname.includes('/design') || window.location.pathname === '/'
      ? setDesignActive(true)
      : setDesignActive(false);
  }, []);

  return (
    <div id="mobile-menu-container">
      <ul id="mobile-menu-list">
        <li style={{ animationDelay: '0.25s' }}>
          <NavLink to="/redirect" className={designActive ? 'active' : ''} onClick={onClose}>
            design
          </NavLink>
        </li>
        <li style={{ animationDelay: '0.3s' }}>
          <NavLink to="/skills" onClick={onClose}>
            skillset
          </NavLink>
        </li>
        <li style={{ animationDelay: '0.35s' }}>
          <NavLink to="/about" onClick={onClose}>
            about
          </NavLink>
        </li>
      </ul>
      <div id="mobile-menu-bottom">
        <div className="footer-message"></div>
        <p>© DAGNIS SKURBE, 2024</p>
      </div>
    </div>
  );
}

export default MobileMenu;

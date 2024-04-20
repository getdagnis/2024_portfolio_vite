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
            dev skills
          </NavLink>
        </li>
        <li style={{ animationDelay: '0.35s' }}>
          <NavLink to="/vote" onClick={onClose}>
            vote
          </NavLink>
        </li>
        <li style={{ animationDelay: '0.4s' }}>
          <NavLink to="/blog" onClick={onClose}>
            blog
          </NavLink>
        </li>
        <li style={{ animationDelay: '0.45s' }}>
          <NavLink to="/about" onClick={onClose}>
            about
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;

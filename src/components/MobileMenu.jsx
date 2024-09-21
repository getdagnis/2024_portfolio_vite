import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './MobileMenu.css';

function MobileMenu({ onClose }) {
  const [activeRoute, setActiveRoute] = useState(null);

  useEffect(() => {
    window.location.pathname.includes('/design') || window.location.pathname === '/'
      ? setActiveRoute('design')
      : window.location.pathname.includes('/skills')
      ? setActiveRoute('skills')
      : window.location.pathname === '/about'
      ? setActiveRoute('about')
      : setActiveRoute(null);
  }, []);

  return (
    <div id="mobile-menu-container">
      <ul id="mobile-menu-list">
        <li style={{ animationDelay: '0.25s' }}>
          <NavLink to="/redirect/design" className={activeRoute === 'design' ? 'active' : ''} onClick={onClose}>
            design
          </NavLink>
        </li>
        <li style={{ animationDelay: '0.3s' }}>
          <NavLink to="/redirect/skills" className={activeRoute === 'skills' ? 'active' : ''} onClick={onClose}>
            dev skillset
          </NavLink>
        </li>
        <li style={{ animationDelay: '0.35s' }}>
          <NavLink to="/about" className={activeRoute === 'about' ? 'active' : ''} onClick={onClose}>
            about
          </NavLink>
        </li>
      </ul>
      <div id="mobile-menu-bottom">
        <NavLink to="/contact" className="footer-message" onClick={onClose}></NavLink>
        <p>© DAGNIS SKURBE, 2024</p>
      </div>
    </div>
  );
}

export default MobileMenu;

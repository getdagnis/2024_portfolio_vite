import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './SkillsPage.css';

function SkillsPage() {
  const [skillSection, setSkillSection] = useState('dev');

  const toggleSkillSection = (clicked) => {
    setSkillSection(clicked === 'right' ? 'design' : 'dev');
  };

  return (
    <div id="skills-container">
      <div id="skills-title">
        <NavLink to="/skills/dev">
          DEV experience
          <svg className="skills-tab-left" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M259.09,36,240.14,19a33.08,33.08,0,0,0-22.07-8.44H16.46a8.26,8.26,0,0,0-8.27,8.26V72H281.67V44.65A33.85,33.85,0,0,1,259.09,36Z"
              transform="translate(-7.19 -9.6)"
            />
          </svg>
        </NavLink>
        <div className="skills-title-middle"></div>
        <NavLink to="/skills/design">
          DESIGN experience
          <svg className="skills-tab-right" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M259.09,36,240.14,19a33.08,33.08,0,0,0-22.07-8.44H16.46a8.26,8.26,0,0,0-8.27,8.26V72H281.67V44.65A33.85,33.85,0,0,1,259.09,36Z"
              transform="translate(-7.19 -9.6)"
            />
          </svg>
        </NavLink>
      </div>
      <div id="skills-grid">
        <div className="grid-item">JavaScript</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
        <div className="grid-item">grid-item</div>
      </div>
    </div>
  );
}

export default SkillsPage;

// <svg xmlns="http://www.w3.org/2000/svg">
//   <path
//     className="skills-tab-left"
//     d="M259.09,36,240.14,19a33.08,33.08,0,0,0-22.07-8.44H16.46a8.26,8.26,0,0,0-8.27,8.26V72H281.67V44.65A33.85,33.85,0,0,1,259.09,36Z"
//     transform="translate(-7.19 -9.6)"
//   />
// </svg>;

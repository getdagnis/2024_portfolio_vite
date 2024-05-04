import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SKILLS from '../constants/skills.json';
import './SkillsPage.css';

console.log('🥖🥖🇫🇷🇫🇷 SKILLS', SKILLS);

function SkillsPage() {
  const [skillSection, setSkillSection] = useState('dev');

  const toggleSkillSection = (clicked) => {
    setSkillSection(clicked === 'right' ? 'design' : 'dev');
  };

  return (
    <div id="skills-container">
      <div id="skills-top">
        <NavLink to="/skills/dev">
          <p className="left">DEV skills</p>
          <svg className="skills-tab-left" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M259.09,36,240.14,19a33.08,33.08,0,0,0-22.07-8.44H16.46a8.26,8.26,0,0,0-8.27,8.26V72H281.67V44.65A33.85,33.85,0,0,1,259.09,36Z"
              transform="translate(-7.19 -9.6)"
            />
          </svg>
        </NavLink>
        <div className="skills-title-middle"></div>
        <NavLink to="/skills/design">
          <p className="right">DESIGN skills</p>
          <svg className="skills-tab-right" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M259.09,36,240.14,19a33.08,33.08,0,0,0-22.07-8.44H16.46a8.26,8.26,0,0,0-8.27,8.26V72H281.67V44.65A33.85,33.85,0,0,1,259.09,36Z"
              transform="translate(-7.19 -9.6)"
            />
          </svg>
        </NavLink>
      </div>
      <div id="skills-grid">
        {SKILLS.devSkills.map((skill, index) => (
          <div
            key={skill.key}
            className={`skill-item ${skill.color}`}
            style={{
              animationDelay: `${index / 25}s`,
              zIndex: index,
            }}
          >
            <div className="skill-item-top">
              <div className="skill-icon" style={{ backgroundImage: `url(../../icons-dev/${skill.key}.svg)` }}></div>
            </div>
            <div id="skill-item-bottom">
              <h3>
                {' '}
                {skill.title.split(' //').map((part, index, array) => (
                  <>
                    {part}
                    {index < array.length - 1 && (
                      <span style={{ opacity: 0.25, marginLeft: '0.175rem', fontWeight: 300 }}>/</span>
                    )}
                  </>
                ))}
              </h3>
              <p>
                {skill.describe.split(' //').map((part, index, array) => (
                  <>
                    {part}
                    {index < array.length - 1 && <span style={{ opacity: 0.25, marginLeft: '0.175rem' }}>/</span>}
                  </>
                ))}
              </p>
            </div>
          </div>
        ))}
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

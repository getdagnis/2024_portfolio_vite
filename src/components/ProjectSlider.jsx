import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ProjectSlider.css';

function ProjectSlider({ onSlide }) {
  const [designActive, setDesignActive] = useState(false);

  useEffect(() => {
    window.location.pathname.includes('/design') || window.location.pathname === '/'
      ? setDesignActive(true)
      : setDesignActive(false);
  }, []);

  return (
    <div id="project-slider-container">
      <div id="slide-left" onClick={onSlide('left')}></div>
      <div id="slide-right" onClick={onSlide('right')}></div>
    </div>
  );
}

export default ProjectSlider;

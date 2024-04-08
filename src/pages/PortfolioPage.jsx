import React, { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';

import thumbsData from '../assets/thumbs.json';
import './PortfolioPage.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [gridItems, setGridItems] = useState([]);
  const [seeFilters, setSeeFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loadAnim, setLoadAnim] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      const newColumns = calculateColumns(window.innerWidth);
      setColumns(newColumns);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate number of columns and rows here instead of using @media query in order
  // to know each item's exact position in the grid for animation and hover effects
  const calculateColumns = (width) => {
    if (width > 1024) return 4;
    if (width <= 1024 && width > 720) return 3;
    if (width <= 720 && width > 360) return 2;
    return 1;
  };

  const [columns, setColumns] = useState(calculateColumns(window.innerWidth));

  useEffect(() => {
    console.log('🚀🚀 loadAnim 1', loadAnim);
    window.location.pathname !== '/design' && setLoadAnim(true); // disable portfolio item bounce animation on non-home routes
    console.log('🚀🚀 window.location.pathname !== "/design"', window.location.pathname !== '/design');
    console.log('🚀🚀 loadAnim 2', loadAnim);

    const items = thumbsData.map((thumb, index) => {
      const row = Math.floor(index / 4) + 1; // Calculate row number
      const col = (index % calculateColumns(window.innerWidth)) + 1; // Calculate column number

      return {
        ...thumb,
        key: thumb.key,
        className: `grid-item col-${col} row-${row} ${loadAnim && 'bounceAnim'}`, // Combined class names,
        col: col,
        row: row,
      };
    });
    setGridItems(items);
  }, [thumbsData, screenWidth, loadAnim]);

  const handleFiltersClick = () => {
    setSeeFilters(!seeFilters);
  };

  const handleFilter = (keyword) => {
    setActiveFilter(keyword);
  };

  return (
    <div className="portfolio">
      <div className={!seeFilters ? 'portfolio-filters' : 'portfolio-filters filters-shown'}>
        <div className="filters-button" onClick={handleFiltersClick}></div>
        <ul className="filters-list">
          <li className="close-filters" onClick={handleFiltersClick}></li>
          <li className={activeFilter === 'all' ? 'active' : ''} onClick={() => handleFilter('all')}>
            all
          </li>
          <li className={activeFilter === 'own' ? 'active' : ''} onClick={() => handleFilter('own')}>
            own projects
          </li>
          <li className={activeFilter === 'ide' ? 'active' : ''} onClick={() => handleFilter('ide')}>
            created identities
          </li>
          <li className={activeFilter === 'cli' ? 'active' : ''} onClick={() => handleFilter('cli')}>
            clients
          </li>
          <li className={activeFilter === 'pub' ? 'active' : ''} onClick={() => handleFilter('pub')}>
            publishing
          </li>
          <li className={activeFilter === 'oth' ? 'active' : ''} onClick={() => handleFilter('oth')}>
            other
          </li>
        </ul>
      </div>
      <div className="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {gridItems.map((item, index) => (
          <Link
            to={`/project/${item.key}`}
            key={item.key}
            className={item.className ? item.className : ' '}
            style={{
              backgroundImage: `url(./thumbs/${item.key}.svg)`,
              animationDelay: `${0.3 + index / 25 + item.col * 0.15}s`, // Apply animation delay formula
            }}
          >
            <div className="thumb-info">
              <h3>{item.name}</h3>
              <p>{item.title}</p>
              <p>{item.work}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

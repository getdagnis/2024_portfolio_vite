import React, { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';

import thumbsData from '../assets/thumbs.json';
import './Portfolio.css';

function Portfolio() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [gridItems, setGridItems] = useState([]);
  const [seeFilters, setSeeFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

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
    const items = thumbsData.map((thumb, index) => {
      const row = Math.floor(index / 4) + 1; // Calculate row number
      const col = (index % 4) + 1; // Calculate column number

      return {
        ...thumb,
        key: thumb.key,
        className: `thumb-item col-${col} row-${row}`, // Combined class names
      };
    });
    setGridItems(items);
  }, [thumbsData]);

  const handleFiltersClick = () => {
    setSeeFilters(!seeFilters);
  };

  const handleFilter = (keyword) => {
    setActiveFilter(keyword);
  };

  return (
    <div className="portfolio">
      <div className="portfolio-filters">
        <div className={!seeFilters && 'filters-hidden'} onClick={handleFiltersClick}></div>
        <ul className="filters-list">
          <li className={activeFilter === 'all' && 'active'} onClick={() => handleFilter('all')}>
            all
          </li>
          <li className={activeFilter === 'own' && 'active'} onClick={() => handleFilter('own')}>
            own projects
          </li>
          <li className={activeFilter === 'ide' && 'active'} onClick={() => handleFilter('ide')}>
            created identities
          </li>
          <li className={activeFilter === 'cli' && 'active'} onClick={() => handleFilter('cli')}>
            clients
          </li>
          <li className={activeFilter === 'pub' && 'active'} onClick={() => handleFilter('pub')}>
            publishing
          </li>
          <li className={activeFilter === 'oth' && 'active'} onClick={() => handleFilter('oth')}>
            other
          </li>
          <li className="close-filters" onClick={handleFiltersClick}></li>
        </ul>
      </div>
      <div className="thumb-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {gridItems.map((item) => (
          <div key={item.key} className={item.className} style={{ backgroundImage: `url(./thumbs/${item.key}.svg)` }}>
            <div className="thumb-info">
              <h3>{item.name}</h3>
              <p>{item.title}</p>
              <p>{item.work}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

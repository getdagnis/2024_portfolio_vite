import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PROJECTS from '../constants/projects.json';
import { SCREEN_WIDTHS as SCREEN } from '../constants/constants';
import './DesignPage.css';

function DesignPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [gridItems, setGridItems] = useState([]);
  const [seeFilters, setSeeFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ide');

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
    if (width > SCREEN.MEDIUM) return 4;
    if (width <= SCREEN.MEDIUM && width > SCREEN.SMALL) return 3;
    if (width <= SCREEN.SMALL && width >= SCREEN.XSMALL) return 2;
    return 1;
  };

  const [columns, setColumns] = useState(calculateColumns(window.innerWidth));

  useEffect(() => {
    // filter items that are supposed to be shown and update necessary properties
    const items = PROJECTS.filter((thumb) => thumb.show === true).map((thumb, index) => {
      const row = Math.floor(index / 4) + 1; // Calculate row number
      const col = (index % calculateColumns(window.innerWidth)) + 1; // Calculate column number

      return {
        ...thumb,
        key: thumb.key,
        className: `grid-item col-${col} row-${row} itemBounceAnim`, // Combined class names,
        col: col,
        row: row,
      };
    });
    setGridItems(items);
  }, [PROJECTS, screenWidth]);

  const handleFiltersToggle = () => {
    setSeeFilters(!seeFilters);
  };

  const handleFiltering = (keyword) => {
    setActiveFilter(keyword);
  };

  const getThumbInfoInitialClass = (col, row) => {
    const returnClass = 'thumb-info';
    if (row === 1) {
      return returnClass.concat(' thumb-info-hide-top');
    }
    if (col === 4) {
      return returnClass.concat(' thumb-info-hide-right');
    }
    if (col === 1) {
      return returnClass.concat(' thumb-info-hide-left');
    }
    return returnClass.concat(' thumb-info-hide-top');
  };

  return (
    <div id="portfolio">
      <div className={!seeFilters ? 'portfolio-filters' : 'portfolio-filters filters-shown'}>
        <div className="filters-button" onClick={handleFiltersToggle}></div>
        <ul className="filters-list">
          <li className="close-filters" onClick={handleFiltersToggle}></li>
          <li className={activeFilter === 'ide' ? 'active' : ''} onClick={() => handleFiltering('ide')}>
            created identities
          </li>
          <li className={activeFilter === 'own' ? 'active' : ''} onClick={() => handleFiltering('own')}>
            own PROJECTS
          </li>
          <li className={activeFilter === 'cli' ? 'active' : ''} onClick={() => handleFiltering('cli')}>
            clients
          </li>
          <li className={activeFilter === 'pub' ? 'active' : ''} onClick={() => handleFiltering('pub')}>
            publishing
          </li>
          <li className={activeFilter === 'oth' ? 'active' : ''} onClick={() => handleFiltering('oth')}>
            other
          </li>
        </ul>
      </div>
      <div id="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {gridItems.map(
          (item, index) =>
            item.show === true && (
              <Link
                to={`/design/project/${item.key}`}
                key={item.key}
                className={item.className ? item.className : ' '}
                style={{
                  backgroundImage: `url(../../thumbs/${item.key}.svg)`,
                  animationDelay: `${index / 25 + item.col * 0.05}s`, // Apply animation delay formula
                }}
                data-grid-col={item.col}
                data-grid-row={item.row}
              >
                <div className={getThumbInfoInitialClass(item.col, item.row)}>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                  <p>{item.work}</p>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default DesignPage;

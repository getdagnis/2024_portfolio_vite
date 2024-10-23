import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PROJECTS from '../constants/projects.json';
import { DESIGN_FILTERS } from '../constants/constants';
import { SCREEN_WIDTHS as SCREEN } from '../constants/constants';
import './DesignPage.css';

function DesignPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [gridItems, setGridItems] = useState([]);
  const [seeFilters, setSeeFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      const newColumns = calculateColumns(window.innerWidth);
      setColumns(newColumns);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateColumns = (width) => {
    if (width > SCREEN.MEDIUM) return 4;
    if (width <= SCREEN.MEDIUM && width > SCREEN.SMALL) return 3;
    if (width <= SCREEN.SMALL && width >= SCREEN.XSMALL) return 2;
    return 1;
  };

  const [columns, setColumns] = useState(calculateColumns(window.innerWidth));

  useEffect(() => {
    if (!isHiding) {
      const filteredItems = PROJECTS.filter(
        (project) =>
          project.show === true &&
          project.category.includes('all') &&
          (project.category.includes(activeFilter) || activeFilter === 'all')
      ).map((project, index) => {
        const row = Math.floor(index / columns) + 1; // Calculate row number
        const col = (index % columns) + 1; // Calculate column number

        return {
          ...project,
          key: project.key,
          className: `grid-item col-${col} row-${row} itemBounceAnim`, // Combined class names
          col: col,
          row: row,
        };
      });
      setGridItems(filteredItems);
    }
  }, [activeFilter, screenWidth, isHiding]);

  const handleFilterChange = (newFilter) => {
    if (activeFilter !== newFilter) {
      const calculateTimeOut =
        gridItems.length > 12 ? gridItems.length * 25 : gridItems.length > 4 ? gridItems.length * 100 : 400;
      setIsHiding(true);

      // Remove the items visually after 1000ms (or the length of the animation)
      setTimeout(() => {
        setGridItems([]);
        setIsHiding(false);
      }, calculateTimeOut);

      setActiveFilter(newFilter);
    }
  };

  const handleFiltersToggle = () => {
    seeFilters && setActiveFilter('all');
    setSeeFilters(!seeFilters);
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

  const showThisFilter = (filter) => {
    if (filter.key === 'all' || filter.display !== true) {
      return false;
    }

    if (screenWidth <= SCREEN.SMALL && filter.mobile !== true) {
      return false;
    }

    return true;
  };

  return (
    <div id="portfolio">
      <div className={!seeFilters ? 'portfolio-filters' : 'portfolio-filters filters-shown'}>
        <div className="filters-button armageddon" onClick={handleFiltersToggle}></div>
        <ul className="filters-list armageddon">
          <li className="close-filters" onClick={handleFiltersToggle}></li>
          {DESIGN_FILTERS.map(
            (filter) =>
              showThisFilter(filter) && (
                <li
                  key={filter.key}
                  className={activeFilter === filter.key ? 'active' : ''}
                  onClick={() => handleFilterChange(filter.key)}
                >
                  {filter.title}
                </li>
              )
          )}
        </ul>
      </div>
      <div id="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {/* Render grid items */}
        {gridItems.map((item, index) => (
          <Link
            to={`/design/project/${item.key}`}
            key={item.key}
            className={`${item.className} ${isHiding ? 'itemHideAnim armageddon ' : 'armageddon'}`}
            style={{
              backgroundImage: `url(../../thumbs/${item.key}.svg)`,
              animationDelay: `${index / 25 + item.col * 0.05}s`, // Animation delay formula so that each item bounces a bit later
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
        ))}
      </div>
    </div>
  );
}

export default DesignPage;

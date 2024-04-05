import React, { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';

import thumbsData from '../assets/thumbs.json';
import './Portfolio.css';

function Portfolio() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [gridItems, setGridItems] = useState([]);
  console.log('🚀🚀 screenWidth', screenWidth);
  console.log('🚀🚀 isDesktop', isDesktop);

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

  return (
    <div className="portfolio">
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

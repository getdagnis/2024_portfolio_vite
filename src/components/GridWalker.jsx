import React, { useEffect, useRef } from 'react';

const GridWalker = ({ gridItems, handleHover }) => {
  const gridContainerRef = useRef(null);
  let hoverCol = 0;
  let hoverRow = 0;
  let previousHoveredInfo = '';

  // Handle mouseleave event for the entire grid container
  const handleGridLeave = () => {
    gridItems.forEach((gridItem) => {
      const itemInfo = gridItem.querySelector('.thumb-info');
      const col = parseInt(gridItem.dataset.gridCol);
      const row = parseInt(gridItem.dataset.gridRow);

      itemInfo.classList = 'thumb-info display-none';

      if (col === 4) {
        itemInfo.classList = 'thumb-info thumb-info-hide-right';
      }
      if (col === 1) {
        itemInfo.classList = 'thumb-info thumb-info-hide-left';
      }
      if (row === 1) {
        itemInfo.classList = 'thumb-info thumb-info-hide-top';
      }
      if (itemInfo !== previousHoveredInfo) {
        itemInfo.classList = 'thumb-info display-none transition-none';
      }
    });
  };

  // Handle hover events for individual grid items
  const handleItemHover = (e) => {
    const hovered = e.target;
    hoverCol = parseInt(hovered.dataset.gridCol);
    hoverRow = parseInt(hovered.dataset.gridRow);
    const hoveredItemInfo = e.target.querySelector('.thumb-info');

    gridItems.forEach((gridItem) => {
      const itemRow = parseInt(gridItem.dataset.gridRow);
      const itemCol = parseInt(gridItem.dataset.gridCol);
      const itemInfo = gridItem.querySelector('.thumb-info');

      if (!gridItem || !itemInfo) {
        return;
      }

      // hide .thumb-info child for all items except hovered and previous hovered
      if (itemInfo !== hoveredItemInfo && itemInfo !== previousHoveredInfo) {
        itemInfo.classList = 'thumb-info display-none transition-none';
      } else if (itemInfo === previousHoveredInfo) {
        itemInfo.classList = 'thumb-info slow-transition';
      } else {
        itemInfo.classList = 'thumb-info';
      }

      // move .thumb-info for surrounding items to where it needs to slide-in from
      if (itemRow + 1 === hoverRow && Math.abs(itemCol - hoverCol <= 1)) {
        itemInfo.classList.add('thumb-info-hide-bottom');
        itemInfo.classList.remove('display-none');
      }
      // ... (rest of hover logic as in grid.js)
    });

    previousHoveredInfo = hovered.querySelector('.thumb-info');

    if (handleHover) {
      handleHover(hoverCol, hoverRow); // Call a prop function if provided
    }
  };

  useEffect(() => {
    const gridContainer = gridContainerRef.current;
    if (gridContainer) {
      gridContainer.addEventListener('mouseleave', handleGridLeave);
      gridItems.forEach((item) => item.addEventListener('mouseenter', handleItemHover));
    }

    // Clean-up function
    return () => {
      const gridContainer = gridContainerRef.current;
      if (gridContainer) {
        gridContainer.removeEventListener('mouseleave', handleGridLeave);
        gridItems.forEach((item) => item.removeEventListener('mouseenter', handleItemHover));
      }
    };
  }, [gridItems]);

  return (
    <div id="grid-container" ref={gridContainerRef}>
      {gridItems.map((item, index) => (
        <Link
          to={`/project/${item.key}`}
          key={item.key}
          className={item.className ? item.className : ' '}
          style={{
            backgroundImage: `url(./thumbs/${item.key}.svg)`,
            animationDelay: `${0.3 + index / 25 + item.col * 0.15}s`,
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
  );
};

export default GridWalker;

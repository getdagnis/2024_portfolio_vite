const launchGridAnimations = () => {
  const gridItems = document.querySelectorAll('.grid-item');
  let hoverCol = 0;
  let hoverRow = 0;
  let previousHoveredInfo = '';

  // handle case when hover walker leaves the grid-container
  const gridContainer = document.getElementById('grid-container');
  gridContainer.addEventListener('mouseleave', () => {
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
  });

  // check for currently hovered item and infect items around it
  for (const item of gridItems) {
    item.addEventListener('mouseenter', (e) => {
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
        if (itemRow - 1 === hoverRow && Math.abs(hoverCol - itemCol <= 1)) {
          itemInfo.classList.add('thumb-info-hide-top');
          itemInfo.classList.remove('display-none');
        }
        if (itemRow === hoverRow && itemCol - hoverCol === 1) {
          itemInfo.classList.add('thumb-info-hide-left');
          itemInfo.classList.remove('display-none');
        }
        if (itemRow === hoverRow && itemCol - hoverCol === -1) {
          itemInfo.classList.add('thumb-info-hide-right');
          itemInfo.classList.remove('display-none');
        }
      });

      previousHoveredInfo = hovered.querySelector('.thumb-info');
    });
  }
};

// wait for #grid-container to exist in the dom
const checkForGridContainer = () => {
  const gridContainer = document.getElementById('grid-container');
  if (gridContainer) {
    launchGridAnimations();
    return;
  }
  // If not found yet, check again after a delay
  setTimeout(checkForGridContainer, 100);
};

checkForGridContainer();

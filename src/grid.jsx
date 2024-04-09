const launchGridAnimations = () => {
  const gridItems = document.querySelectorAll('.grid-item');
  let hoverCol = 0;
  let hoverRow = 0;

  // listen for hovered item and record its position
  for (const item of gridItems) {
    item.addEventListener('mouseenter', (e) => {
      const hovered = e.target;
      hoverCol = parseInt(hovered.dataset.gridCol);
      hoverRow = parseInt(hovered.dataset.gridRow);
      const hoveredInfo = hovered.querySelector('.thumb-info');

      gridItems.forEach((gridItem) => {
        const itemRow = parseInt(gridItem.dataset.gridRow);
        const itemCol = parseInt(gridItem.dataset.gridCol);
        const itemInfo = gridItem.querySelector('.thumb-info');
        itemInfo.classList = 'thumb-info';

        if (!gridItem || !itemInfo) {
          return;
        }
        if (itemRow < hoverRow && Math.abs(itemCol - hoverCol) <= 1) {
          itemInfo.classList.add('thumb-info-hide-bottom');
        }
        if (itemRow > hoverRow && Math.abs(itemCol - hoverCol) <= 1) {
          itemInfo.classList.add('thumb-info-hide-top');
        }
        if (itemRow === hoverRow && itemCol - hoverCol === 1) {
          itemInfo.classList.add('thumb-info-hide-left');
        }
        if (itemRow === hoverRow && itemCol - hoverCol === -1) {
          itemInfo.classList.add('thumb-info-hide-right');
        }
      });
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

const launchGridWalker = () => {
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

  // define currently hovered item and have only items around it "infected"
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
          // let them finish transition first before hiding them
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
        if (itemRow + 1 === hoverRow && itemCol + hoverCol === 1) {
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
    launchGridWalker();
    return;
  }
  // If not found yet, check again after a delay
  setTimeout(checkForGridContainer, 100);
};

if (window.innerWidth > 1024) {
  checkForGridContainer();
}

// checks the URL path every 200ms and launches the script again when user returns to portfolio
let initialPath = window.location.pathname === '/' || window.location.pathname === '/design' ? true : false;
let waitingForInitialPath = false;

function checkUrlPath() {
  const currentPath = window.location.pathname;

  if (initialPath && currentPath !== '/' && currentPath !== '/design') {
    waitingForInitialPath = true;
  } else if ((waitingForInitialPath && currentPath === '/') || currentPath === '/design') {
    waitingForInitialPath = false;
    checkForGridContainer();
  }

  setTimeout(checkUrlPath, 200);
}

if (window.innerWidth > 1024) {
  checkUrlPath();
}

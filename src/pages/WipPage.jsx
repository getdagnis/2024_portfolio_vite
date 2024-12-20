import { NavLink } from 'react-router-dom';

import DesignPage from './DesignPage';
import './WipPage.css';
import { useEffect } from 'react';

function WipPage() {
  return (
    <>
      <DesignPage />
      <div className="wip">
        <div className="wip-image"></div>
        <h1 className="modal-h1">
          Welcome!
          <br />
          This site is currently under construction.
          <br />
          Any missing works will be added shortly.
        </h1>
        <div className="wip-buttons">
          <NavLink className="modal-button" to="/redirect/design">
            that's ok
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default WipPage;

import { NavLink } from 'react-router-dom';

import './WipPage.css';
import { useEffect } from 'react';

function WipPage() {
  return (
    <div className="wip">
      <h1 className="modal-h1">
        welcome.
        <br />
        this site is work in progress.
        <br />
        missing works will be added.
      </h1>
      <NavLink className="modal-button" to="/redirect/design">
        continue anyway
      </NavLink>
    </div>
  );
}

export default WipPage;

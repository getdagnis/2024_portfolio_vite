import { NavLink } from 'react-router-dom';

import DesignPage from './DesignPage';
import './WipPage.css';

function WipPage() {
  return (
    <>
      <DesignPage />
      <div className="wip">
        <div className="wip-image"></div>
        <h1 className="modal-extra-h1">WORK IN PROGRESS</h1>
        <div className="wip-buttons">
          <NavLink className="modal-button" to="/redirect/design">
            that&apos;s ok
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default WipPage;

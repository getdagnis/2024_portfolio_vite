import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PROJECTS from '../constants/projects.json';
import './DesignProjectsList.css';

function DesignProjectsList() {
  return (
    <div id="project-list">
      <div id="project-list-container">
        {PROJECTS.map(
          (item, index) =>
            item.show === true && (
              <Link
                to={`/design/project/${item.key}`}
                key={item.key}
                className="grid-item"
                style={{
                  backgroundImage: `url(../../thumbs/${item.key}.svg)`,
                }}
                data-grid-col={item.col}
                data-grid-row={item.row}
              >
                <div className="thumb-info thumb-info-hide-top">
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default DesignProjectsList;

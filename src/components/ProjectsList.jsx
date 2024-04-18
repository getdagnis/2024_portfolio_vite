import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PROJECTS from '../projects.json';
import './ProjectsList.css';

function ProjectsList() {
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
                  <p>{item.work}</p>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default ProjectsList;

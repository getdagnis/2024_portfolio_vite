import React from 'react';
import { Link, ScrollRestoration, useParams } from 'react-router-dom';

import DesignProjectsList from '../components/DesignProjectsList';
import ProjectReactions from '../components/ProjectReactions';

import PROJECTS from '../constants/projects.json';
import './DesignProjectPage.css';

function DesignProjectPage() {
  const { key: projectKey } = useParams();
  const proj = PROJECTS.find((obj) => obj.key === projectKey);

  return (
    <div id="project-container">
      <div id="project-details">
        <div className="proj-head">
          <Link to={`/design`}>
            <div className="proj-title">
              <h3>
                <div className="back-arrow-container armageddon">
                  <span className="back-arrow"></span>
                </div>
                {proj.name}
              </h3>
            </div>
          </Link>
          <h6>
            {proj.title}
            <span className="title-divider">/</span>
            {proj.work}
          </h6>
        </div>
        <div className="title-image armageddon">
          <img src={`../../proj-img/${proj.key}/${proj.mainImage}`} alt={proj.name} className="main-img" />
          <p className="description">{proj.description}</p>
        </div>
      </div>
      <div className={`project-grid${proj.grid}`}>
        {proj.images.map((image, index) => (
          <div
            className="img-container"
            key={index}
            style={{
              background: `url(../../proj-img/${proj.key}/${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* <img src={`../../proj-img/${proj.key}/${image.src}`} alt={proj.name} /> */}
          </div>
        ))}
      </div>
      <ScrollRestoration />
      <div className="arrow-prev"></div>
      <div className="arrow-next"></div>
      <ProjectReactions projectKey={projectKey} />
      <div className="project-divider"></div>
      <DesignProjectsList />
    </div>
  );
}

export default DesignProjectPage;

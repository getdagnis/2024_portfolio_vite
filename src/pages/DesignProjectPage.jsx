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
      <div id="project-nav">
        <div className="project-nav-open">
          {PROJECTS.map((p, index) => (
            <Link
              to={`/design/project/${p.key}`}
              key={p.key}
              className={p.key === projectKey ? 'proj-thumb active' : 'proj-thumb'}
              style={{
                backgroundImage: `url(../../thumbs/${p.key}.svg)`,
                animationDelay: `${0.3 + index / 25}s`, // apply bounce animation delay
              }}
            ></Link>
          ))}
        </div>
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

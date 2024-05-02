import { Link, ScrollRestoration, useParams } from 'react-router-dom';

import DesignProjectsList from '../components/DesignProjectsList';
import ProjectReactions from '../components/ProjectReactions';
import PROJECTS from '../constants/projects.json';
import './DesignProjectPage.css';

function DesignProjectPage() {
  const params = useParams();
  const proj = PROJECTS.find((obj) => obj.key === params.key);

  return (
    <div id="project-container">
      <div className="arrow-prev"></div>
      <div className="arrow-next"></div>
      <div id="project-details">
        <div className="proj-head">
          <h3>{proj.name}</h3>
          <h6>
            {proj.title}
            <span className="title-divider">/</span>
            {proj.work}
          </h6>
        </div>
        <div className="title-image">
          <img src={`../../proj-img/${proj.key}/${proj.images[0]}`} alt={proj.name} className="main-img" />
          <p className="description">{proj.description}</p>
        </div>
      </div>
      <div id="project-nav">
        <div className="project-nav-open">
          {PROJECTS.map((p, index) => (
            <Link
              to={`/design/project/${p.key}`}
              key={p.key}
              className={p.key === params.key ? 'proj-thumb active' : 'proj-thumb'}
              style={{
                backgroundImage: `url(../../thumbs/${p.key}.svg)`,
                animationDelay: `${0.3 + index / 25}s`, // apply bounce animation delay
              }}
            ></Link>
          ))}
        </div>
      </div>
      <ScrollRestoration />
      <ProjectReactions projectKey={proj.key} />
      <div className="project-divider"></div>
      <DesignProjectsList />
    </div>
  );
}

export default DesignProjectPage;

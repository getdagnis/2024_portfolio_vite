import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../projects.json';
import './ProjectPage.css';

function ProjectPage() {
  const params = useParams();
  const proj = projects.find((obj) => obj.key === params.key);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [params]);
  console.log('🚀🚀 params', params);
  console.log('🚀🚀 projects', projects);

  return (
    <div id="project-container">
      <div id="project-grid">
        <div id="project-details">
          <div className="proj-head">
            <h3>{proj.name}</h3>
            <h6>
              {proj.title}
              <span className="title-divider">/</span>
              {proj.work}
            </h6>
          </div>
          <img src={`../../proj-img/${proj.key}/${proj.images[0]}`} alt={proj.name} className="main-img" />
          <p className="description">{proj.description}</p>
        </div>
        <div id="project-nav">
          {projects.map((p, index) => (
            <Link
              to={`/project/${p.key}`}
              key={p.key}
              className={p.key === params.key ? 'proj-thumb active' : 'proj-thumb'}
              style={{
                backgroundImage: `url(../thumbs/${p.key}.svg)`,
                animationDelay: `${0.3 + index / 25}s`, // apply bounce animation delay
              }}
            ></Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

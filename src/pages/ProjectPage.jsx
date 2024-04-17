import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../projects.json';
import './ProjectPage.css';

function ProjectPage() {
  const params = useParams();
  const proj = projects.find((obj) => obj.key === params.key);
  const scrollRef = useRef(null); // Create a ref

  useEffect(() => {
    // check if the ref is attached to a rendered element
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 150, left: 0, behavior: 'smooth' });
    }
  }, [params]);

  return (
    <div id="project-container" ref={scrollRef}>
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
          <div className="project-nav-open">
            {projects.map((p, index) => (
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
      </div>
    </div>
  );
}

export default ProjectPage;

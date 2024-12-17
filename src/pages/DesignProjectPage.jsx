import React, { useEffect } from 'react';
import { Link, ScrollRestoration, useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import DesignProjectsList from '../components/DesignProjectsList';
import ProjectReactions from '../components/ProjectReactions';

import PROJECTS from '../constants/projects.json';
import './DesignProjectPage.css';

function DesignProjectPage() {
  const { key: projectKey } = useParams();
  const proj = PROJECTS.find((obj) => obj.key === projectKey);

  useEffect(() => {
    const seenProjects = JSON.parse(sessionStorage.getItem('seenprojects')) || [];
    if (!seenProjects.includes(projectKey)) {
      const updatedProjects = [...seenProjects, projectKey];
      sessionStorage.setItem('seenprojects', JSON.stringify(updatedProjects));
    }
  }, [projectKey]);

  // Calculate necessary count of grid rows, including double row images
  const totalRowSpan = proj.images.reduce((sum, image) => {
    return sum + (Math.pow(image.rowSpan, 2) || 0);
  }, 0);

  const ImageContainer = ({ image, projectKey, index, colSpan, rowSpan }) => {
    useEffect(() => {
      const gridRows = totalRowSpan === 0 ? 0 : totalRowSpan % 2 === 1 ? (totalRowSpan + 1) / 2 : totalRowSpan / 2;
      document.getElementById('project-grid').style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
    }, []);

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        key={index}
        id={`img-${index + 1}`}
        ref={ref}
        className={`img-container ${inView ? 'animate' : ''}`}
        style={{
          background: `url(../../proj-img/${projectKey}/${image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 1s ease-out, opacity 1s ease-out',
          animationDelay: `${index % 2 === 1 ? 0.25 : 0}s`,
          gridColumn: `span ${colSpan}`,
          gridRow: `span ${rowSpan}`,
        }}
      />
    );
  };

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
      <div id="project-grid" className={`project-grid${proj.grid ? proj.grid : '1'}`}>
        {proj.images.map((image, index) => (
          <ImageContainer
            image={image}
            projectKey={proj.key}
            index={index}
            key={index}
            colSpan={image.colSpan}
            rowSpan={image.rowSpan}
          />
        ))}
      </div>
      <ScrollRestoration />
      <div className="arrow-prev"></div>
      <div className="arrow-next"></div>
      <ProjectReactions projectKey={projectKey} />
      <div className="project-divider"></div>
      <DesignProjectsList currentProject={projectKey} />
    </div>
  );
}

export default DesignProjectPage;

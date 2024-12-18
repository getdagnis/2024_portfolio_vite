import React, { memo, useEffect, useState, useMemo } from 'react';
import { Link, ScrollRestoration, useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ImageModal from '../components/ImageModal';

import DesignProjectsList from '../components/DesignProjectsList';
import ProjectReactions from '../components/ProjectReactions';

import PROJECTS from '../constants/projects.json';
import './DesignProjectPage.css';

function DesignProjectPage() {
  const { key: projectKey } = useParams();
  const proj = PROJECTS.find((obj) => obj.key === projectKey);
  const isMobile = useMemo(() => window.innerWidth < 768, []);
  const [modalImage, setModalImage] = useState(null);
  const [disableAnimations, setDisableAnimations] = useState(false);

  const openModal = (imageSrc) => {
    setDisableAnimations(true);
    setModalImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalImage(null);
  };

  useEffect(() => {
    console.log('🍌🥕 modalImage', modalImage);
  }, [modalImage]);

  useEffect(() => {
    const seenProjects = JSON.parse(sessionStorage.getItem('seenprojects')) || [];
    if (!seenProjects.includes(projectKey)) {
      const updatedProjects = [...seenProjects, projectKey];
      sessionStorage.setItem('seenprojects', JSON.stringify(updatedProjects));
    }
  }, [projectKey]);

  // Calculate necessary number of grid rows, including double row images
  const totalRowSpan = useMemo(() => {
    return proj.images.reduce((sum, image) => sum + (Math.pow(image.rowSpan, 2) || 0), 0);
  }, [proj.images]);

  const ImageContainer = memo(({ image, projectKey, index, colSpan, rowSpan, onImageClick, disableAnimations }) => {
    useEffect(() => {
      const gridRows =
        totalRowSpan === 0
          ? 0
          : isMobile
          ? proj.images.length
          : totalRowSpan % 2 === 1
          ? (totalRowSpan + 1) / 2
          : totalRowSpan / 2;
      document.getElementById('project-grid').style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
    }, []);

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const handleClick = () => {
      const imageSrc = `../../proj-img/${projectKey}/${image.src}`;
      if (onImageClick) {
        onImageClick(imageSrc);
      }
    };

    return (
      <div
        key={index}
        id={`img-${index + 1}`}
        ref={ref}
        className={`img-container ${inView ? 'in-view' : ''} ${!disableAnimations ? 'animate' : ''}`}
        style={{
          background: `url(../../proj-img/${projectKey}/${image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animationDelay: `${index % 2 === 1 ? 1.5 : 1}s`,
          gridColumn: `span ${colSpan}`,
          gridRow: `span ${rowSpan}`,
        }}
        onClick={handleClick}
      />
    );
  });

  return (
    <div id="project-container">
      <div id="project-details">
        <div className="proj-head">
          <Link to={`/design`}>
            <div className="proj-title armageddon">
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
          <div className="description">{proj.description}</div>
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
            onImageClick={openModal}
            disableAnimations={disableAnimations}
          />
        ))}
      </div>
      <ScrollRestoration />
      <div className="arrow-prev"></div>
      <div className="arrow-next"></div>
      <ProjectReactions projectKey={projectKey} />
      <div className="project-divider"></div>
      <DesignProjectsList currentProject={projectKey} />
      {modalImage && <ImageModal imageSrc={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default DesignProjectPage;

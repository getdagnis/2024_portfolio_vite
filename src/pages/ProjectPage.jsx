import { useParams } from 'react-router-dom';
import allProjects from '../assets/thumbs.json';
import './ProjectPage.css';

function ProjectPage() {
  const params = useParams();
  console.log('🚀🚀 params', params);
  const project = allProjects.find((obj) => obj.key === params.key);
  return (
    <div className="project-container">
      <div className="project-grid">
        <div className="project-nav"></div>
        <div className="project-details">
          <h3>{project.name}</h3>
          <p className="description">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

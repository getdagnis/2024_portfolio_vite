import { Link } from 'react-router-dom';
import './AboutPage.css';

function AboutPage({ showAbout, onClose }) {
  return (
    <>
      <div className={showAbout ? 'about-background' : 'hidden'}></div>
      <div id="about-container" className={showAbout ? ' ' : 'about-hidden'}>
        <div className="close" onClick={onClose}></div>
        <img className="dag-img" src="../dag_square.png" alt="Dagnis Skurbe" />
        <div className="logo"></div>
        <p className="about-tagline">
          Creating things using <span>code & design</span> since 2003.
        </p>
        <p>
          For 20+ years Dagnis has worked professionally as a Software Developer, Graphic Designer and Creative Director
          in Advertising, Tech and Entertainment industries in Riga, Latvia and London.
        </p>
        <p>
          He is currently working as a full-stack developer using React/Node.js with a special focus on UX and Creative
          Direction.
        </p>
        <p>
          <span>Dagnis is available</span> for full-time or part-time work as a software engineer, graphic designer and
          consultant for both startups and large enterprises.
        </p>
        <p>
          Have a project in mind? Get in touch via <span>dagnis@dagn.is</span> or the links below.
        </p>
      </div>
    </>
  );
}

export default AboutPage;

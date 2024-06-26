import { Link, useLocation } from 'react-router-dom';

import './AboutPage.css';

function AboutPage({ showAbout, onClose, location }) {
  location && console.log('🚀🚀 location', location);

  return (
    <>
      <div id="about-container" className={showAbout ? ' ' : 'about-hidden'}>
        <div className="close" onClick={onClose}></div>
        <img className="dag-img" src="../dag_square.png" alt="Dagnis Skurbe" />
        <div className="about-hello-wrap">
          <h1 className="about-hello">Hello.</h1>
        </div>
        <p className="about-tagline animated-line">
          <span className="about-tagline-span">Two decades of building things using code and design.</span>
        </p>
        <p className="animated-line" style={{ animationDelay: '0.8s' }}>
          For 20+ years <span>Dagnis Skurbe</span> has worked professionally as a Front-End Developer, Graphic Designer
          and Creative Director in Advertising, Tech and Entertainment industries in Riga, Latvia and London, UK.
        </p>
        <p className="animated-line" style={{ animationDelay: '1.1s' }}>
          He is currently working as a full-stack developer using{' '}
          <span>React/Node.js with a special focus on UX, Product Ownership and Creative Direction.</span>
        </p>
        <p className="animated-line" style={{ animationDelay: '1.4s' }}>
          <span>Dagnis is available</span> for full-time or part-time work as a software engineer, graphic designer and
          consultant for both startups and large enterprises.
        </p>
        <p className="animated-line" style={{ animationDelay: '1.7s' }}>
          Have a project in mind? Let's do it together! Reach out to <span>dagnis@dagn.is</span> or the links below.
        </p>
      </div>
    </>
  );
}

export default AboutPage;

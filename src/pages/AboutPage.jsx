import { Link, useLocation } from 'react-router-dom';

import './AboutPage.css';

function AboutPage({ showAbout, onClose, location }) {
  return (
    <>
      <div id="about-container" className={showAbout ? ' ' : 'about-hidden'}>
        <div className="close" onClick={onClose}></div>
        <img className="dag-img" src="../dag_square.png" alt="Dagnis Skurbe" />
        <div className="about-hello-wrap">
          <h1 className={`about-hello ${!showAbout ? 'hidden' : ''}`}>
            <span className="hello-1">H</span>
            <span className="hello-2">e</span>
            <span className="hello-3">l</span>
            <span className="hello-4">l</span>
            <span className="hello-5">o</span>
            <span className="hello-6">!</span>
          </h1>
        </div>
        <p className="about-tagline animated-line">
          <span className="about-tagline-span">Two decades of building things using code and design</span>
        </p>
        <p className="animated-line" style={{ animationDelay: '0.8s' }}>
          It's been 20+ years that <span>Dagnis Skurbe</span> has worked professionally as a Front-End Developer,
          Graphic Designer and Creative Director in Advertising, Tech, Startup, Sports, Film and Music industries in
          both Riga, Latvia and London, UK.
        </p>
        <p className="animated-line" style={{ animationDelay: '1.1s' }}>
          He is currently working as a full-stack developer using{' '}
          <span>
            React, Next.js & Node.js with a special focus on UX and is not affraid to take the role of a Product Owner
            or Creative Director when necessary.
          </span>
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

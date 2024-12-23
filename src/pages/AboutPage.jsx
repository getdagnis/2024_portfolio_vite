import { useState } from 'react';

import { ScrollRestoration } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
  return (
    <div id="about">
      <div className="about-grid">
        <div className="left-about">
          <img className="armageddon" src="../../public/dag_square.png" alt="Dagnis" />
        </div>
        {/* <div className="right-about">list of experiences</div> */}
        <div className="right-about">
          <h1 className="armageddon">About</h1>
          <p className="armageddon">
            In early 2000s Dagnis began his career as a PC assambler/technician, then moved to web developement before
            transitioning his career to design and advertising from 2005. During the latter period, he engaged in
            graphic design, user experience design, and creative direction, accumulating experience across Adobe
            Creative Suite, graphic design, animation, web development, art direction, and copywriting.
          </p>
          <p className="armageddon">
            In 2015 Dagnis founded a board game startup for his own game Mission to Mars 2049, that saw a brief
            international success. In 2018, Dagnis returned to development, focusing on React-based projects.
          </p>
          <p className="armageddon">
            His professional journey in development spans over 12 years, with significant experience in JavaScript
            (since 2003, professionally since 2012), TypeScript, and a suite of related technologies such as Node.js,
            React, Redux, and various UI frameworks. Over the past couple of years Dagnis has mostly worked as a
            full-stack Node.js/React/Next.js developer, but his primary focus and passion has always been on front-end
            development, where he can apply his design background to enhance user interface and experience.
          </p>
          <p className="armageddon">
            Dagnis has a practical understanding of version control systems like Git, GitHub, Bitbucket, and has
            developed and integrated RESTful APIs and microservices. His experience also includes cloud services with
            platforms like Firebase, Heroku, Supabase, alongside testing with tools such as Jest and React Testing
            Library. Dagnis practices agile methodologies and has utilized Docker for containerization. Currently he is
            available for both contract and full-time positions where remote working is available.{' '}
          </p>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default AboutPage;

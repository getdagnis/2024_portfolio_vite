import { useState } from 'react';

import DevTimeline from '../components/DevTimeline';
import { ScrollRestoration } from 'react-router-dom';
import './AboutPage.css';

const entries = [
  //   {
  //     id: 1,
  //     year: '2000',
  //     title: 'computer technician/assambler',
  //     text: 'At 15 I got my first summer job as a PC technician/assambler/repairmain at an office supply company in Riga',
  //   },
  //   {
  //     id: 2,
  //     year: '2001-2005',
  //     title: 'WEB MAGAZINE FOR LITERATURE & PHILOSOPHY',
  //     text: 'In 2001, while at high school, I started building my first website dedicated to philosophy & literature. Two years later it received state funding. Until 2005 I was doing the editorial things, design & frontend development but hired a programmer from my elder sister’s work for the PHP backend code, which I then partly kept maintaining myself. Now the website — satori.lv is the leading internet & printed magazine for culture in Latvia.',
  //   },
  //   {
  //     id: 3,
  //     year: '2005',
  //     title: 'VFX ARTIST FOR A FEATURE FILM',
  //     text: 'For a couple of years I had been obsessed with 3D graphics and in 2005 I joined as a 3D designer, texture artist & matte-painter the team that was creating VFX for the 2 million budget feature film Defenders of Riga.',
  //   },
  //   {
  //     id: 4,
  //     year: '2005—2008',
  //     title: 'ART DIRECTOR FOR ADVERTISING',
  //     text: 'In late 2005 I started working for one of the best advertising agencies in Riga — DDB Latvia as a Junior Art Director. My first task was to work on the rebranding of the locally largest pay-as-you-go phone card Zelta Zivtiņa. I worked in the team that created the TV series Friends inspired TV ads, which became one of the all time most loved ad campaigns in Latvia. In a changed form they are still running them today as well as the freshened up logo I made is still in use. Among others, my clients also included Volkswagen and Hansabanka (now Swedbank). After DDB I joined Inorek&Grey (GREY network) in mid-2006 as an Art Director/Graphic Designer and was mostly working as a brand designer for new and starting projects or companies, also working on day-to-day tasks for clients such as Nokia, Coca-Cola and others.',
  //   },
  //   {
  //     id: 5,
  //     year: '2007—2009',
  //     title: 'computer',
  //     text: 'At',
  //   },
];

function AboutPage() {
  const [activeEntry, setActiveYear] = useState(null);

  return (
    <div id="about">
      <div className="about-grid">
        <div className="left-about">
          <h1>about the author</h1>
        </div>
        <div className="right-about">list of experiences</div>
        <h1>about this site</h1>
      </div>
      <DevTimeline />
      <ScrollRestoration />
    </div>
  );
}

export default AboutPage;

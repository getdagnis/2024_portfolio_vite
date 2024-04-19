import { useState } from 'react';

import './ProjectReactions.css';
import smartImg from '@assets/react-icons/react_smart.svg';
import pooImg from '@assets/react-icons/react_poo.svg';
import partyImg from '@assets/react-icons/react_party.svg';
import hipsterImg from '@assets/react-icons/react_hip.svg';
import winnerImg from '@assets/react-icons/react_cup.svg';
import confusingImg from '@assets/react-icons/react_confuse.svg';
import boringImg from '@assets/react-icons/react_zz.svg';
import loveImg from '@assets/react-icons/react_love.svg';

const reactions = [
  {
    src: smartImg,
    alt: 'Smart',
    count: 0,
  },
  {
    src: pooImg,
    alt: 'Poo',
    count: 2,
  },
  {
    src: partyImg,
    alt: 'Party',
    count: 0,
  },
  {
    src: hipsterImg,
    alt: 'Hipster',
    count: 0,
  },
  {
    src: winnerImg,
    alt: 'Winner',
    count: 1,
  },
  {
    src: confusingImg,
    alt: 'Confusing',
    count: 0,
  },
  {
    src: boringImg,
    alt: 'Boring',
    count: 3,
  },
  {
    src: loveImg,
    alt: 'Love',
    count: 0,
  },
];

const ProjectReactions = () => {
  const [activeImageIndex, setActiveImageIndex] = useState('none');

  const handleImageClick = (index) => {
    if (activeImageIndex === index) {
      setActiveImageIndex('none');
    } else {
      setActiveImageIndex(index);
    }
  };

  return (
    <div id="project-reactions">
      <h3 className="reactions-title">Your reaction</h3>
      <ul className="reactions">
        {reactions.map((reaction, index) => (
          <li key={index}>
            <img
              src={reaction.src}
              alt={reaction.alt}
              className={
                activeImageIndex === 'none'
                  ? 'reaction-default'
                  : activeImageIndex === index
                  ? 'reaction-active'
                  : 'reaction-inactive'
              }
              onClick={() => handleImageClick(index)}
            />
            <span className="reaction-count">{reaction.alt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProjectReactions;

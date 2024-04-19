import { useEffect, useState } from 'react';

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
  { key: 'smart', src: smartImg, alt: 'Smart', count: 0 },
  { key: 'poo', src: pooImg, alt: 'Poo', count: 2 },
  { key: 'yeah', src: partyImg, alt: 'Yeah!', count: 0 },
  { key: 'hip', src: hipsterImg, alt: 'Hip!', count: 0 },
  { key: 'win', src: winnerImg, alt: 'Win!', count: 1 },
  { key: 'wut', src: confusingImg, alt: 'Wut?', count: 0 },
  { key: 'zzz', src: boringImg, alt: 'Zzz..', count: 3 },
  { key: 'love', src: loveImg, alt: 'Love!', count: 0 },
];

const ProjectReactions = ({ projectKey }) => {
  const savedReaction = localStorage.getItem(`reaction-${projectKey}`);
  const [activeReactionKey, setActiveReactionKey] = useState(savedReaction);

  useEffect(() => {
    setActiveReactionKey(savedReaction);
  }, [savedReaction]);

  const handleImageClick = (reactionKey) => {
    setActiveReactionKey(reactionKey);
    localStorage.setItem(`reaction-${projectKey}`, reactionKey);
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
                activeReactionKey === null
                  ? 'reaction-default'
                  : reaction.key === activeReactionKey
                  ? 'reaction-active'
                  : 'reaction-inactive'
              }
              onClick={() => handleImageClick(reaction.key)}
            />
            <span className="reaction-count">{reaction.alt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProjectReactions;

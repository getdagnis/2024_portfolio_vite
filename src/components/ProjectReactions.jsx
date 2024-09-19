import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore'; // Use getDoc to fetch specific document

import './ProjectReactions.css';
import smartImg from '@assets/react-icons/react_smart.svg';
import pooImg from '@assets/react-icons/react_poo.svg';
import partyImg from '@assets/react-icons/react_party.svg';
import hipsterImg from '@assets/react-icons/react_hip.svg';
import winnerImg from '@assets/react-icons/react_cup.svg';
import confusingImg from '@assets/react-icons/react_confuse.svg';
import boringImg from '@assets/react-icons/react_zz.svg';
import loveImg from '@assets/react-icons/react_love.svg';

const imageMap = {
  'react_love.svg': loveImg,
  'react_smart.svg': smartImg,
  'react_poo.svg': pooImg,
  'react_party.svg': partyImg,
  'react_hip.svg': hipsterImg,
  'react_cup.svg': winnerImg,
  'react_confuse.svg': confusingImg,
  'react_zz.svg': boringImg,
};

const getProjectReactions = async (projectKey) => {
  try {
    const projectDocRef = doc(db, 'reactions', projectKey); // Use doc() to fetch specific project
    const projectDoc = await getDoc(projectDocRef);

    if (projectDoc.exists()) {
      return projectDoc.data();
    } else {
      console.error('No reactions found for projectKey:', projectKey);
      return null;
    }
  } catch (error) {
    console.error('Error getting reactions document: ', error);
    return null;
  }
};

const ProjectReactions = ({ projectKey }) => {
  const savedReaction = localStorage.getItem(`reaction-${projectKey}`);
  const [activeReactionKey, setActiveReactionKey] = useState(savedReaction);
  const [reactions, setReactions] = useState([]);

  useEffect(() => {
    setActiveReactionKey(savedReaction);
  }, [savedReaction]);

  useEffect(() => {
    const fetchData = async () => {
      if (projectKey) {
        const reactionsData = await getProjectReactions(projectKey); // Fetch reactions for the specific project
        setReactions(reactionsData); // Update state after fetching
      }
    };
    fetchData();
  }, [projectKey]); // Add projectKey as a dependency

  useEffect(() => {
    if (reactions) {
      console.log('🍌🥕 reactions', reactions);
    }
  }, [reactions]); // Log whenever reactions change

  const handleReactionClick = (reactionKey) => {
    if (reactionKey === activeReactionKey) {
      setActiveReactionKey(null);
      localStorage.removeItem(`reaction-${projectKey}`);
    } else {
      setActiveReactionKey(reactionKey);
      localStorage.setItem(`reaction-${projectKey}`, reactionKey);
    }
  };

  // const getReactionCount = () => {
  //   return 'some number';
  // };

  console.log('🍌🥕 Object.entries(reactions)', JSON.stringify(Object.entries(reactions)));

  return (
    <div id="project-reactions">
      <h3 className="reactions-title">Your reaction</h3>
      <ul className="reactions">
        {reactions &&
          reactions['reactions'] &&
          Object.entries(reactions['reactions']).map(([key, reaction], index) => (
            <li key={index}>
              <img
                src={imageMap[reaction.img]} // Map Firestore img filename to the imported asset
                alt={reaction.alt}
                className={
                  activeReactionKey === null
                    ? 'reaction-default'
                    : key === activeReactionKey
                    ? 'reaction-active'
                    : 'reaction-inactive'
                }
                onClick={() => handleReactionClick(key)}
              />
              <span className="reaction-subtitle">
                {reaction.alt}
                {reaction.count > 0 && ` (${reaction.count})`}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ProjectReactions;

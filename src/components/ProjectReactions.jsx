import './ProjectReactions.css';
import smartImg from '@assets/react-icons/react_smart.svg';
import pooImg from '@assets/react-icons/react_poo.svg';
import partyImg from '@assets/react-icons/react_party.svg';
import hipsterImg from '@assets/react-icons/react_hip.svg';
import winnerImg from '@assets/react-icons/react_cup.svg';
import confusingImg from '@assets/react-icons/react_confuse.svg';
import boringImg from '@assets/react-icons/react_zz.svg';
import loveImg from '@assets/react-icons/react_love.svg';

const ProjectReactions = () => {
  return (
    <div id="project-reactions">
      <h3 className="reactions-title">Your reaction</h3>
      <ul className="rections">
        <li>
          <img src={smartImg} alt="Smart" />
        </li>
        <li>
          <img src={pooImg} alt="Poo" />
        </li>
        <li>
          <img src={partyImg} alt="Party" />
        </li>
        <li>
          <img src={hipsterImg} alt="Hipster" />
        </li>
        <li>
          <img src={winnerImg} alt="Winner" />
        </li>
        <li>
          <img src={confusingImg} alt="Confusing" />
        </li>
        <li>
          <img src={boringImg} alt="Boring" />
        </li>
        <li>
          <img src={loveImg} alt="Love" />
        </li>
      </ul>
    </div>
  );
};
export default ProjectReactions;

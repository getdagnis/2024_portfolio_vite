import './ProjectReactions.css';

const ProjectReactions = () => {
  return (
    <div id="project-reactions">
      <h3 className="reactions-title">Your reaction</h3>
      <ul className="rections">
        <li>
          <img src="../../src/assets/react-icons/react_smart.svg" alt="Smart" />
        </li>
        <li>
          <img src="../../src/assets/react-icons/react_poo.svg" alt="Poo" />
        </li>
        <li>
          <img src="../../src/assets/react-icons/react_party.svg" alt="Party" />
        </li>
        <li>
          <img src="../../src/assets/react-icons/react_hip.svg" alt="Hipster" />
        </li>
        <li>
          <img src="../../src/assets/react-icons/react_cup.svg" alt="Winner" />
        </li>
        <li>
          <img src="../../src/assets/react-icons/react_confuse.svg" alt="Confusing" />
        </li>
        <li>
          <img src="../../src/assets/react-icons/react_zz.svg" alt="Boring" />
        </li>
        <li>
          <img src="../../src/assets/react-icons/react_love.svg" alt="Love" />
        </li>
      </ul>
    </div>
  );
};
export default ProjectReactions;

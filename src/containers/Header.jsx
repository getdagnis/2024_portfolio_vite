import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-left">
          <div className="logo"></div>
          <p className="logo-subtitle">dev & design portfolio</p>
        </div>
        <nav>
          <ul>
            <li className="active">design</li>
            <li>dev</li>
            <li>blog</li>
            <li>about</li>
          </ul>
        </nav>
      </div>
      <div className="become-slogan">
        <span className="become-left">
          ideas<strong>become</strong>brands
        </span>
        <span className="become-middle"></span>
        <span className="become-right">
          brands<strong className="b">become</strong>icons
        </span>
      </div>
    </div>
  );
}

export default Header;

import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div id="footer-container">
      <div className="become-slogan">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="logo"></div>
            <NavLink to="/contact" className="footer-message"></NavLink>
          </div>
          <div className="footer-right">
            <h3>Thanks for visiting! Get in touch!</h3>
            <ul id="footer-links">
              <li>
                mail: <span className="footer-mail"></span>
              </li>
              <li>
                x:{' '}
                <a className="footer-link" href="https://x.com/getdagnis" target="_blank">
                  <strong>@getdagnis</strong>
                </a>
              </li>
              <li>
                fb:{' '}
                <a className="footer-link" href="https://fb.com/getdagnis" target="_blank">
                  <strong>dagnis.skurbe</strong>
                </a>
              </li>
              <li>
                linkedin:{' '}
                <a className="footer-link" href="https://linkedin.com/in/getdagnis" target="_blank">
                  <strong>linkedin.com/in/getdagnis</strong>
                </a>
              </li>
              <h6>© Dagnis Skurbe, 2024</h6>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

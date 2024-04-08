import './Footer.css';

function Footer() {
  return (
    <div id="footer-container">
      <div className="become-slogan">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="logo"></div>
            <div className="footer-message"></div>
          </div>
          <div className="footer-right">
            <h3>Thanks for visiting! Get in touch!</h3>
            <ul>
              <li>
                mail: <strong>me@dagn.is</strong>
              </li>
              <li>
                x: <strong>@getdagnis</strong>
              </li>
              <li>
                fb: <strong>dagnis.skurbe</strong>
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

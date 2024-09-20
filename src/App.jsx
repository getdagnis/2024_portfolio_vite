import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import Header from './layout/Header';
import Footer from './layout/Footer';
import './App.css';

// Google Analytics
const TRACKING_ID = 'G-JWRXKK1QPP';
ReactGA.initialize(TRACKING_ID);

function App({ children }) {
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <>
      <div id="site-container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default App;

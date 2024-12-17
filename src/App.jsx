import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import { AppProvider } from './context/AppContext';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './App.css';

// Google Analytics
const TRACKING_ID = 'G-JWRXKK1QPP';
ReactGA.initialize(TRACKING_ID);

function App({ children }) {
  // Google Analytics
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <AppProvider>
      <div id="site-container">
        <Header />
        <div id="site-content">{children}</div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;

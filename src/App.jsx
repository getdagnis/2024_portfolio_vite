import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';

import './App.css';

function App({ children }) {
  const hidePortfolio = ['/cv', '/blog'];

  return (
    <div className="site-container">
      <Header />
      {children}
      {!hidePortfolio.some((path) => window.location.pathname.startsWith(path)) && <PortfolioPage />}{' '}
      {/* exclude portfolio page for the paths in the array*/}
      <Footer />
    </div>
  );
}

export default App;

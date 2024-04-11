import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App({ children }) {
  return (
    <div className="site-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;

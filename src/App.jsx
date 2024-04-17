import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App({ children }) {
  return (
    <>
      <div id="curtain"></div>
      <div id="site-container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default App;

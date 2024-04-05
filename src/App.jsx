import Header from './containers/Header';
import Footer from './containers/Footer';
import Portfolio from './containers/Portfolio';

import './App.css';

function App() {
  return (
    <>
      <div id="curtain"></div>
      <div className="site-container">
        <Header />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;

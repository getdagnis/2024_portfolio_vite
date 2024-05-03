import Header from './layout/Header';
import Footer from './layout/Footer';

import './App.css';

function App({ children }) {
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

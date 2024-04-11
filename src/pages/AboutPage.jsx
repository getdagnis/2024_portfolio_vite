import { Link } from 'react-router-dom';
import './AboutPage.css';

function AboutPage({ onClose }) {
  return (
    <div className="about-container">
      <div className="close" onClick={onClose}></div>
      <div className="logo"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis tincidunt ullamcorper. Ut non
        vehicula ex. Quisque tempus consequat nunc, eu porttitor tortor pharetra eget. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis vel lacus odio. Ut vitae tempus nibh. Nunc quis mauris velit. Vivamus
        dignissim lectus nec arcu fermentum, id rutrum eros ultricies. Sed aliquam enim in euismod tempus. Proin eget
        velit a purus imperdiet bibendum vel at ex.
      </p>
      <p>
        Phasellus non elementum quam. Nulla dignissim pharetra eros, nec porta magna eleifend eu. Nullam id convallis
        arcu. Pellentesque suscipit euismod ex. Nullam ut leo sapien. Pellentesque congue, justo in pellentesque
        convallis, nunc nisi efficitur turpis, ac feugiat odio risus at magna. Nunc rutrum nunc sed dictum aliquet.
        Etiam sed tempus nulla. Nullam eget diam eu sem cursus pellentesque. Maecenas sit amet urna at ligula tincidunt
        congue.
      </p>
      <p>
        Morbi porta libero risus, at rutrum arcu vulputate vitae. Sed rhoncus sit amet mi sed porttitor. Sed gravida
        rutrum risus ac faucibus. Cras vitae nulla id lorem viverra finibus. Ut pretium tristique posuere. Nulla
        facilisi. Praesent interdum tristique tellus, eu egestas nibh. Phasellus suscipit eleifend tincidunt.{' '}
      </p>
    </div>
  );
}

export default AboutPage;

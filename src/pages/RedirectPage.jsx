import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RedirectPage.css';
import Portfolio from './PortfolioPage';

function RedirectPage() {
  const navigate = useNavigate();
  const params = useParams();

  // this redirect simulates page refresh on the portfolio page (animation on re-render)
  useEffect(() => {
    navigate({
      pathname: `/${params.to}`,
    });
  }, [navigate]);

  // importing portfolio page to prevent layout shift
  return <Portfolio />;
}

export default RedirectPage;

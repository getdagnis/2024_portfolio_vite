import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RedirectPage.css';
import Portfolio from './PortfolioPage';

function RedirectPage() {
  const navigate = useNavigate();

  // this redirect simulates page refresh on the portfolio page (animation on re-render)
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  // importing portfolio page to prevent layout shift
  return <Portfolio />;
}

export default RedirectPage;

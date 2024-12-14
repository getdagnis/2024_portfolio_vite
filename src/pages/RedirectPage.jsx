import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RedirectPage.css';
import DesignPage from './DesignPage';

function RedirectPage() {
  const navigate = useNavigate();
  const params = useParams();

  // this redirect simulates page refresh on the portfolio page (animation on re-render)
  useEffect(() => {
    navigate(`/${params.to}`, { replace: true });
  }, [navigate, params.to]);

  // importing portfolio page to prevent layout shift
  return <DesignPage />;
}

export default RedirectPage;

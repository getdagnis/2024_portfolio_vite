import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import NotFoundPage from './pages/NotFoundPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';
import RedirectPage from './pages/RedirectPage';
import VotePage from './pages/VotePage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <App children={<PortfolioPage />} /> },
      { path: '/about', element: <App children={<AboutPage />} /> },
      { path: '/design', element: <App children={<PortfolioPage />} /> },
      { path: '/design/project/:key', element: <App children={<ProjectPage />} /> },
      { path: '/experience', element: <App children={<ExperiencePage />} /> },
      { path: '/redirect', element: <App children={<RedirectPage />} /> },
      { path: '/vote', element: <App children={<VotePage />} /> },
      { path: '*', element: <App children={<NotFoundPage />} /> },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;

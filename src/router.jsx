import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage';
import DevPage from './pages/DevPage';
import NotFoundPage from './pages/NotFoundPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';
import VotePage from './pages/VotePage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <App children={<PortfolioPage />} /> },
      { path: '/about', element: <App children={<AboutPage />} /> },
      { path: '/design', element: <App children={<PortfolioPage />} /> },
      { path: '/dev', element: <App children={<DevPage />} /> },
      { path: '/project', element: <App children={<ProjectPage />} /> },
      { path: '/vote', element: <App children={<VotePage />} /> },
      { path: '*', element: <App children={<NotFoundPage />} /> },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;

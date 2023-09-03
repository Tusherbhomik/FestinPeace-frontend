import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import FestsPage from './pages/FestsPage';
import ClubsPage from './pages/ClubsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import FestDetailsPage from './sections/@dashboard/fest&clubs/FestDetails';


export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        {
          path: 'fests',
          element: <FestsPage />,
        },
        { path: 'clubs', element: <ClubsPage /> },
        { path: 'blog', element: <BlogPage /> },
        {
          path: 'festdetails/:festid',
          element: <FestDetailsPage />
        },
        {
          path: 'hello',
          element: <h1>hello</h1>
        }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

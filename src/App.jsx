import { GlobalStyles } from './styles/GlobalStyles';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

import Home from './pages/home/Home';
import Layout from './components/Layout';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import PrivateRoute from './routes/PrivateRoute';
import ServicesPage from './pages/servicesPage/ServicesPage';
import StaysPage from './pages/servicesPage/stays/StaysPage';
import AuthRoute from './routes/AuthRoute';
import FlightsPage from './pages/servicesPage/flights/FlightsPage';
import StayDetails from './pages/servicesPage/stays/staysDetails/StayDetails';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'sign-in',
          element: (
            <AuthRoute>
              <SignIn />
            </AuthRoute>
          ),
        },

        {
          path: 'sign-up',
          element: (
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          ),
        },
        {
          path: 'services',
          element: (
            <PrivateRoute>
              <ServicesPage />
            </PrivateRoute>
          ),
          children: [
            {
              index: true,
              element: <FlightsPage />,
            },
            {
              path: 'stays',
              element: <StaysPage />,
            },
            {
              path: 'stays/:id',
              element: <StayDetails />,
            },
          ],
        },
        {
          path: '*',
          element: <Navigate to='/' />,
        },
      ],
    },
  ],
  {
    basename: '/ExplorEra',
  }
);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

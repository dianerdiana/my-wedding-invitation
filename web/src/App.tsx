import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

// Auth
// const Login = lazy(() => import('./views/authentication/Login'));
import Login from './views/authentication/Login';

const Invitation = lazy(() => import('./views/invitation'));
const WeddingConfig = lazy(() => import('./views/wedding-config'));
const GuestList = lazy(() => import('./views/admin/guest/list'));
const CreateGuest = lazy(() => import('./views/admin/guest/create'));

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import AdminLayout from './layouts/AdminLayout';

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: '/',
          element: <Invitation />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        {
          path: 'admin',
          element: <Navigate to="guests" />,
        },
        {
          path: 'admin/config',
          element: <WeddingConfig />,
        },
        {
          path: 'admin/guests',
          element: <GuestList />,
        },
        {
          path: 'admin/guests/create',
          element: <CreateGuest />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

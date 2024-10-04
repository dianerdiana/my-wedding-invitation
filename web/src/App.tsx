import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";

const Invitation = lazy(() => import("./views/invitation"));
const WeddingConfig = lazy(() => import("./views/wedding-config"));
const GuestList = lazy(() => import("./views/admin/guest/list"));
const CreateGuest = lazy(() => import("./views/admin/guest/create"));

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Invitation />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "config",
          element: <WeddingConfig />,
        },
        {
          path: "guests",
          element: <GuestList />,
        },
        {
          path: "guests/create",
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

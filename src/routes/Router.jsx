import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile/Profile";
import Signin from "../pages/Signin/pages/Signin";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
}

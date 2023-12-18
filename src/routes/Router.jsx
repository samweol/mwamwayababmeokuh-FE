import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile/Profile";
import Signin from "../pages/Signin/pages/Signin";
import Signup from "../pages/Signup/pages/Signup";
import VerifyEmail from "../pages/VerifyEmail/pages/VerifyEmail";

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
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signup/verify-email",
      element: <VerifyEmail />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
}

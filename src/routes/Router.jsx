import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile/Profile";
import Signin from "../pages/Signin/pages/Signin";
import Signup from "../pages/Signup/Signup/pages/Signup";
import VerifyEmail from "../pages/Signup/VerifyEmail/pages/VerifyEmail";
import GetPassword from "../pages/Signup/GetPassword/pages/GetPassword";
import EditProfile from "../pages/EditProfile/pages/EditProfile";
import SelectArtist from "../pages/SelectArtist/pages/SelectArtist";

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
      path: "/signup/password",
      element: <GetPassword />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile/edit",
      element: <EditProfile />,
    },
    {
      path: "/select-artist",
      element: <SelectArtist />,
    },
  ]);
  return <RouterProvider router={router} />;
}

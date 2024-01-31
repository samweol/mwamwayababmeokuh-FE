import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../pages/Signin/pages/Signin";
import Signup from "../pages/Signup/Signup/pages/Signup";
import VerifyEmail from "../pages/Signup/VerifyEmail/pages/VerifyEmail";
import GetPassword from "../pages/Signup/GetPassword/pages/GetPassword";
import EditProfile from "../pages/EditProfile/pages/EditProfile";
import SelectArtist from "../pages/SelectArtist/pages/SelectArtist";
import Home from "../pages/Home/pages/Home";
import Profile from "../pages/Profile/pages/Profile";
import WritePost from "../pages/WritePost/pages/WritePost";
import PostDetail from "../pages/PostDetail/pages/PostDetail";
import Search from "../pages/Search/pages/Search";
import Like from "../pages/Like/pages/Like";
import FindPassword from "../pages/FindPassword/pages/FindPassword";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/like",
      element: <Like />,
    },
    {
      path: "/post/write",
      element: <WritePost />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/findpassword",
      element: <FindPassword />,
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
    {
      path: "/post/detail",
      element: <PostDetail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER_PATHS } from "src/constants/paths";

const Home = lazy(() => import("src/pages/Home"));

const SignUp = lazy(() => import("src/pages/SignUp"));
const Confirm = lazy(() => import("src/pages/Confirm"));

const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.Home,
    element: <Home />,
  },
  {
    path: ROUTER_PATHS.signup,
    element: <SignUp />,
  },
  {
    path: ROUTER_PATHS.confirm,
    element: <Confirm />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

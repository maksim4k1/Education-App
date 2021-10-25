import Error404 from "../pages/errors/Error404";
import Login from "../pages/Login";
import Main from "../pages/Main";

export const privateRoutes = [
  {path: "/", component: Main, exact: true},
];

export const publicRoutes = [
  {path: "/login", component: Login, exact: true},
];

export const generalRoutes = [
  {path: "/error/404", component: Error404, exact: true},
];
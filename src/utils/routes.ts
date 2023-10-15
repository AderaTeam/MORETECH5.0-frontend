import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage/";
import MapPage from "../pages/MapPage/MapPage";
import MapRoutePage from "../pages/MapRoutePage/MapRoutePage";

import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MAPROUTE_ROUTE, MAP_ROUTE, REGISTRATION_ROUTE } from "./const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
    title: 'Управление отделениями',
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
    title: 'login',
  },
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage,
    title: 'registration',
  },
  {
    path: HOME_ROUTE,
    Component: HomePage,
    title: 'Поиск отделения',
  },
  {
    path: MAP_ROUTE,
    Component: MapPage,
    title: 'Карты',
  },
  {
    path: MAPROUTE_ROUTE,
    Component: MapRoutePage,
    title: 'Карты',
  },
]

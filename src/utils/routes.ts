import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage/";
import MapPage from "../pages/MapPage/MapPage";

import { HOME_ROUTE, LOGIN_ROUTE, MAP_ROUTE, REGISTRATION_ROUTE } from "./const";

import { IconDeviceAnalytics } from '@tabler/icons-react';

export const authRoutes = [
  
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
    icon: IconDeviceAnalytics
  },
  {
    path: MAP_ROUTE,
    Component: MapPage,
    title: 'Карты',
    icon: IconDeviceAnalytics
  },
]

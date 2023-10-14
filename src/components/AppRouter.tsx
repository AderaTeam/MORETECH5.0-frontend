import { Flex, Stack } from "@mantine/core";
import { authRoutes, publicRoutes } from "../utils/routes";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { HeaderSimple } from "./Header/Header";
import SwipeSheet from "./SwipeSheet/SwipeSheet";
import { MAPROUTE_ROUTE, MAP_ROUTE } from "../utils/const";

const AppRouter = () => {
  const { UStore } = useContext(Context);
  const location = useLocation();

  /*if (UStore.isAuth && (location.pathname === '/login' || location.pathname === '/registration')) {
    return <Navigate to='/' replace/>
  }*/

  /*if (!UStore.isAuth && (location.pathname === '/' || location.pathname === '/test')) {
    return <Navigate to='/login' replace/>
  }*/

  if (!UStore.userLocation && (location.pathname === '/map' || location.pathname === '/route')) {
    return <Navigate to='/' replace/>
  }

  return(
    <Flex>
      <Stack style={{width: '100vw'}} spacing="0rem">
        {location.pathname !== MAPROUTE_ROUTE && <HeaderSimple/>}
        <Routes>
          {/*UStore.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
          )*/}
          {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
          )}
        </Routes>
        {location.pathname === MAP_ROUTE && <SwipeSheet/>}
      </Stack>
    </Flex>
  );
};

export default observer(AppRouter);
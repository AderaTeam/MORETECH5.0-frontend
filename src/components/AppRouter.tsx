import { Button, Flex, Stack } from "@mantine/core";
import { authRoutes, publicRoutes } from "../utils/routes";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { HeaderSimple } from "./Header/Header";
import SwipeSheet from "./SwipeSheet/SwipeSheet";
import { ADMIN_ROUTE, LOGIN_ROUTE, MAPROUTE_ROUTE, MAP_ROUTE, REGISTRATION_ROUTE } from "../utils/const";
import { useDisclosure } from "@mantine/hooks";

const AppRouter = () => {
  const { UStore } = useContext(Context);
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();

  if (!UStore.userLocation && (location.pathname === '/map' || location.pathname === '/route')) {
    return <Navigate to='/' replace/>
  }

  if (UStore.isAuth && (location.pathname === '/login' || location.pathname === REGISTRATION_ROUTE)) {
    return <Navigate to={ADMIN_ROUTE} replace/>
  }

  const Component = () => {
    return (
      <div style={{padding: '24px'}}>
        <Button
          onClick={() => navigate(LOGIN_ROUTE)}
          color="brand.0" 
          size="md" 
          fullWidth 
          className="button"
        >
          Войти как менеджер
        </Button>
      </div>
    )
  }

  return(
    <Flex>
      <Stack style={{width: '100vw'}} spacing="0rem">
        {location.pathname !== MAPROUTE_ROUTE && <HeaderSimple opened={opened} toggle={toggle}/>}
        <Routes>
          {UStore.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
          )}
          <Route path="/login/button" element={<Component/>}/>
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
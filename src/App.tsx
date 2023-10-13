import { BrowserRouter } from "react-router-dom"
import { YMaps } from "@pbe/react-yandex-maps"
import { Loader, Stack, em } from "@mantine/core"
import { useContext, useEffect, useState } from "react"
import { Context } from "./main"
import { observer } from "mobx-react-lite"
import { useMediaQuery } from "@mantine/hooks"
import { ILocation } from "./models/ILocation"

import AppRouter from "./components/AppRouter"

import './styles/reset.css'
import './fonts/VTBGroupUI-Bold/VTBGroupUI-Bold_stylesheet.css';
import './fonts/VTBGroupUI-Medium/VTBGroupUI-Medium_stylesheet.css';
import './fonts/VTBGroupUI-Regular/VTBGroupUI-Regular_stylesheet.css';

const App = observer(function () {
  const { UStore } = useContext(Context);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [userLocation, setUserLocation] = useState<ILocation>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    UStore.setIsMobile(isMobile);
  }, [isMobile]);

  useEffect(() => {
    userLocation && setUserLocation(userLocation);
  }, [userLocation]);

  if (UStore.isLoading) {
    return (
      <Stack h={"100vh"} align="center" justify="center">
        <Loader size="xl" color="indigo.5"/>
      </Stack>
    );
  }

  return (
    <BrowserRouter>
      <YMaps>
        <AppRouter/>
      </YMaps>
    </BrowserRouter>
  )
});

export default App;

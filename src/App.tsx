import { BrowserRouter } from "react-router-dom"
import { YMaps } from "@pbe/react-yandex-maps"
import { Loader, Stack } from "@mantine/core"
import { useContext, useEffect, useState } from "react"
import { Context } from "./main"
import { observer } from "mobx-react-lite"
import { ILocation } from "./models/ILocation"

import AppRouter from "./components/AppRouter"

import './styles/reset.css'
import './fonts/VTBGroupUI-Bold/VTBGroupUI-Bold_stylesheet.css';
import './fonts/VTBGroupUI-Medium/VTBGroupUI-Medium_stylesheet.css';
import './fonts/VTBGroupUI-Regular/VTBGroupUI-Regular_stylesheet.css';
import axios from "axios"

const App = observer(function () {
  const { UStore } = useContext(Context);
  const [userLocation, setUserLocation] = useState<ILocation>();

  useEffect(() => {
    try {
      UStore.setLoading(true);
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
    } finally {
      UStore.setLoading(false);
    }
  
  }, []);

  useEffect(() => {
    if (userLocation) {
      UStore.setUserLocation(userLocation);
      try {
        axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=5fff5614-b0c5-4970-b75d-28aa88c46171&format=json&geocode=${userLocation.longitude},${userLocation.latitude}`)
        .then(response => {
          const result = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
          UStore.setUserCurrentLocation({longitude: result[0], latitude: result[1], 
            address: response.data.response.GeoObjectCollection.featureMember[0].GeoObject.name});
        })
      } catch (error) {
        console.log(error)
      }
    }
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
      <YMaps query={{apikey: '5fff5614-b0c5-4970-b75d-28aa88c46171', load: 'package.full'}}>
        <AppRouter/>
      </YMaps>
    </BrowserRouter>
  )
});

export default App;

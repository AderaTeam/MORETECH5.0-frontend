import { useContext, useEffect, useRef, useState } from "react";
import { Clusterer, Map, Placemark, useYMaps } from "@pbe/react-yandex-maps";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Flex } from "@mantine/core"; 
import { YMapsModules } from "@pbe/react-yandex-maps/typings/util/typing";

interface typesOfMissionProps {
  [key: string] : [YMapsModules | undefined, ((api: any) => void) | undefined],
}
interface routeType {
  [key: string] : (ymaps: any) => void,
}

interface mapProps {
  value?: string,
}


const MapComponent = ({value}: mapProps) => {
  const {UStore, MStore} = useContext(Context);
  const mission: string = history.state.usr;
  const ymaps = useYMaps();

  const map = useRef<any>(null);
  const mapState = {
    center: [UStore.userLocation?.latitude!, UStore.userLocation?.longitude!],
    zoom: 15
  };

  useEffect(() => {
    if (value === 'car') {
      map.current.geoObjects.removeAll();
      addRoute(ymaps);
    } else if (value === 'walk' && map.current) {
      map.current.geoObjects.removeAll();
      addRoute(ymaps);
    } else if (value === 'bus' && map.current){
      map.current.geoObjects.removeAll();
      addRoute(ymaps);
    }
    
  }, [value])

  const addRoute = (ymaps: any) => {
    const pointA = [UStore.userLocation?.latitude!, UStore.userLocation?.longitude!];
    const pointB = [MStore.office?.latitude, MStore.office?.longitude]; 

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: value === 'car' ? undefined : value === 'bus' ? 'masstransit' : 'pedestrian',
        } 
      },
      {
        boundsAutoApply: true
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  const typesOfMission: typesOfMissionProps = {
    'all': [undefined, undefined],
    'multiRoute': [["multiRouter.MultiRoute"], addRoute],
  }

  return (
    <Flex style={{height: '100vh', width: '100vw'}}>
      <Map
        style={{width: '100%'}}
        modules={typesOfMission[mission][0]}
        state={mapState}
        instanceRef={map}
        onLoad={typesOfMission[mission][1]}
      >
        <Clusterer
          options={{
            preset: "islands#invertedOrangeClusterIcons",
            groupByCoordinates: false,
          }}
        >
          {mission === 'all' && (
            MStore.offices?.map(office => (
              <Placemark
                key={office.id}
                defaultGeometry={[office.latitude, office.longitude]}
                modules={["geoObject.addon.hint", "geoObject.addon.balloon"]}
              />
            ))
          )}
        </Clusterer>
      </Map>
    </Flex>
  );
}

export default observer(MapComponent);
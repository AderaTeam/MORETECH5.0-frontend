import { useContext, useRef } from "react";
import { Clusterer, Map, Placemark } from "@pbe/react-yandex-maps";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Flex } from "@mantine/core"; 
import { YMapsModules } from "@pbe/react-yandex-maps/typings/util/typing";

interface typesOfMissionProps {
  [key: string] : [YMapsModules | undefined, ((api: any) => void) | undefined],
}

const MapComponent = () => {
  const {UStore, MSore} = useContext(Context);
  const mission: string = history.state.usr;

  const map = useRef<any>(null);
  const mapState = {
    center: [UStore.userLocation?.latitude!, UStore.userLocation?.longitude!],
    zoom: 15
  };

  const addRoute = (ymaps: any) => {
    const pointA = [55.03123, 73.28743];
    const pointB = [55.0443, 73.31522]; 

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "pedestrian"
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
            MSore.offices?.map(office => (
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
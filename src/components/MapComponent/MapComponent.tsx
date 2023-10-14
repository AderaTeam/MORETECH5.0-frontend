import { useContext, useEffect, useRef } from "react";
import { Clusterer, Map, Placemark, useYMaps } from "@pbe/react-yandex-maps";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Drawer, Flex } from "@mantine/core"; 
import { YMapsModules } from "@pbe/react-yandex-maps/typings/util/typing";
import { IMap } from "../../models/IMap";
import OfficeDraweContent from "../../pages/MapPage/components/OfficeDraweContent";
import { useDisclosure } from "@mantine/hooks";
import { duration } from "../../pages/MapRoutePage/MapRoutePage";

interface typesOfMissionProps {
  [key: string] : [YMapsModules | undefined, ((api: any) => void) | undefined],
}

interface mapProps {
  value?: string,
  setDuration?: React.Dispatch<React.SetStateAction<duration | undefined>>,
  duration?: duration | undefined
}

const MapComponent = ({value,setDuration}: mapProps) => {
  const {UStore, MStore, DStore} = useContext(Context);
  const [opened, { open, close }] = useDisclosure(false);
  const mission: string = history.state.usr;
  const ymaps = useYMaps();

  const map = useRef<any>(null);
  const mapState = {
    center: [MStore.mapCenterLocation?.latitude || UStore.userLocation?.latitude!,
      MStore.mapCenterLocation?.longitude || UStore.userLocation?.longitude!],
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
    
  }, [value]);

  useEffect(() => {
    if (!opened) DStore.setIsItem(false);
  }, [opened])

  const addRoute = (ymaps: any) => {
    const pointA = [UStore.userLocation?.latitude!, UStore.userLocation?.longitude!];
    const pointB = [MStore.office?.latitude, MStore.office?.longitude]; 

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: value === 'car' ? undefined : value === 'bus' ? 'masstransit' : 'pedestrian',
          avoidTrafficJams: true
        } 
      },
      {
        boundsAutoApply: true
      }
    );
    multiRoute.model.events.add('requestsuccess', function() {
      var activeRoute = multiRoute.getActiveRoute();
      if (setDuration) {
        if (value === 'walk') {
          setDuration((perv) => ({...perv, walk: activeRoute.properties.get("duration").text}));
        } else if (value === 'car') {
          setDuration((perv) => ({...perv, car: activeRoute.properties.get("duration").text}));
        } else if (value === 'bus') {
          setDuration((perv) => ({...perv, bus: activeRoute.properties.get("duration").text}));
        } 
      }
    });
    map.current.geoObjects.add(multiRoute);
  };

  const typesOfMission: typesOfMissionProps = {
    'all': [undefined, undefined],
    'multiRoute': [["multiRouter.MultiRoute"], addRoute],
  }

  const handlePlacemarkClick = (office: IMap) => {
    MStore.setMapCenterLocation({latitude: +office.latitude, longitude: +office.longitude});
    DStore.setIsItem(true);
    MStore.setOffice(office);
    open();
  }

  return (
    <Flex style={{height: '100vh', width: '100vw'}}>
      <Drawer 
        withCloseButton={false} 
        position="bottom" 
        opened={opened} onClose={close}
        className="drawer"
        size={350}
      >
        <OfficeDraweContent close={close} office={MStore.office!}/>
      </Drawer>
      <Map
        style={{width: '100%'}}
        modules={typesOfMission[mission][0]}
        state={mapState}
        instanceRef={map}
        onLoad={typesOfMission[mission][1]}
      >
        <Placemark
          options={{
            preset: 'islands#redCircleDotIconWithCaption',
          }}
          defaultGeometry={[UStore.userCurrentLocation?.latitude!, UStore.userCurrentLocation?.longitude]}
          modules={["geoObject.addon.hint", "geoObject.addon.balloon"]}
        />
        <Clusterer
          options={{
            preset: "islands#invertedBlueClusterIcons",
            groupByCoordinates: false,
          }}
        >
          {mission === 'all' && (
            MStore.offices?.map(office => (
              <Placemark
                options={{
                  preset: 'islands#blueCircleDotIconWithCaption',
                }}
                onClick={() => handlePlacemarkClick(office)}
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
import { useContext, useRef } from "react";
import { Map } from "@pbe/react-yandex-maps";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

const MapComponent = () => {
  const {UStore} = useContext(Context);
  const map = useRef<any>(null);
  const mapState = {
    center: [UStore.userLocation?.latitude!, UStore.userLocation?.longitude!],
    zoom: 12
  };

  const addRoute = (ymaps: any) => {
    const pointA = [55.03123, 73.28743];
    const pointB = [55.02510, 73.29721]; 

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

  return (
    <div className="App">
      
        <Map
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
        />
      
    </div>
  );
}

export default observer(MapComponent);
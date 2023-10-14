import { Drawer } from "@mantine/core";
import MapComponent from "../../components/MapComponent/MapComponent";
import Wrapper from "../../components/Wrappers/Wrapper";
import { useDisclosure } from "@mantine/hooks";
import RouteDrawerContent from "./components/RouteDrawerContent";
import { useContext, useEffect, useState } from "react";
import FinalDrawerContent from "./components/FinalDrawerContent";
import { Context } from "../../main";

export interface duration {
  'car'?: string,
  'walk'?: string,
  'bus'?: string
}

const MapRoutePage = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const [tab, setTab] = useState<boolean>(false);
  const [value, setValue] = useState<string>('walk');
  const [duration, setDuration] = useState<duration | undefined>();
  const {MStore} = useContext(Context);
  
  useEffect(() => {
    if (tab) {
      const date = new Date();
      const hours = date.getHours() > 10 ? `${date.getHours()}` : `0${date.getHours()}`;
      const minutes = date.getMinutes() > 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`;
      MStore.setTimeStart({hours: hours, minutes: minutes})
    }
  }, [tab])

  return (
    <Wrapper>
      <MapComponent duration={duration} setDuration={setDuration} value={value}/>
      <Drawer
        withCloseButton={false} 
        position="bottom" 
        opened={opened} onClose={close}
        className="drawer"
        size={500}
        closeOnClickOutside={false}
        withOverlay={false}
      >
        {!tab ? <RouteDrawerContent duration={duration} setTab={setTab} value={value} setValue={setValue} close={close}/>
        : <FinalDrawerContent value={value} close={close} setTab={setTab}/>}
      </Drawer>
      <></>
    </Wrapper>
  );
}

export default MapRoutePage;
import { Drawer } from "@mantine/core";
import MapComponent from "../../components/MapComponent/MapComponent";
import Wrapper from "../../components/Wrappers/Wrapper";
import { useDisclosure } from "@mantine/hooks";
import RouteDrawerContent from "./components/RouteDrawerContent";
import { useState } from "react";

const MapRoutePage = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const [value, setValue] = useState<string>('walk');

  return (
    <Wrapper>
      <MapComponent value={value}/>
      <Drawer
        withCloseButton={false} 
        position="bottom" 
        opened={opened} onClose={close}
        className="drawer"
        h={441}
        closeOnClickOutside={false}
        withOverlay={false}
      >
        <RouteDrawerContent value={value} setValue={setValue} close={close}/>
      </Drawer>
      <></>
    </Wrapper>
  );
}

export default MapRoutePage;
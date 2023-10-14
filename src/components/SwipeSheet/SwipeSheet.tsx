import { Divider, Drawer, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import DrawerContent from "./DrawerContent";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { IMap } from "../../models/IMap";
import OfficeDrawerContent from "../../pages/MapPage/components/OfficeDraweContent";
import { observer } from "mobx-react-lite";

interface swipeProps {
  isItemProp?: boolean
}

const SwipeSheet = ({isItemProp}: swipeProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const {DStore, MStore} = useContext(Context);
  const [isItem, setIsItem] = useState<boolean>(isItemProp || false);
  const [office, setOffice] = useState<IMap>();

  useEffect(() => {
    DStore.setIsList(opened);
    setIsItem(false)
  }, [opened]);
  
  useEffect(() => {
    if (isItem) {
      DStore.setIsItem(true);
    } else {
      DStore.setIsItem(false);
    }
  }, [isItem]);

  const handleCheckInfo = (office: IMap) => {
    setOffice(office);
    setIsItem(true);
  }

  return (
    <>
      <Drawer 
        withCloseButton={false} 
        position="bottom" 
        opened={opened} onClose={close}
        className="drawer"
        size={isItem ? 350 : undefined}
      >
        {!isItem ? 
          <DrawerContent handleCheckInfo={handleCheckInfo} close={close}/> :
          <OfficeDrawerContent close={close} office={office! || MStore.office}/>
        }
      </Drawer>
    

    <Stack
      spacing={0}
      p={'8px 24px 23px'}
      style={{
        background: 'white',
        borderRadius: '24px 24px 0 0', 
        boxShadow: '0px 0px 12px 0px rgba(0, 14, 65, 0.13)',
        position: 'sticky',
        bottom: 0,
        zIndex: 1000,
        cursor: 'pointer'
      }}
      onClick={open}
    >
      <Divider mb={'24px'} size={'3px'} style={{alignSelf: 'center'}} w={80}/>
      <Title size={'h3'} color="gray.0" fw={500}>
        Отделения и банкоматы
      </Title>
    </Stack>
  </>
  );
}

export default observer(SwipeSheet);
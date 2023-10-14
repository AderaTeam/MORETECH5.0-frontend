import { Divider, Drawer, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import DrawerContent from "./DrawerContent";

const SwipeSheet = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
    <Drawer 
      withCloseButton={false} 
      position="bottom" 
      opened={opened} onClose={close}
      className="drawer"
    >
      <DrawerContent close={close}/>
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

export default SwipeSheet;
import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import DrawerTitle from "../../../components/SwipeSheet/DrawerTitle";
import DrawerWrapper from "../../../components/Wrappers/DraweWrapper";
import { IconChevronLeft } from "@tabler/icons-react";
import OfficeItem from "../../MapPage/components/OfficeItem";
import { useYMaps } from "@pbe/react-yandex-maps";
import { useContext } from "react";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";

interface props {
  close: (() => void),
  setTab: React.Dispatch<React.SetStateAction<boolean>>,
  value: string
}

const FinalDrawerContent = ({setTab, value, close}: props) => {
  const routeType :{[key: string] : string} = {
    'walk': 'Пешком',
    'car': 'На машине',
    'bus': 'На общественном транспорте'
  }
  const {MStore} = useContext(Context);
  const ymaps = useYMaps();

  return (
    <DrawerWrapper>
      <DrawerTitle close={undefined} title='Ваш маршрут' />
      {ymaps && <OfficeItem ymaps={ymaps} onClose={close} crowd={MStore.office?.crowd!} office={MStore.office?.office!}/>}
      <Stack spacing={16}>
        <Title size={'h4'} color="gray.0">
          {routeType[value]}
        </Title>
        <Flex justify={'space-between'} align={'center'}>
          <Text size={'md'} lh={'21px'} color="gray.2">Время прибытия</Text>
          <Text size={'md'} lh={'21px'} color="gray.0">~ {MStore.timeStart?.hours}:{MStore.timeStart?.minutes}</Text>
        </Flex>
      </Stack>
      <Stack spacing={8}>
        <Button
          onClick={() => setTab(false)}
          color="gray.5" 
          size="md" 
          fullWidth 
          className="button"
          leftIcon={<IconChevronLeft stroke={1.5} width={24} height={24} color="#DCE0EB"/>}
        >
          <Text size={'md'} lh={'21px'} color="brand.0">Изменить параметры</Text>
        </Button>
        <Button
          onClick={() => setTab(false)}
          color="brand.0" 
          size="md" 
          fullWidth 
          className="button"
        >
          Закончить маршрут
        </Button>
      </Stack>
    </DrawerWrapper>
  );
}

export default observer(FinalDrawerContent);
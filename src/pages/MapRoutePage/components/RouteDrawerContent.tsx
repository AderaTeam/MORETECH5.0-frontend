import { Button, Stack, Text } from "@mantine/core";
import DrawerTitle from "../../../components/SwipeSheet/DrawerTitle";
import DrawerWrapper from "../../../components/Wrappers/DraweWrapper";
import { useContext } from "react";
import { Context } from "../../../main";
import RadioGroup from "./RadioGroup";
import { duration } from "../MapRoutePage";

interface props {
  close: (() => void),
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setTab: React.Dispatch<React.SetStateAction<boolean>>,
  duration: duration| undefined
}

const RouteDrawerContent = ({ value, setValue, setTab, duration}: props) => {
  const {MStore, UStore} = useContext(Context);

  return (
    <DrawerWrapper>
      <DrawerTitle close={undefined} title='Ваш маршрут' />
      <Stack spacing={18}>
        <Stack spacing={8}>
          <Text size={'md'} lh={'21px'} color="gray.2">Ваш адрес:</Text>
          <Text size={'md'} lh={'21px'} color="gray.0">{UStore.userAddress}</Text>
        </Stack>
        <Stack spacing={8}>
          <Text size={'md'} lh={'21px'} color="gray.2">Отделение банка:</Text>
          <Text size={'md'} lh={'21px'} color="gray.0">{MStore.office?.address}</Text>
        </Stack>
      </Stack>
      <RadioGroup duration={duration} value={value} setValue={setValue}/>
      <Button
        onClick={() => setTab(true)}
        color="brand.0" 
        size="md" 
        fullWidth 
        className="button"
      >
        Построить маршрут
      </Button>
    </DrawerWrapper>
  )
}

export default RouteDrawerContent;
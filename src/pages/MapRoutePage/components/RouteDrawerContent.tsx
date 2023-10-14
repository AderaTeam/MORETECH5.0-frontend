import { Stack, Text } from "@mantine/core";
import DrawerTitle from "../../../components/SwipeSheet/DrawerTitle";
import DrawerWrapper from "../../../components/Wrappers/DraweWrapper";
import { useContext } from "react";
import { Context } from "../../../main";
import RadioGroup from "./RadioGroup";

interface props {
  close: (() => void),
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}

const RouteDrawerContent = ({ value, setValue}: props) => {
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
      <RadioGroup value={value} setValue={setValue}/>
    </DrawerWrapper>
  )
}

export default RouteDrawerContent;
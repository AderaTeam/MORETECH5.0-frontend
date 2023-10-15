import { Button, Image, Stack, Title, Text, Box } from "@mantine/core";
import DrawerTitle from "../../../components/SwipeSheet/DrawerTitle";
import DrawerWrapper from "../../../components/Wrappers/DraweWrapper";
import { useNavigate } from "react-router";
import { MAPROUTE_ROUTE } from "../../../utils/const";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
import { IMapResponse } from "../../../models/response/IMapResponse";

import easy from '../../../assets/easy.svg';
import medium from '../../../assets/medium.svg';
import hard from '../../../assets/hard.svg';
import { $apiPython } from "../../../http";

interface props {
  close: (() => void),
  office: IMapResponse,
}

const OfficeDrawerContent = ({close, office}: props) => {
  const navigate = useNavigate();
  const {MStore} = useContext(Context);
  const [peopleCount, setPeopleCount] = useState<number>();

  useEffect(() => {
    if (office && office !== MStore.office) {
      MStore.setOffice(office);
    }
    try {
      $apiPython.get('/get_count_of_people').then(response => {
        setPeopleCount(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [])

  const icon : {[key: string] : string[] }= {
    'Низкая': [easy, 'focus.1','#E7FFEB', '4px'],
    'Средняя': [medium, 'focus.2','#FFF1DE', '10px'],
    'Высокая': [hard, 'focus.3','#FFE4E5', '16px'],
  };

  return (
    <DrawerWrapper>
      <DrawerTitle title={office.office.salePointName} close={close}/>
      <Stack spacing={16}>
        <Title color={'gray.0'} size={'h4'}>Общая информация</Title>
        <Stack spacing={8}>
          <Stack spacing={8}>
            <Text size={'md'} lh={'21px'} color="gray.2">Загруженность:</Text>
            {icon[office.crowd] && 
              <Box 
                p={'2px 6px'} 
                bg={icon[office.crowd][2]} 
                style={{
                  width: 'fit-content', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Image mr={4} height={4} width={icon[office.crowd][3]} className="image" src={icon[office.crowd][0]}/>
                  <Text color={icon[office.crowd][1]} size={'sm'} lh={'15px'}>
                    {office.crowd}
                  </Text>
              </Box>
            }
          </Stack>
          <Stack spacing={8}>
            <Text size={'md'} lh={'21px'} color="gray.2">Количество людей в отделении:</Text>
            <Text size={'md'} lh={'21px'} color="gray.0">{peopleCount}</Text>
          </Stack>
          <Stack spacing={8}>
            <Text size={'md'} lh={'21px'} color="gray.2">Адрес:</Text>
            <Text size={'md'} lh={'21px'} color="gray.0">{office.office.address}</Text>
          </Stack>
          <Stack spacing={8}>
            <Text size={'md'} lh={'21px'} color="gray.2">Наличие РКО:</Text>
            <Text size={'md'} lh={'21px'} color="gray.0">{office.office.rko}</Text>
          </Stack>
        </Stack>
      </Stack>
      <Button
        onClick={() => navigate(MAPROUTE_ROUTE, {state: 'multiRoute'})}
        color="brand.0" 
        size="md" 
        fullWidth 
        className="button"
      >
        Иду в это отделение
      </Button>
      <></>
    </DrawerWrapper>
  );
}

export default observer(OfficeDrawerContent);
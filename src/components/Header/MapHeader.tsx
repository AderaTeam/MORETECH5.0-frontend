import { ActionIcon, Flex, Text } from "@mantine/core";
import { IconChevronLeft, IconEdit } from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { useNavigate } from "react-router";

const MapHeader = () => {
  const {UStore} = useContext(Context);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (UStore.userLocation && !UStore.userAddress) {
      try {
        axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=5fff5614-b0c5-4970-b75d-28aa88c46171&format=json&geocode=${UStore.userLocation.longitude},${UStore.userLocation.latitude}`)
        .then(response => {
          UStore.setUserAddress(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.name)
        })
    } catch (error) {
        console.log(error)
    }
    }
  }, [])
  
  return (
    <Flex 
      p={16} 
      justify={'space-between'}
      align={'center'} 
      style={{
        background: 'white',
        borderRadius: '0 0 24px 24px', 
        boxShadow: '0px 0px 12px 12px rgba(0, 14, 65, 0.13)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <ActionIcon onClick={() => navigate('/')} size={'lg'} variant="transparent" radius="xs">
        <IconChevronLeft stroke={1.5} width={24} height={24} color="#ACB6C3"/>
      </ActionIcon>
      <Text size={'md'} lh={'21px'} color="gray.0">{UStore.userAddress}</Text>
      <ActionIcon onClick={() => navigate('/')} size={'lg'} variant="transparent" radius="xs">
        <IconEdit stroke={1.5} width={24} height={24} color="#ACB6C3"/>
      </ActionIcon>
    </Flex>
  );
}

export default observer(MapHeader);
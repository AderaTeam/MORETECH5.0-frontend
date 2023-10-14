import { useContext, useEffect, useState } from "react";
import DrawerTitle from "../SwipeSheet/DrawerTitle";
import DrawerWrapper from "../Wrappers/DraweWrapper";
import $api from "../../http";
import HomeServices from "../../pages/HomePage/components/HomeForm/HomeServices";
import { ActionIcon, Button, Flex, TextInput } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { Context } from "../../main";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { MAP_ROUTE } from "../../utils/const";

interface props {
  close: (() => void),
}
interface Services {
  [key: string] : string,
}

const HeaderDrawerContent = ({close}: props) => {
  const [userRole, setUserRole] = useState<string>('individual');
  const [services, setServices] = useState<Services[]>();
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [special, setSpecial] = useState<string[]>([]);
  const [address, setAddress] = useState<string>('');
  const { UStore, MStore } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectValue('');
    try {
      $api.get(`/data/${userRole}`, {}).then(response => {
        setServices(response.data);
      });
    } catch (error) {
      console.log(error)
    }
  }, [userRole]);

  useEffect(() => {
    if (address === UStore.userAddress) {

    }
  }, [address]) 

  const handleSearch = () => {
    if (address !== UStore.userAddress){
      try {
        axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=5fff5614-b0c5-4970-b75d-28aa88c46171&format=json&geocode=${UStore.userCity},${address}`)
        .then(response => {
          const result = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
          UStore.setUserLocation({longitude: result[0], latitude: result[1]});
          UStore.setUserAddress(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.name);
          try {
            $api.get(`/data/officeswithcriterias/?latitude=${UStore.userLocation?.latitude}&longitude=${UStore.userLocation?.longitude}&callButton=${special.includes('callButton')}&hasRamp=${special.includes('hasRamp')}&premium=${special.includes('premium')}&services=${selectValue}&userRole=${userRole}`)
            .then(response => {
              MStore.setOffices(response.data);
              navigate(MAP_ROUTE, {state: 'all'});
            });
          } catch (error) {
            console.log(error)
          }
        })
      } catch (error) {
        console.log(error)
      }
    } 
  }

  return (
    <DrawerWrapper>
      <DrawerTitle title="Поиск услуг рядом" close={close}/>
      <Flex justify={'space-between'} align={'center'}>
        <TextInput
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="ул. Менделеева 27"
          lh={'24px'}
          size="lg"
          type="text"
          radius="0.5rem"
          className='input'
        />
        <ActionIcon onClick={() => setAddress(UStore.userCurrentLocation?.address!)}  w={45} h={45} color="gray.5" variant="filled">
          <IconMapPin color="#0A2896" stroke={1.5} />
        </ActionIcon>
      </Flex>
      <HomeServices 
        services={services} 
        userRole={userRole} 
        setUserRole={setUserRole}
        setSelectValue={setSelectValue}
        selectValue={selectValue}
        special={special}
        setSpecial={setSpecial}
      />
      <Button
        onClick={handleSearch}
        color="brand.0" 
        size="md" 
        fullWidth 
        className="button"
      >
        Применить
      </Button>
    </DrawerWrapper>
  );
}

export default observer(HeaderDrawerContent);
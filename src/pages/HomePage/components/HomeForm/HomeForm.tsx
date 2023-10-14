import { Button, Stack } from "@mantine/core";
import TitleWrapper from "../../../../components/Wrappers/TitleWrapper";
import HomeServices from "./components/HomeServices";
import { useEffect, useState } from "react";
import $api from "../../../../http";
import { IconMapPin } from "@tabler/icons-react";

interface Services {
  [key: string] : string,
}

const HomeForm = () => {
  const [userRole, setUserRole] = useState<string>('individual');
  const [services, setServices] = useState<Services[]>();
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [special, setSpecial] = useState<string[]>([]);

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

  const handleSearch = () => {
    console.log({
      role: userRole, 
      special: special, 
      service: selectValue
    })
    /*try {
      $api.post(``, 
      {
        role: userRole, 
        special: special, 
        service: selectValue
      }).then(response => {
        console.log(response.data);
      });
    } catch (error) {
      console.log(error)
    }*/
  }

  return (
    <Stack style={{borderRadius: '32px'}} p={'32px 24px'} spacing={24} bg={'white.0'}>
      <TitleWrapper/>
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
        color="brand.0" 
        size="md" 
        fullWidth 
        className="button"
        rightIcon={<IconMapPin stroke={1.5}/>}
        onClick={handleSearch}  
      >
        Найти отделения
      </Button>
    </Stack>
  )
}

export default HomeForm;
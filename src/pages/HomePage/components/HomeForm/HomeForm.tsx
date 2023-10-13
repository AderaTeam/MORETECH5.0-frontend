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
  const [services, setServices] = useState<Services[]>()

  useEffect(() => {
    try {
      $api.post('', {}).then(response => {
        setServices(response.data);
      });
    } catch (error) {
      console.log(error)
    }
  }, [userRole])

  return (
    <Stack style={{borderRadius: '32px'}} p={'32px 24px'} spacing={24} bg={'white.0'}>
      <TitleWrapper/>
      <HomeServices userRole={userRole} setUserRole={setUserRole}/>
      <Button 
        color="brand.0" 
        size="md" 
        fullWidth 
        className="button"
        rightIcon={<IconMapPin stroke={1.5}/>}  
      >
        Найти отделения
      </Button>
    </Stack>
  )
}

export default HomeForm;
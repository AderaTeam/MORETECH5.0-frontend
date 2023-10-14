import { Button, Stack, Text } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import $api from "../../../../http";
import { useContext } from "react";
import { Context } from "../../../../main";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { MAP_ROUTE } from "../../../../utils/const";

const HomeMap = () => {
  const {MSore} = useContext(Context);
  const navigate = useNavigate();

  const handleSearch = () => {
    try {
      $api.get('/data/offices').then(response => {
        MSore.setOffices(response.data);
        navigate(MAP_ROUTE);
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Stack style={{borderRadius: '32px'}} p={'32px 24px'} spacing={24} bg={'white.0'}>
      <Button 
        color="gray.5" 
        size="md" 
        fullWidth 
        className="button"
        rightIcon={<IconExternalLink color="#0A2896" stroke={1.5}/>} 
        onClick={handleSearch}
      >
        <Text color="brand.0">Все отделения</Text>
      </Button>
    </Stack>
  );
}

export default observer(HomeMap);
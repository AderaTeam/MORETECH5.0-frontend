import { Divider, Flex, Stack, Title } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { MAP_ROUTE } from "../../utils/const";

interface titleProps {
  title: string;
  close: (() => void) | undefined;
}

const DrawerTitle = ({title, close}: titleProps) => {
  const navigate = useNavigate();

  return (
    <Stack style={close ? {cursor: 'pointer'} : {}} onClick={close} spacing={0}>
      <Divider mb={'24px'} size={'3px'} style={{alignSelf: 'center'}} w={80}/>
      {(!close) ? 
      (
        <Flex justify={'space-between'}>
          <Title size={'h3'} color="gray.0" fw={500}>
            {title}
          </Title>
          <IconX
            onClick={() => navigate(MAP_ROUTE, {state: 'all'})}
            style={{cursor: 'pointer'}} 
            stroke={1.5} 
            width={24} height={24} 
            color="#ACB6C3"
          />
        </Flex>
      ) :
      (
        <Title size={'h3'} color="gray.0" fw={500}>
          {title}
        </Title>
      )}
      
    </Stack>
  );
}

export default DrawerTitle;
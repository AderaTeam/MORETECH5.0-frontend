import { Button, Stack, Text } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const HomeMap = () => {

  return (
    <Stack style={{borderRadius: '32px'}} p={'32px 24px'} spacing={24} bg={'white.0'}>
      <Button 
        color="gray.5" 
        size="md" 
        fullWidth 
        className="button"
        rightIcon={<IconExternalLink color="#0A2896" stroke={1.5}/>}  
      >
        <Text color="brand.0">Все отделения</Text>
      </Button>
    </Stack>
  );
}

export default HomeMap;
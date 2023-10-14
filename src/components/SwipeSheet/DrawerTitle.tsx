import { Divider, Stack, Title } from "@mantine/core";

interface titleProps {
  title: string;
  close: (() => void);
}

const DrawerTitle = ({title, close}: titleProps) => {

  return (
    <Stack style={{cursor: 'pointer'}} onClick={close} spacing={0}>
      <Divider mb={'24px'} size={'3px'} style={{alignSelf: 'center'}} w={80}/>
      <Title size={'h3'} color="gray.0" fw={500}>
        {title}
      </Title>
    </Stack>
  );
}

export default DrawerTitle;
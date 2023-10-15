import { Accordion, Stack, Title } from "@mantine/core";

const AdminAccessibility = () => {

  return (
    <Stack style={{borderRadius: '32px'}} p={'26px 24px'} spacing={24} bg={'white.0'}>
      <Accordion>
        <Accordion.Item className="accordionType2" value="customization">
          <Accordion.Control className="test">
            <Title color="gray.0" size={'h4'}>
              Доступность
            </Title>
          </Accordion.Control>
          <Accordion.Panel>
            123
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

export default AdminAccessibility;
import { Accordion, Checkbox, Stack, Title } from "@mantine/core";

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
          <Checkbox.Group>
            <Stack mt={26} spacing={4}>
              <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="hasRamp" label="Наличие пандуса" />
              <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="premium" label="Зона премиального обслуживания" />
              <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="parking" label="Наличие парковки рядом" />
              <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="callButton" label="Вызвать персонал для помощи" />
            </Stack>
          </Checkbox.Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

export default AdminAccessibility;
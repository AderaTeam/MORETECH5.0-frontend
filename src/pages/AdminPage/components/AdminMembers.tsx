import { Accordion, Stack, TextInput, Title } from "@mantine/core";

const AdminMembers = () => {

  return (
    <Stack style={{borderRadius: '32px'}} p={'26px 24px'} spacing={24} bg={'white.0'}>
      <Accordion>
        <Accordion.Item className="accordionType2" value="customization">
          <Accordion.Control className="test">
            <Title color="gray.0" size={'h4'}>
              Сотрудники и метрики
            </Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack mt={26} spacing={16}>
              <TextInput
                placeholder="5 шт"
                label="Консультанты"
                lh={'24px'}
                size="lg"
                withAsterisk
                type="text"
                radius="0.5rem"
                className={'input2'}
              />
              <TextInput
                placeholder="2 шт"
                label="Главные менеджеры"
                lh={'24px'}
                size="lg"
                withAsterisk
                type="text"
                radius="0.5rem"
                className={'input2'}
              />
              <TextInput
                placeholder="10 мин"
                label="Средняя скорость обслуживания физ. лица"
                lh={'24px'}
                size="lg"
                withAsterisk
                type="text"
                radius="0.5rem"
                className={'input2'}
              />
              <TextInput
                placeholder="15 мин"
                label="Средняя скорость обслуживания юр. лица"
                lh={'24px'}
                size="lg"
                withAsterisk
                type="text"
                radius="0.5rem"
                className={'input2'}
              />
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

export default AdminMembers;
import { Accordion, Checkbox, SegmentedControl, Select, Stack } from "@mantine/core";

interface servicesProps {
  userRole: string,
  setUserRole: React.Dispatch<React.SetStateAction<string>>
}

const HomeServices = ({userRole, setUserRole}: servicesProps) => {

  return (
    <Stack spacing={16}>
      <SegmentedControl
        radius={'14px'}
        fullWidth
        className="segment"
        value={userRole}
        onChange={setUserRole}
        size="md"
        bg={'gray.5'}
        data={[
          { label: 'Физ. лицо', value: 'individual' },
          { label: 'Организация', value: 'organization' },
        ]}
      />
      <Select
        className="input"
        label='Нужная услуга'
        placeholder="Оформление карты"
        searchable
        data={['1', '2']}
        size="md"
      />
      <Accordion>
        <Accordion.Item className="accordion" value="customization">
          <Accordion.Control className="test">Особые услуги</Accordion.Control>
          <Accordion.Panel>
            <Checkbox.Group
              defaultValue={['react']}
            >
              <Stack spacing={4}>
                <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="react" label="Пандус" />
                <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="svelte" label="Зона премиального обслуживания" />
                <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="ng" label="Парковка" />
              </Stack>
            </Checkbox.Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

export default HomeServices;
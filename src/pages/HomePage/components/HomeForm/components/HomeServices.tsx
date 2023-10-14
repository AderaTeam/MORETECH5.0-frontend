import { Accordion, Checkbox, SegmentedControl, Select, Stack } from "@mantine/core";

interface servicesProps {
  userRole: string,
  setUserRole: React.Dispatch<React.SetStateAction<string>>,
  services: {[key: string]: string}[] | undefined,
  setSelectValue: React.Dispatch<React.SetStateAction<string | null>>,
  selectValue: string | null,
  special: string[],
  setSpecial: React.Dispatch<React.SetStateAction<string[]>>,
}

const HomeServices = ({
  userRole, 
  setUserRole, 
  services, 
  setSelectValue, 
  selectValue,
  setSpecial,
  special,
}: servicesProps) => {
  const selectData = services?.map(item => Object.keys(item)[0]);

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
        className="select"
        label='Нужная услуга'
        placeholder="Оформление карты"
        searchable
        data={selectData ? selectData : []}
        size="md"
        onChange={setSelectValue}
        value={selectValue}
      />
      <Accordion>
        <Accordion.Item className="accordion" value="customization">
          <Accordion.Control className="test">Особые услуги</Accordion.Control>
          <Accordion.Panel>
            <Checkbox.Group
              value={special}
              onChange={setSpecial}
            >
              <Stack spacing={4}>
                <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="ramp" label="Наличие пандуса" />
                <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="premium" label="Зона премиального обслуживания" />
                <Checkbox style={{margin: '8px 0'}} className="checkbox" h={20} color="brand.0" value="parking" label="Парковка" />
              </Stack>
            </Checkbox.Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

export default HomeServices;
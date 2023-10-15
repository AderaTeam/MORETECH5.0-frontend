import { SegmentedControl, Select, Stack } from "@mantine/core";
import TitleWrapper from "../../../components/Wrappers/TitleWrapper";

interface props {
  bank: string | null,
  setBank:  React.Dispatch<React.SetStateAction<string | null>>
}

const AdminControll = ({bank, setBank}: props) => {

  return (
    <Stack style={{borderRadius: '32px'}} p={'32px 24px'} spacing={24} bg={'white.0'}>
      <TitleWrapper/>
      <Stack spacing={16}>
        <SegmentedControl
          radius={'14px'}
          fullWidth
          className="segment"
          size="md"
          bg={'gray.5'}
          defaultValue="bank"
          data={[
            { label: 'Отделение', value: 'bank' },
            { label: 'Банкомат', value: 'terminal', disabled: true },
          ]}
        />
        <Select
          className="select"
          label='Отделение'
          placeholder="ул. Мира, 20"
          searchable
          data={[]}
          size="md"
          onChange={setBank}
          value={bank}
        />
      </Stack>
    </Stack>
  );
}

export default AdminControll;
import { Flex, Radio, Stack, Text, ThemeIcon} from "@mantine/core";
import { IconBusStop, IconCar, IconWalk } from "@tabler/icons-react";
import { duration } from "../MapRoutePage";

interface props {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  duration: duration | undefined
}

const RadioGroup = ({value, setValue, duration}: props) => {

  return (
    <Radio.Group value={value} onChange={setValue}>
      <Stack spacing={14}>
        <Flex justify={'space-between'} align={'center'}>
          <Flex gap={12} align={'center'}>
            <ThemeIcon h={48} w={48} color="gray.5">
              <IconWalk stroke={1.5} color="#0A2896"/>
            </ThemeIcon>
            <Stack spacing={2}>
              <Text size={'md'} lh={'21px'} color="gray.2">Пешком</Text>
              <Text size={'md'} lh={'21px'} color="gray.0">{duration ? duration['walk'] ? duration['walk'] : '-' : '-'}</Text>
            </Stack>
          </Flex>
          <Radio className="radio" color="brand.0" value="walk" />
        </Flex>
        <Flex justify={'space-between'} align={'center'}>
          <Flex gap={12} align={'center'}>
            <ThemeIcon h={48} w={48} color="gray.5">
              <IconCar stroke={1.5} color="#0A2896"/>
            </ThemeIcon>
            <Stack spacing={2}>
              <Text size={'md'} lh={'21px'} color="gray.2">На машине</Text>
              <Text size={'md'} lh={'21px'} color="gray.0">{duration ? duration['car'] ? duration['car'] : '-' : '-'}</Text>
            </Stack>
          </Flex>
          <Radio className="radio" color="brand.0" value="car" />
        </Flex>
        <Flex justify={'space-between'} align={'center'}>
          <Flex gap={12} align={'center'}>
            <ThemeIcon h={48} w={48} color="gray.5">
              <IconBusStop stroke={1.5} color="#0A2896"/>
            </ThemeIcon>
            <Stack spacing={2}>
              <Text size={'md'} lh={'21px'} color="gray.2">На общественном транспорте</Text>
              <Text size={'md'} lh={'21px'} color="gray.0">{duration ? duration['bus'] ? duration['bus'] : '-' : '-'}</Text>
            </Stack>
          </Flex>
          <Radio className="radio" color="brand.0" value="bus" />
        </Flex>
      </Stack>
    </Radio.Group>
  );
}

export default RadioGroup;
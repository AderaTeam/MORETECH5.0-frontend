import { ActionIcon, Box, Divider, Flex, Image, Stack, Text } from "@mantine/core";
import { IMap } from "../../../models/IMap";
import { IconChevronRight } from "@tabler/icons-react";
import ymaps from "yandex-maps";

import easy from '../../../assets/easy.svg';
import medium from '../../../assets/medium.svg';
import hard from '../../../assets/hard.svg';
import { useYMaps } from "@pbe/react-yandex-maps";
import { useEffect } from "react";

interface oficceProp {
  office: IMap
}

const OfficeItem = ({office}: oficceProp) => {
  const icon = {
    'easy': easy,
    'medium': medium,
    'hard': hard,
  };
  const ymaps = useYMaps(['Map']);


  return (
    <Stack spacing={11}>
      <Flex align={'center'} justify={'space-between'}>
        <Stack spacing={2}>
          <Box 
            p={'2px 6px'} 
            bg={'#E7FFEB'} 
            style={{
              width: 'fit-content', 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
              <Image mr={4} height={4} className="image" src={easy}/>
              <Text color="focus.1" size={'sm'} lh={'15px'}>
                Низкая
              </Text>
          </Box>
          <Text w={271} color="gray.0" size={'md'} lh={'21px'}>
            {office.salePointName}
          </Text>
          <Text color="gray.2" size={'sm'} lh={'15px'}>
            {office.distance} метров
          </Text>
        </Stack>
        <ActionIcon size={'md'} color="gray.5" variant="filled">
          <IconChevronRight color="#ACB6C3" stroke={1.5} />
        </ActionIcon>
      </Flex>
      <Divider size={'1px'} w={'100%'} color="gray.4" style={{alignSelf: 'center'}}/>
    </Stack>  
  );
}

export default OfficeItem;
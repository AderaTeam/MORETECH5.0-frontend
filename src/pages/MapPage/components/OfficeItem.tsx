import { ActionIcon, Box, Divider, Flex, Image, Stack, Text } from "@mantine/core";
import { IMap } from "../../../models/IMap";
import { IconChevronRight } from "@tabler/icons-react";

import easy from '../../../assets/easy.svg';
import medium from '../../../assets/medium.svg';
import hard from '../../../assets/hard.svg';
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
interface oficceProp {
  office: IMap,
  ymaps: any,
  onClose?: (() => void),
  handleCheckInfo?: ((office: IMap) => void)
}

const OfficeItem = ({office, ymaps, handleCheckInfo}: oficceProp) => {
  const {UStore, MStore} = useContext(Context);
  const [distance, setDistance] = useState();

  const icon = {
    'easy': easy,
    'medium': medium,
    'hard': hard,
  };

  useEffect(() => {
    const data = ymaps.panorama.Base.createPanorama({
      angularBBox: [],
      position: [],
      tilesLevels: [],
      tileSize: []
    }).getCoordSystem().getDistance([office.longitude, office.latitude], [
      UStore.userLocation?.longitude!, UStore.userLocation?.latitude!
    ]);
    setDistance(data)
  }, [])

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
            {distance && Math.trunc(distance)} метров
          </Text>
        </Stack>
        {handleCheckInfo &&
          <ActionIcon 
            onClick={() => {
              MStore.setMapCenterLocation({latitude: +office.latitude, longitude: +office.longitude})
              handleCheckInfo(office)
            }}  
            size={'md'} 
            color="gray.5" variant="filled">
            <IconChevronRight color="#ACB6C3" stroke={1.5} />
          </ActionIcon>
        }
      </Flex>
      <Divider size={'1px'} w={'100%'} color="gray.4" style={{alignSelf: 'center'}}/>
    </Stack>  
  );
}

export default OfficeItem;
import {Burger, Image, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../assets/logo.svg';
import { useLocation } from 'react-router';
import { MAP_ROUTE } from '../../utils/const';
import MapHeader from './MapHeader';

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();

  if (location.pathname === MAP_ROUTE) {
    return <MapHeader/>;
  }

  return (
    <Flex bg={'white'} p={16} justify={'space-between'}>
      <Image width={68} src={logo}/>
      <Burger opened={opened} onClick={toggle} size={'sm'}/>
    </Flex>
  );
}
import {Burger, Image, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../assets/logo.svg';

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Flex bg={'white'} p={16} justify={'space-between'}>
      <Image width={68} src={logo}/>
      <Burger opened={opened} onClick={toggle} size={'sm'}/>
    </Flex>
  );
}
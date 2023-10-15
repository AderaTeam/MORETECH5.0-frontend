import {Burger, Image, Flex } from '@mantine/core';
import logo from '../../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router';
import { MAP_ROUTE } from '../../utils/const';
import MapHeader from './MapHeader';

interface props {
  opened: boolean,
  toggle: () => void
}

export function HeaderSimple({opened, toggle}: props) {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === MAP_ROUTE) {
    return <MapHeader/>;
  }

  return (
    <Flex bg={'white'} p={16} justify={'space-between'}>
      <Image width={68} src={logo}/>
      <Burger opened={opened} onClick={() => {
        if (!opened) {
          toggle(); 
          navigate('/login/button');
        } else {
          toggle();
          navigate('/')
        }
        }} 
        size={'sm'}
      />
    </Flex>
  );
}
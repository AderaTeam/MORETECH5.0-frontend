import { Context } from "../../main";
import { Button, Flex, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { createStyles } from '@mantine/styles'
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = createStyles((_theme: any) => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    background: '#f6f6f6'
  },
  input: {
    width: '100%',
    label: {
      marginBottom: '8px',
    }
  },
  radio: {
    label: {
      paddingLeft: '8px',
      fontSize: '16px'
    }
  }
}));

const AuthPage = observer(function() {
  const { UStore } = useContext(Context);
  const location = useLocation();
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleAuth = async () => {
    if (location.pathname === '/login') { 
      await UStore.login(username, password)
    } else {
      await UStore.registration(username, password)
    }
    if (UStore.isAuth) {
      navigate('/admin')
    }
  };

  if (UStore.isLoading) {
    return (
      <div>Загрузка...</div>
      );
  }

  return(
    <Flex className={classes.wrapper} align="top" justify="center">
      <Flex mt={'20px'} >
        <Stack align="center" spacing={10}>
          <Title style={{alignSelf: 'flex-start'}} size="h3">{location.pathname === '/login' ? 'Вход' : 'Регистрация'}</Title>
          <Stack spacing={32}>
            <Stack spacing={24} w={308}>
              <Stack spacing={16} align="center">
              <TextInput
                placeholder="Иванов Иван"
                label="Фамилия Имя"
                lh={'24px'}
                size="lg"
                withAsterisk
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                radius="0.5rem"
                className={classes.input}
              />
              <PasswordInput
                placeholder="Пароль"
                label="Пароль"
                lh={'24px'}
                size="lg"
                withAsterisk
                value={password}
                onChange={e => setPassword(e.target.value)}
                radius="0.5rem"
                className={classes.input}
              />
              </Stack>
              <Button 
                fz='lg' 
                className="button"
                fullWidth
                h={51} 
                color="brand.0"
                disabled={
                  location.pathname === '/login'  
                  ? (username && password) ? false : true
                  : (password && username) ? false : true
                }
                onClick={handleAuth}
              >
                {location.pathname === '/login' ? 'Вход' : 'Регистрация'}
              </Button>
            </Stack>
            <Flex gap={4} justify={'center'}>
              <Text color="gray.9" lh={'27px'} size="lg">
                {location.pathname === '/login' ? 'Нет аккаунта?' : 'Есть аккаунт?'}
              </Text>
              <NavLink to={location.pathname === '/login' ? '/registration' : '/login'}>
                <Text color="brand.0" lh={'27px'} size="lg">
                  {location.pathname === '/login' ? 'Зарегистрироваться' : 'Войти'}
                </Text>
              </NavLink>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
});

export default AuthPage;
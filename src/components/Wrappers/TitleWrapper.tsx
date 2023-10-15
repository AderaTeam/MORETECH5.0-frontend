import { useLocation } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../utils/routes";
import { Flex, Title } from "@mantine/core";

const TitleWrapper = () => {
  const location = useLocation();
  const title = publicRoutes.find(item => item.path === location.pathname)?.title! || 
  authRoutes.find(item => item.path === location.pathname)?.title!;
  
  if (title !== 'Id') return (
    <Flex gap={24} align={'center'}>
      <Title color="gray.0" fw={500} size={'h2'}>{title}</Title>
    </Flex>
  );
};

export default TitleWrapper;
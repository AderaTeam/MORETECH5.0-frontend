import { Stack } from "@mantine/core";

type Props = {
	children?: React.ReactNode[];
};

const Wrapper = ({children} : Props) => {

  return (
    <Stack style={{height: '100vh'}} spacing={8} pt={8} bg={'#f6f6f6'}>
      <Stack>
          {children ? children[0] : <></>}
        </Stack>
        <Stack>
          {children ? children[1] : <></>}
        </Stack>
    </Stack>
  );
}

export default Wrapper;
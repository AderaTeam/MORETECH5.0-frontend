import { Stack } from "@mantine/core";

type Props = {
	children?: React.ReactNode[];
};

const DrawerWrapper = ({children}: Props) => {

  return (
    <Stack spacing={28}>
      <Stack>
          {children ? children[0] : <></>}
        </Stack>
        <Stack>
          {children ? children[1] : <></>}
        </Stack>
        <Stack>
          {children ? children[2] : <></>}
        </Stack>
    </Stack>
  );
}

export default DrawerWrapper;
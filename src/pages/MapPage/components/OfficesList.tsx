import { useContext } from "react";
import { Context } from "../../../main";
import { Stack } from "@mantine/core";
import OfficeItem from "./OfficeItem";


const OfficesList = () => {
  const {MSore} = useContext(Context);

  return (
    <Stack spacing={12}>
      {MSore.offices?.map(office => (
        <OfficeItem office={office}/>
      ))}
    </Stack>
  );
}

export default OfficesList;
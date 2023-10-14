import { useContext } from "react";
import { Context } from "../../../main";
import { Stack } from "@mantine/core";
import OfficeItem from "./OfficeItem";
import { useYMaps, withYMaps } from "@pbe/react-yandex-maps";

const OfficesList = () => {
  const {MSore} = useContext(Context);
  const Item = withYMaps(OfficeItem, true)
  const ymaps = useYMaps();

  return (
    <Stack spacing={12}>
      {MSore.offices?.map((office) => {
        if (office.id >= 279 && office.id < 284) {
          return <Item key={office.id} office={office} ymaps={ymaps}/>
        }
      })}
    </Stack>
  );
}

export default OfficesList;
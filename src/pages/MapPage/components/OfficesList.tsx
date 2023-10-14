import { useContext } from "react";
import { Context } from "../../../main";
import { Stack } from "@mantine/core";
import OfficeItem from "./OfficeItem";
import { useYMaps, withYMaps } from "@pbe/react-yandex-maps";
import { IMap } from "../../../models/IMap";

interface props {
  close: (() => void),
  handleCheckInfo: ((office: IMap) => void),
}

const OfficesList = ({close, handleCheckInfo}: props) => {
  const {MStore} = useContext(Context);
  const Item = withYMaps(OfficeItem, true)
  const ymaps = useYMaps();

  return (
    <Stack spacing={12}>
      {MStore.offices?.map((office) => {
        return <Item handleCheckInfo={handleCheckInfo} onClose={close} key={office.id} office={office} ymaps={ymaps}/>
      })}
    </Stack>
  );
}

export default OfficesList;
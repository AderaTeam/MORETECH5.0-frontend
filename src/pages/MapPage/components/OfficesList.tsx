import { useContext } from "react";
import { Context } from "../../../main";
import { Stack } from "@mantine/core";
import OfficeItem from "./OfficeItem";
import { useYMaps, withYMaps } from "@pbe/react-yandex-maps";
import { IMapResponse } from "../../../models/response/IMapResponse";

interface props {
  close: (() => void),
  handleCheckInfo: ((office: IMapResponse) => void),
}

const OfficesList = ({close, handleCheckInfo}: props) => {
  const {MStore} = useContext(Context);
  const Item = withYMaps(OfficeItem, true)
  const ymaps = useYMaps();

  return (
    <Stack spacing={12}>
      {MStore.offices?.map((office) => {
        return <Item 
                  handleCheckInfo={handleCheckInfo} 
                  onClose={close} 
                  key={office.office.id} 
                  office={office.office} ymaps={ymaps}
                  crowd={office.crowd}
                />
      })}
    </Stack>
  );
}

export default OfficesList;
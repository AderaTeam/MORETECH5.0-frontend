import { Button } from "@mantine/core";
import DrawerTitle from "../../../components/SwipeSheet/DrawerTitle";
import DrawerWrapper from "../../../components/Wrappers/DraweWrapper";
import { IMap } from "../../../models/IMap";
import { useNavigate } from "react-router";
import { MAPROUTE_ROUTE } from "../../../utils/const";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../../../main";

interface props {
  close: (() => void),
  office: IMap,
}

const OfficeDrawerContent = ({close, office}: props) => {
  const navigate = useNavigate();
  const {MStore} = useContext(Context);

  useEffect(() => {
    if (office && office !== MStore.office) {
      MStore.setOffice(office);
    }
  }, [])

  return (
    <DrawerWrapper>
      <DrawerTitle title={office.salePointName} close={close}/>
      <Button
        onClick={() => navigate(MAPROUTE_ROUTE, {state: 'multiRoute'})}
        color="brand.0" 
        size="md" 
        fullWidth 
        className="button"
      >
        Иду в это отделение
      </Button>
      <></>
    </DrawerWrapper>
  );
}

export default observer(OfficeDrawerContent);
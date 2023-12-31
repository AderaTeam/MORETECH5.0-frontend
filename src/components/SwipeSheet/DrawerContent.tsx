import { IMapResponse } from "../../models/response/IMapResponse";
import OfficesList from "../../pages/MapPage/components/OfficesList";
import DrawerWrapper from "../Wrappers/DraweWrapper";
import DrawerTitle from "./DrawerTitle";

interface props {
  close: (() => void),
  handleCheckInfo: ((office: IMapResponse) => void)
}

const DrawerContent = ({close, handleCheckInfo}: props ) => {

  return (
    <DrawerWrapper>
      <DrawerTitle title={'Отделения и банкоматы'} close={close}/>
      <OfficesList handleCheckInfo={handleCheckInfo} close={close}/>
    </DrawerWrapper>
  );
}

export default DrawerContent;
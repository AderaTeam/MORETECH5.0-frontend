import OfficesList from "../../pages/MapPage/components/OfficesList";
import DrawerWrapper from "../Wrappers/DraweWrapper";
import DrawerTitle from "./DrawerTitle";

interface props {
  close: (() => void),
}

const DrawerContent = ({close}: props ) => {

  return (
    <DrawerWrapper>
      <DrawerTitle title={'Отделения и банкоматы'} close={close}/>
      <OfficesList/>
    </DrawerWrapper>
  );
}

export default DrawerContent;
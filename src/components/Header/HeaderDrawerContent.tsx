import DrawerTitle from "../SwipeSheet/DrawerTitle";
import DrawerWrapper from "../Wrappers/DraweWrapper";

interface props {
  close: (() => void),
}

const HeaderDrawerContent = ({close}: props) => {

  return (
    <DrawerWrapper>
      <DrawerTitle title="Поиск услуг рядом" close={close}/>
      <></>
    </DrawerWrapper>
  );
}

export default HeaderDrawerContent;
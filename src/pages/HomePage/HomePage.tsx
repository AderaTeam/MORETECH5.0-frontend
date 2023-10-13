import { observer } from "mobx-react-lite";
import Wrapper from "../../components/Wrappers/Wrapper";
import HomeForm from "./components/HomeForm/HomeForm";

const HomePage = () => {

  return (
    <Wrapper>
      <HomeForm/>
      <></>
    </Wrapper>
  );
}

export default observer(HomePage);
import { observer } from "mobx-react-lite";
import Wrapper from "../../components/Wrappers/Wrapper";
import HomeForm from "./components/HomeForm/HomeForm";
import HomeMap from "./components/HomeMap/HomeMap";

const HomePage = () => {

  return (
    <Wrapper>
      <HomeForm/>
      <HomeMap/>
    </Wrapper>
  );
}

export default observer(HomePage);
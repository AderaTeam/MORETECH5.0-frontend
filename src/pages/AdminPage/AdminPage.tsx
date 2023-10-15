import { useState } from "react";
import Wrapper from "../../components/Wrappers/Wrapper";
import AdminControll from "./components/AdminControll";
import AdminMembers from "./components/AdminMembers";
import AdminIndividual from "./components/AdminIndividual";
import AdminOrganisation from "./components/AdminOrganisation";
import AdminAccessibility from "./components/AdminAccessibility";

const AdminPage = () => {
  const [bank, setBank] = useState<string | null>('');

  return (
    <Wrapper>
      <AdminControll setBank={setBank} bank={bank}/>
      <AdminMembers/>
      <AdminAccessibility/>
      <AdminIndividual/>
      <AdminOrganisation/>
      <></>
    </Wrapper>
  );
}

export default AdminPage;
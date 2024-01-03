import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";

export default function EditProfile() {
  return (
    <Layout>
      <Header title="Edit Profile" buttonText="Save"></Header>
      <LayoutContent padding={true}></LayoutContent>
    </Layout>
  );
}

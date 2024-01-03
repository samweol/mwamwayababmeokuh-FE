import BottomTab from "../../../components/BottomTab/BottomTab";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import UserInfo from "../components/UserInfo/UserInfo";
import Post from "../../../components/Post/Post";
import ProfileTab from "../components/ProfileTab/ProfileTab";

export default function Profile() {
  return (
    <Layout>
      <Header title="삼월" />
      <LayoutContent>
        <UserInfo />
        <ProfileTab />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

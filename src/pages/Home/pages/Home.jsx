import BottomTab from "../../../components/BottomTab/BottomTab";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Post from "../../../components/Post/Post";

export default function Home() {
  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <Post />
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

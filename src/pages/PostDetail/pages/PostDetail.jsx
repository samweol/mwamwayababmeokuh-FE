import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import Post from "../../../components/Post/Post";
import BottomTab from "../../../components/BottomTab/BottomTab";

export default function PostDetail() {
  return (
    <Layout>
      <Header title="Post" />
      <LayoutContent>
        <Post />
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

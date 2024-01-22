import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import Post from "../../../components/Post/Post";
import BottomTab from "../../../components/BottomTab/BottomTab";
import { useLocation } from "react-router-dom";

export default function PostDetail() {
  const location = useLocation();
  const { post } = location.state;
  return (
    <Layout>
      <Header title="Post" />
      <LayoutContent>
        <Post post={post} />
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import BottonTab from "../../../components/BottomTab/BottomTab";
import Header from "../../../components/Header/Header";
import Post from "../../../components/Post/Post";
import { useEffect, useState } from "react";
import { postData } from "../../../mock/index";
export default function Like() {
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    setLikeList(postData);
  }, [likeList]);

  return (
    <Layout>
      <Header title="Like" />
      <LayoutContent>
        {likeList.map((item) => (
          <Post key={item.key} post={item} />
        ))}
      </LayoutContent>
      <BottonTab />
    </Layout>
  );
}

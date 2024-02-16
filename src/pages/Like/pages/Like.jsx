import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import BottonTab from "../../../components/BottomTab/BottomTab";
import Header from "../../../components/Header/Header";
import Post from "../../../components/Post/Post";
import { useEffect, useState } from "react";
import { api } from "../../../api/baseURL";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../../recoil/atom";
import Empty from "../components/Empty/Empty";
export default function Like() {
  const user = useRecoilValue(userState);
  const setIsLoading = useSetRecoilState(loadingState);

  const [likeList, setLikeList] = useState([]);

  const likePostComponent = likeList?.map((item) => (
    <Post key={item.pid} post={item} />
  ));

  const fetchLikePost = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get("/boards/posts/liked-posts", {
        params: {
          uid: user.uid,
        },
      });

      console.log("🌟좋아요 누른 글 조회 성공🌟");
      setLikeList(resp.data);
    } catch (err) {
      console.error(err);
      console.log("🔥좋아요 누른 글 조회 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLikePost();
  }, []);

  return (
    <Layout>
      <Header title="Like" />
      <LayoutContent>
        {likeList.length ? (
          likePostComponent
        ) : (
          <Empty>아직 좋아요 누른 글이 없습니다.</Empty>
        )}
      </LayoutContent>
      <BottonTab />
    </Layout>
  );
}

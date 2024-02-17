import BottomTab from "../../../components/BottomTab/BottomTab";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Post from "../../../components/Post/Post";
import WriteButton from "../components/WriteButton/WriteButton";
import { menuData } from "../../../mock";
import { useEffect, useState } from "react";
import BottomModal from "../../../components/BottomModal/BottomModal";
import Modal from "../../../components/Modal/Modal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../../recoil/atom";
import { api } from "../../../api/baseURL";
import Loading from "../../../components/Loading/Loading";
import ArtistBadgeList from "../components/ArtistBadge/ArtistBadgeList";

export default function Home() {
  const [postList, setPostList] = useState([]);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useRecoilValue(userState);
  const setLoading = useSetRecoilState(loadingState);

  const aid = user.artistDTOList.reduce((acc, cur) => {
    return acc + cur.aid + ",";
  }, "");

  const closeModal = () => {
    setIsBottomModalOpen(false);
  };

  /**
   * 홈 피드화면 게시글 불러오는 api
   */
  const fetchPost = async () => {
    try {
      setLoading(true);

      const resp = await api.get(`/boards/posts`, {
        params: {
          aidList: aid,
        },
      });
      setPostList(resp.data);
      console.log("🌟게시글 불러오기 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 불러오기 실패🔥");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <ArtistBadgeList />
        {postList?.map((item) => (
          <Post
            key={item.pid}
            post={item}
            line={true}
            onClickMoreButton={() => {
              setIsBottomModalOpen(true);
            }}
          />
        ))}
        <WriteButton />
      </LayoutContent>
      {isBottomModalOpen && (
        <BottomModal menuList={menuData} closeModal={closeModal} />
      )}
      {isModalOpen && <Modal />}
      <BottomTab />
      <Loading />
    </Layout>
  );
}

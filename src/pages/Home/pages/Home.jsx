import BottomTab from "../../../components/BottomTab/BottomTab";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Post from "../../../components/Post/Post";
// import ArtistBadge from "../components/ArtistBadge/ArtistBadge";
import WriteButton from "../components/WriteButton/WriteButton";
import { postData, menuData } from "../../../mock";
import { useEffect, useState } from "react";
import BottomModal from "../../../components/BottomModal/BottomModal";
import Modal from "../../../components/Modal/Modal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";

export default function Home() {
  const [postList, setPostList] = useState([]);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useRecoilValue(userState);

  const closeModal = () => {
    setIsBottomModalOpen(false);
  };

  useEffect(() => {
    setPostList(postData);
  }, [postList]);
  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        {/* <ArtistBadge artist="레드벨벳" /> */}
        {postList.map((item) => (
          <Post
            key={item.key}
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
    </Layout>
  );
}

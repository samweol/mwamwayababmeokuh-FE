import BottomTab from "../../../components/BottomTab/BottomTab";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Post from "../../../components/Post/Post";
import WriteButton from "../components/WriteButton/WriteButton";
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
  const [selected, setSelected] = useState([]);
  const [postData, setPostData] = useState({
    postId: "",
    writer: "",
  });
  const [modal, setModal] = useState({
    modalHeader: "",
    modalContent: "",
    modalLeftBtn: {
      text: "",
      onClickHandler: () => {},
    },
    modalRightBtn: {
      text: "",
      onClickHandler: () => {},
    },
  });

  const user = useRecoilValue(userState);
  const setIsLoading = useSetRecoilState(loadingState);

  /**
   * 아티스트 필터링
   */
  const filterArtist = (artist) => {
    if (selected.includes(artist)) {
      const tempArr = selected.filter((item) => item !== artist);
      setSelected(tempArr);
    } else {
      setSelected([...selected, artist]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**
   * 게시글 삭제 api
   */
  const deletePost = async () => {
    try {
      setIsLoading(true);
      await api.delete(`/boards/posts/${postData.postId}`);
      setIsModalOpen(false);
      console.log("🌟게시글 삭제 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 삭제 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 게시글 신고 api
   */
  const reportPost = async () => {
    try {
      await api.post("/boards/posts/report", {
        reporter: user.uid,
        reportedPost: postData.postId,
        reason: "",
      });
      console.log("🌟게시글 신고 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 신고 실패🔥");
    }
  };

  const isSameUser = Boolean(postData.writer == user.uid);
  const menuData = isSameUser
    ? [
        {
          key: 1,
          label: "삭제하기",
          onClickHandler: () => {
            setIsModalOpen(true);
            setModal({
              modalHeader: "삭제",
              modalContent: "게시글을 삭제하시겠습니까?",
              modalLeftBtn: {
                text: "취소",
                onClickHandler: closeModal,
              },
              modalRightBtn: {
                text: "삭제",
                onClickHandler: deletePost,
              },
            });
          },
        },
        {
          key: 2,
          label: "수정하기",
          onClickHandler: () => {
            setIsModalOpen(true);
            setModal({
              modalHeader: "수정",
              modalContent: "게시글을 수정하시겠습니까?",
              modalLeftBtn: {
                text: "취소",
                onClickHandler: closeModal,
              },
              modalRightBtn: {
                text: "수정",
                onClickHandler: () => {},
              },
            });
          },
        },
      ]
    : [
        {
          key: 1,
          label: "신고하기",
          onClickHandler: () => {
            setIsModalOpen(true);
            setModal({
              modalHeader: "신고",
              modalContent: "게시글을 신고하시겠습니까?",
              modalLeftBtn: {
                text: "취소",
                onClickHandler: closeModal,
              },
              modalRightBtn: {
                text: "신고",
                onClickHandler: reportPost,
              },
            });
          },
        },
      ];
  let aid = "";
  if (selected.length) {
    aid = selected.reduce((acc, cur) => {
      return acc + cur.aid + ",";
    }, "");
  } else {
    aid = user.artistDTOList.reduce((acc, cur) => {
      return acc + cur.aid + ",";
    }, "");
  }

  const closeBottomModal = () => {
    setIsBottomModalOpen(false);
  };

  /**
   * 홈 피드화면 게시글 불러오는 api
   */
  const fetchPost = async () => {
    try {
      setIsLoading(true);

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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [selected]);

  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <ArtistBadgeList selected={selected} onClickHandler={filterArtist} />
        {postList?.map((item) => (
          <Post
            key={item.pid}
            post={item}
            line={true}
            onClickMoreButton={() => {
              setIsBottomModalOpen(true);
              setPostData({ writer: item.writer, postId: item.pid });
            }}
          />
        ))}
        <WriteButton />
      </LayoutContent>
      {isBottomModalOpen && (
        <BottomModal menuList={menuData} closeModal={closeBottomModal} />
      )}
      {isModalOpen && (
        <Modal
          modalHeader={modal.modalHeader}
          modalContent={modal.modalContent}
          modalLeftBtn={modal.modalLeftBtn}
          modalRightBtn={modal.modalRightBtn}
        />
      )}
      <BottomTab />
      <Loading />
    </Layout>
  );
}

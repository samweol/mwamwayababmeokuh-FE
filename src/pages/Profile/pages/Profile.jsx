import BottomTab from "../../../components/BottomTab/BottomTab";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import UserInfo from "../components/UserInfo/UserInfo";
import Post from "../../../components/Post/Post";
import ProfileTab from "../components/ProfileTab/ProfileTab";
import { useEffect, useState } from "react";
import { api } from "../../../api/baseURL";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../../recoil/atom";
import { useParams } from "react-router-dom";
import BottomModal from "../../../components/BottomModal/BottomModal";
import Modal from "../../../components/Modal/Modal";
import useNavigatePage from "../../../hooks/useNavigatePage";
import Loading from "../../../components/Loading/Loading";

export default function Profile() {
  const [userPostList, setUserPostList] = useState([]);
  const [tabSelected, setTabSelected] = useState("Post");
  const [likeList, setLikeList] = useState([]);
  const [userData, setUserData] = useState({});
  const [isBottomModalOpened, setIsBottomModalOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const setIsLoading = useSetRecoilState(loadingState);
  const [user, setUser] = useRecoilState(userState);

  const params = useParams();

  const { navigatePage } = useNavigatePage();

  console.log(userData);

  /**
   * 로그아웃 api
   */
  const signout = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get("/auth/logout");
      console.log("🌟로그아웃 성공🌟");
      setUser({});
      localStorage.removeItem("recoil-persist");
      navigatePage("/");
    } catch (err) {
      console.error(err);
      console.log("🔥로그아웃 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 유저 신고하기 api
   */
  const reportUser = async () => {
    try {
      setIsLoading(true);
      const resp = await api.post("/users/report", {
        reporter: user.uid,
        reportedUser: userData.uid,
        reason: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const isSameUser = Boolean(user.uid == userData.uid);
  const modal = isSameUser
    ? {
        modalHeader: "로그아웃",
        modalContent: "로그아웃하시겠습니까?",
        modalLeftBtn: {
          text: "취소",
          onClickHandler: () => {
            setIsModalOpened(false);
          },
        },
        modalRightBtn: {
          text: "로그아웃",
          onClickHandler: signout,
        },
      }
    : {
        modalHeader: "신고",
        modalContent: "신고하시겠습니까?",
        modalLeftBtn: {
          text: "취소",
          onClickHandler: () => {
            setIsModalOpened(false);
          },
        },
        modalRightBtn: {
          text: "신고",
          onClickHandler: reportUser,
        },
      };

  const profileTabList = [
    {
      id: 1,
      label: "Post",
    },
    {
      id: 2,
      label: "Like",
    },
  ];

  let postList = [];
  if (tabSelected === "Post") {
    postList = userPostList;
  } else if (tabSelected === "Like") {
    postList = likeList;
  }
  const postListComponent = postList?.map((item) => (
    <Post key={item.pid} post={item} line={true} />
  ));

  /**
   * 유저 정보 불러오는 api
   */
  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get(`/users/${params.userId}`);
      setUserData({
        ...resp.data.memberDTO,
        artistDTOList: resp.data.artistDTOList,
      });
      console.log("🌟유저 정보 불러오기 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥유저 정보 불러오기 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 유저가 작성한 게시글을 불러오는 api
   */
  const fetchUserPost = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get(`/boards/posts/${params.userId}`);
      setUserPostList(resp.data);
      console.log("🌟게시글 불러오기 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 불러오기 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLikePost = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get("/boards/posts/liked-posts", {
        params: {
          uid: params.userId,
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
    fetchUser();
    fetchUserPost();
    fetchLikePost();
  }, []);

  return (
    <Layout>
      <Header
        title={userData.nickname}
        moreBtn={true}
        onClickHandler={() => {
          setIsBottomModalOpened(true);
        }}
      />
      <LayoutContent>
        <UserInfo user={userData} />
        <ProfileTab
          tabList={profileTabList}
          selected={tabSelected}
          onClickHandler={setTabSelected}
        />
        {postListComponent}
      </LayoutContent>
      <BottomTab />
      {isBottomModalOpened && (
        <BottomModal
          closeModal={() => {
            setIsBottomModalOpened(false);
          }}
          menuList={
            isSameUser
              ? [
                  {
                    key: 1,
                    label: "로그아웃",
                    onClickHandler: () => {
                      setIsModalOpened(true);
                      setIsBottomModalOpened(false);
                    },
                  },
                ]
              : [
                  {
                    key: 1,
                    label: "신고하기",
                    onClickHandler: () => {
                      setIsModalOpened(true);
                      setIsBottomModalOpened(false);
                    },
                  },
                ]
          }
        />
      )}
      {isModalOpened && (
        <Modal
          modalHeader={modal.modalHeader}
          modalContent={modal.modalContent}
          modalLeftBtn={modal.modalLeftBtn}
          modalRightBtn={modal.modalRightBtn}
        />
      )}
      <Loading />
    </Layout>
  );
}

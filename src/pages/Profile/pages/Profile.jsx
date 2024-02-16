import BottomTab from "../../../components/BottomTab/BottomTab";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import UserInfo from "../components/UserInfo/UserInfo";
import Post from "../../../components/Post/Post";
import ProfileTab from "../components/ProfileTab/ProfileTab";
import { useEffect, useState } from "react";
import { api } from "../../../api/baseURL";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../../../recoil/atom";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [userPostList, setUserPostList] = useState([]);
  const [tabSelected, setTabSelected] = useState("Post");
  const [likeList, setLikeList] = useState([]);
  const [userData, setUserData] = useState({});

  const setIsLoading = useSetRecoilState(loadingState);

  const params = useParams();

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

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get(`/users/${params.userId}`);
      setUserData(resp.data);
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
      <Header title="삼월" />
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
    </Layout>
  );
}

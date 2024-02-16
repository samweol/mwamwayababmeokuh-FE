import BottomTab from "../../../components/BottomTab/BottomTab";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import UserInfo from "../components/UserInfo/UserInfo";
import Post from "../../../components/Post/Post";
import ProfileTab from "../components/ProfileTab/ProfileTab";
import { useEffect, useState } from "react";
import { postData } from "../../../mock/index";
import { api } from "../../../api/baseURL";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../../recoil/atom";

export default function Profile() {
  const [userPostList, setUserPostList] = useState([]);

  const user = useRecoilValue(userState);
  const setIsLoading = useSetRecoilState(loadingState);

  const profileTabList = [
    {
      id: 1,
      label: "Post",
    },
    {
      id: 2,
      label: "Media",
    },
    {
      id: 3,
      label: "Hashtag",
    },
    {
      id: 4,
      label: "Like",
    },
  ];

  /**
   * 유저가 작성한 게시글을 불러오는 api
   */
  const fetchUserPost = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get(`/boards/posts/${user.uid}`);
      setUserPostList(resp.data);
      console.log("🌟게시글 불러오기 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥게시글 불러오기 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserPost();
  }, []);

  return (
    <Layout>
      <Header title="삼월" />
      <LayoutContent>
        <UserInfo />
        <ProfileTab tabList={profileTabList} />
        {userPostList?.map((item) => (
          <Post key={item.pid} post={item} line={true} />
        ))}
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

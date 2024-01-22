import BottomTab from "../../../components/BottomTab/BottomTab";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import UserInfo from "../components/UserInfo/UserInfo";
import Post from "../../../components/Post/Post";
import ProfileTab from "../components/ProfileTab/ProfileTab";
import { useEffect, useState } from "react";
import { postData } from "../../../mock/index";

export default function Profile() {
  const [userPostList, setUserPostList] = useState([]);

  useEffect(() => {
    setUserPostList(postData);
  }, [userPostList]);
  return (
    <Layout>
      <Header title="삼월" />
      <LayoutContent>
        <UserInfo />
        <ProfileTab />
        {userPostList.map((item) => (
          <Post key={item.key} post={item} />
        ))}
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

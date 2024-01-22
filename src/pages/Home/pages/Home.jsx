import BottomTab from "../../../components/BottomTab/BottomTab";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Post from "../../../components/Post/Post";
import ArtistBadge from "../components/ArtistBadge/ArtistBadge";
import WriteButton from "../components/WriteButton/WriteButton";
import { postData } from "../../../mock";
import { useEffect, useState } from "react";

export default function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    setPostList(postData);
  }, [postList]);
  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <ArtistBadge artist="레드벨벳" />
        {postList.map((item) => (
          <Post key={item.key} post={item} line={true} />
        ))}
        <WriteButton />
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

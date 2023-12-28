import BottomTab from "../../../components/BottomTab/BottomTab";
import MainHeader from "../../../components/Header/MainHeader";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Post from "../../../components/Post/Post";
import ArtistBadge from "../components/ArtistBadge/ArtistBadge";
import WriteButton from "../components/WriteButton/WriteButton";

export default function Home() {
  return (
    <Layout>
      <MainHeader />
      <LayoutContent>
        <ArtistBadge artist="레드벨벳" />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <WriteButton />
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

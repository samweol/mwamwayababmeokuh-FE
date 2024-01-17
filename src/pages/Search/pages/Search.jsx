import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import BottomTab from "../../../components/BottomTab/BottomTab";
import SearchHeader from "../../../components/Header/SearchHeader";

export default function Search() {
  return (
    <Layout>
      <SearchHeader />
      <LayoutContent></LayoutContent>
      <BottomTab />
    </Layout>
  );
}

import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import BottomTab from "../../../components/BottomTab/BottomTab";
import SearchHeader from "../../../components/Header/SearchHeader";
import Ranking from "../components/Ranking/Ranking";
import { useState } from "react";
import SearchResult from "../components/SearchResult/SearchResult";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const onSelectRankKeyword = (keyword) => {
    setKeyword(keyword);
  };

  // useEffect(() => {}, [keyword]);

  return (
    <Layout>
      <SearchHeader
        keyword={keyword}
        onChangeHandler={(e) => {
          setKeyword(e.target.value);
        }}
        onBackBtnHandler={() => {
          setKeyword("");
        }}
      />
      <LayoutContent padding={true}>
        {keyword ? (
          <SearchResult />
        ) : (
          <Ranking onClickHandler={onSelectRankKeyword} />
        )}
      </LayoutContent>
      <BottomTab />
    </Layout>
  );
}

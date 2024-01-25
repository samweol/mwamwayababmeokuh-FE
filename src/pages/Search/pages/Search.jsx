import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import BottomTab from "../../../components/BottomTab/BottomTab";
import SearchHeader from "../../../components/Header/SearchHeader";
import Ranking from "../components/Ranking/Ranking";
import { useState } from "react";
import SearchResult from "../components/SearchResult/SearchResult";
import useDebounce from "../../../hooks/useDebounce";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const { debounceValue } = useDebounce(keyword, 3000);

  const onSelectRankKeyword = (keyword) => {
    setKeyword(keyword);
  };

  const searchFun = () => {
    console.log(debounceValue);
  };

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

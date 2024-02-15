import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import BottomTab from "../../../components/BottomTab/BottomTab";
import SearchHeader from "../../../components/Header/SearchHeader";
import Ranking from "../components/Ranking/Ranking";
import { useEffect, useState } from "react";
import SearchResult from "../components/SearchResult/SearchResult";
import useDebounce from "../../../hooks/useDebounce";
import { api } from "../../../api/baseURL";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../../../recoil/atom";
import Loading from "../../../components/Loading/Loading";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const { debounceValue } = useDebounce(keyword, 3000);

  const [artistPostList, setArtistPostList] = useState([]);
  const [hashtagPostList, setHashtagPostList] = useState([]);

  const setIsLoading = useSetRecoilState(loadingState);

  const onSelectRankKeyword = (keyword) => {
    setKeyword(keyword);
  };

  console.log("debounceValue : ", debounceValue);
  console.log(artistPostList);

  /**
   * 검색 api
   */
  const searchKeyword = async () => {
    console.log("searchKeyword function");
    console.log(`/boards/search-results?searchKeyword=${debounceValue}`);
    try {
      setIsLoading(true);
      const resp = await api.get(
        `/boards/search-results?searchKeyword=${debounceValue}`
      );

      console.log("결과");
      console.log(resp.data);
      setArtistPostList(resp.data.byArtist);
      setHashtagPostList(resp.data.byHashtag);

      console.log("🌟검색 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥검색 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debounceValue.length) {
      searchKeyword();
    }
  }, [debounceValue]);

  return (
    <Layout>
      <SearchHeader
        keyword={keyword}
        onChangeHandler={(e) => {
          setKeyword(e.target.value);
        }}
        onBackBtnHandler={() => {
          setKeyword("");
          setArtistPostList([]);
          setHashtagPostList([]);
        }}
      />
      <LayoutContent padding={true}>
        {keyword ? (
          <SearchResult searchResultList={artistPostList} />
        ) : (
          <Ranking onClickHandler={onSelectRankKeyword} />
        )}
      </LayoutContent>
      <BottomTab />
      <Loading />
    </Layout>
  );
}

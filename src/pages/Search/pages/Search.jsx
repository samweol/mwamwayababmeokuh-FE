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
  const [artistPostList, setArtistPostList] = useState([]);
  const [hashtagPostList, setHashtagPostList] = useState([]);

  const { debounce } = useDebounce();

  const setIsLoading = useSetRecoilState(loadingState);

  const onSelectRankKeyword = (keyword) => {
    setKeyword(keyword);
  };

  /**
   * 검색 api
   */
  const searchKeyword = async (keyword) => {
    console.log("searchKeyword function");
    try {
      setIsLoading(true);
      console.log(keyword);
      const resp = await api.get(`/boards/search-results`, {
        params: {
          searchKeyword: keyword,
        },
      });

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

  useEffect(() => {}, []);

  useEffect(() => {
    if (keyword.length) {
      debounce(() => {
        searchKeyword(keyword);
      }, 3000);
    }
  }, [keyword]);

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

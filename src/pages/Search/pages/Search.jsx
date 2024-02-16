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
import ProfileTab from "../../Profile/components/ProfileTab/ProfileTab";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [artistPostList, setArtistPostList] = useState([]);
  const [hashtagPostList, setHashtagPostList] = useState([]);
  const [tabSelected, setTabSelected] = useState("Hashtag");
  const [rankingList, setRankingList] = useState([]);

  const { debounce } = useDebounce();

  const setIsLoading = useSetRecoilState(loadingState);

  const searchTabList = [
    { id: 1, label: "Hashtag" },
    { id: 2, label: "Artist" },
  ];

  const onSelectRankKeyword = (keyword) => {
    setKeyword(keyword);
  };

  /**
   * 해시태그 랭킹 조회 api
   */
  const fetchRanking = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get("/boards/rankings");
      console.log("🌟랭킹 조회 성공🌟");
      setRankingList(resp.data);
    } catch (err) {
      console.error(err);
      console.log("🔥랭킹 조회 실패🔥");
    } finally {
      setIsLoading(false);
    }
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

  useEffect(() => {
    fetchRanking();
  }, []);

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
      <LayoutContent>
        {keyword.length ? (
          <ProfileTab
            tabList={searchTabList}
            selected={tabSelected}
            onClickHandler={setTabSelected}
          />
        ) : null}
        {tabSelected === "Hashtag" ? (
          <SearchResult searchResultList={hashtagPostList} />
        ) : (
          <SearchResult searchResultList={artistPostList} />
        )}
        {!keyword.length ? (
          <Ranking
            rankingList={rankingList}
            onClickHandler={onSelectRankKeyword}
          />
        ) : null}
      </LayoutContent>
      <BottomTab />
      <Loading />
    </Layout>
  );
}

import { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Button from "../../../components/Button/Button";
import NoneArtist from "../components/NoneArtist/NoneArtist";
import useNavigatePage from "../../../hooks/useNavigatePage";
import LayoutContent from "../../../components/Layout/LayoutContent";
import { api } from "../../../api/baseURL";
import useDebounce from "../../../hooks/useDebounce";
import ArtisList from "../components/ArtistList/ArtisList";
import SearchHeader from "../../../components/Header/SearchHeader";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../../recoil/atom";

export default function SelectArtis() {
  const [keyword, setKeyword] = useState("");
  const [artists, setArtists] = useState([]);
  const [selected, setSelected] = useState([]);

  const { navigatePage } = useNavigatePage();
  const { debounce } = useDebounce();

  const [user, setUser] = useRecoilState(userState);
  const setIsLoading = useSetRecoilState(loadingState);

  const selectArtistBadge = (artist) => {
    if (selected.includes(artist)) {
      const tempArr = selected.filter((item) => artist.aid !== item.aid);
      setSelected(tempArr);
    } else {
      setSelected([...selected, artist]);
    }
  };

  /**
   * 아티스트 검색 api
   */
  const searchArtist = async (keyword) => {
    try {
      setIsLoading(true);
      const resp = await api.get("/artists/search", {
        params: {
          name: keyword,
        },
      });
      console.log("🌟아티스트 검색 성공🌟");
      setArtists(resp.data);
    } catch (err) {
      console.error(err);
      console.log("🔥아티스트 검색 실패🔥");
      searchArtist([]);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 전체 아티스트 조회 api
   */
  const fetchArtist = async () => {
    try {
      const resp = await api.get("/artists");
      console.log("🌟아티스트 조회 성공🌟");
      setArtists(resp.data);
    } catch (err) {
      console.error(err);
      console.log("🔥아티스트 조회 실패🔥");
    }
  };

  /**
   * 선호 아티스트 추가 api
   */
  const addFavoriteArtist = async () => {
    try {
      setIsLoading(true);
      const aidArr = selected.map((item) => item.aid);
      const resp = await api.post("/artists/favorites", {
        uid: user.uid,
        aid: aidArr,
      });
      console.log("🌟아티스트 추가 성공🌟");
      navigatePage("/home");
    } catch (err) {
      console.error(err);
      console.log("🔥아티스트 추가 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  useEffect(() => {
    if (keyword.length) {
      debounce(() => {
        searchArtist(keyword);
      }, 3000);
    } else {
      fetchArtist();
    }
  }, [keyword]);

  return (
    <Layout>
      <LayoutContent padding={true}>
        <SearchHeader
          keyword={keyword}
          onChangeHandler={(e) => {
            setKeyword(e.target.value);
          }}
        />
        {artists.length ? (
          <ArtisList
            artistList={artists}
            selected={selected}
            onClickHandler={selectArtistBadge}
          />
        ) : (
          <NoneArtist keyword={keyword} />
        )}
        <Button
          bottomFixed={true}
          onClickHandler={() => {
            if (selected.length) {
              addFavoriteArtist();
            } else {
              navigatePage("/home");
            }
          }}
        >
          {selected.length ? "Add" : "Skip"}
        </Button>
      </LayoutContent>
    </Layout>
  );
}

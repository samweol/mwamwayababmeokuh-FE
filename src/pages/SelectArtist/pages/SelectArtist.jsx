import { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Button from "../../../components/Button/Button";
import NoneArtist from "../components/NoneArtist/NoneArtist";
import useNavigatePage from "../../../hooks/useNavigatePage";
import LayoutContent from "../../../components/Layout/LayoutContent";
import { api } from "../../../api/baseURL";
import useDebounce from "../../../hooks/useDebounce";

export default function SelectArtis() {
  const [keyword, setKeyword] = useState("");
  const [artists, setArtists] = useState([]);
  const [selected, setSelected] = useState([]);
  const { navigatePage } = useNavigatePage();
  const { debounceValue } = useDebounce(keyword, 200);

  /**
   * 아티스트 검색 api
   */
  const searchArtist = async () => {
    try {
      await api.get(`/artists/search?name=${debounceValue}`);
      setArtists([]);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * 전체 아티스트 조회 api
   */
  const fetchArtist = async () => {
    try {
      const artistList = await api.get("/artists");
      setArtists(artistList);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * 선호 아티스트 추가 api
   */
  const addFavoriteArtist = async () => {
    try {
      await api.post("/artists/favorites", {
        uid: "",
        aid: selected,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  useEffect(() => {
    searchArtist();
  }, [debounceValue]);

  return (
    <Layout>
      <LayoutContent padding={true}>
        <SearchBar
          keyword={keyword}
          onChangeHandler={(e) => {
            setKeyword(e.target.value);
          }}
        />
        {artists.length ? null : <NoneArtist />}
        <Button
          bottomFixed={true}
          onClickHandler={() => {
            navigatePage("/home");
          }}
        >
          {selected.length ? "Add" : "Skip"}
        </Button>
      </LayoutContent>
    </Layout>
  );
}

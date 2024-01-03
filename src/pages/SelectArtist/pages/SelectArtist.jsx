import { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Button from "../../../components/Button/Button";
import NoneArtist from "../components/NoneArtist/NoneArtist";
import useNavigatePage from "../../../hooks/useNavigatePage";
import LayoutContent from "../../../components/Layout/LayoutContent";

export default function SelectArtis() {
  const [keyword, setKeyword] = useState("");
  const [artists, setArtists] = useState([]);
  const { navigatePage } = useNavigatePage();
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
          Skip
        </Button>
      </LayoutContent>
    </Layout>
  );
}

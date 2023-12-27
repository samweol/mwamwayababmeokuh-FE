import { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Button from "../../../components/Button/Button";
import NoneArtist from "../components/NoneArtist/NoneArtist";

export default function SelectArtis() {
  const [keyword, setKeyword] = useState("");
  const [artists, setArtists] = useState([]);
  return (
    <Layout>
      <SearchBar
        keyword={keyword}
        onChangeHandler={(e) => {
          setKeyword(e.target.value);
        }}
      />
      {artists.length ? null : <NoneArtist />}
      <Button bottomFixed={true}> Skip</Button>
    </Layout>
  );
}

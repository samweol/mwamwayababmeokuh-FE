import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import { useLocation } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { api } from "../../../api/baseURL";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../../../recoil/atom";
import useNavigatePage from "../../../hooks/useNavigatePage";

export default function AddArtist() {
  const location = useLocation();
  const [artist, setArtist] = useState(location.state.artist);

  const setIsLoading = useSetRecoilState(loadingState);

  const { navigatePage } = useNavigatePage();

  /**
   * 아티스트 추가 api
   */
  const addArtist = async () => {
    try {
      setIsLoading(true);
      const resp = await api.post("/artists", {
        name: artist,
      });
      console.log("🌟아티스트 추가 성공🌟");
      navigatePage("/select-artist");
    } catch (err) {
      console.error(err);
      console.log("🔥아티스트 추가 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <Header title="Add Artist" />
      <LayoutContent>
        <Input
          labelText="artist"
          value={artist}
          defaultValue={location.state.artist}
          onChangeHandler={(e) => {
            setArtist(e.target.value);
          }}
        />
        <Button onClickHandler={addArtist}>Add</Button>
      </LayoutContent>
    </Layout>
  );
}

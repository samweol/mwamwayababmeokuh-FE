import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Input from "../../../components/Input/Input";
import TextField from "../../../components/TextField/TextField";
import { useState } from "react";
import UserProfileImage from "../components/UserProfileImage/UserProfileImage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../../recoil/atom";
import { api } from "../../../api/baseURL";
import useNavigatePage from "../../../hooks/useNavigatePage";
import { useLocation } from "react-router-dom";
import ArtistList from "../components/ArtistList/ArtistList";

export default function EditProfile() {
  const location = useLocation();

  const user = useRecoilValue(userState);
  const setIsLoading = useSetRecoilState(loadingState);

  const [userData, setUserData] = useState({
    image: "",
    nickname: location.state.user.nickname,
    bio: location.state.user.bio,
    artist: location.state.user.artistDTOList,
  });

  const { navigatePage } = useNavigatePage();

  const aid = userData.artist.reduce((acc, cur) => {
    return acc + cur.aid + ",";
  }, "");

  /**
   * 프로필 수정 api
   */
  const updateProfile = async () => {
    try {
      setIsLoading(true);
      await api.put(`/users/${user.uid}`, {
        uid: user.uid,
        nickname: userData.nickname,
        bio: userData.bio,
        aid,
      });
      console.log("🌟마이프로필 수정 성공🌟");
      navigatePage(`/profile/${user.uid}`);
    } catch (err) {
      console.error(err);
      console.log("🔥마이프로필 수정 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteArtist = (aid) => {
    const tempArr = userData.artist.filter((item) => item.aid !== aid);
    setUserData({ ...userData, artist: tempArr });
  };

  return (
    <Layout>
      <Header
        title="Edit Profile"
        buttonText="Save"
        onClickHandler={updateProfile}
      />
      <LayoutContent padding={true}>
        <UserProfileImage />
        <Input
          labelText={"Name"}
          defaultValue={userData.nickname}
          flex={true}
          value={userData.nickname}
          onChangeHandler={(e) => {
            setUserData({ ...userData, nickname: e.target.value });
          }}
        />
        <TextField
          labelText="Description"
          defaultValue={userData.bio}
          value={userData.bio}
          onChangeHandler={(e) => {
            setUserData({ ...userData, bio: e.target.value });
          }}
        />
        <ArtistList artist={userData.artist} onDeleteHandler={deleteArtist} />
      </LayoutContent>
    </Layout>
  );
}

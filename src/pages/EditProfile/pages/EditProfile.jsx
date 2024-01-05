import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Input from "../../../components/Input/Input";
import TextField from "../../../components/TextField/TextField";
import { useState } from "react";
import UserProfileImage from "../components/UserProfileImage/UserProfileImage";

export default function EditProfile() {
  const [userData, setUserData] = useState({
    image: "",
    nickname: "",
    description: "",
  });
  return (
    <Layout>
      <Header title="Edit Profile" buttonText="Save"></Header>
      <LayoutContent padding={true}>
        <UserProfileImage />
        <Input
          labelText="Name"
          flex={true}
          value={userData.nickname}
          onChangeHandler={(e) => {
            setUserData({ ...userData, nickname: e.target.value });
          }}
        />
        <TextField
          labelText="Description"
          value={userData.description}
          onChangeHandler={(e) => {
            setUserData({ ...userData, description: e.target.value });
          }}
        />
      </LayoutContent>
    </Layout>
  );
}

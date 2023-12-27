import { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import useNavigatePage from "../../../../hooks/useNavigatePage";
import PageMainHeader from "../../../../components/PageMainHeader/PageMainHeader";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

export default function Signup() {
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
  });

  const { navigatePage } = useNavigatePage();

  const isButtonActive = Object.values(userData).every((item) => item.length);

  const onNextBtnClickHandler = () => {
    navigatePage("/signup/verify-email");
  };

  return (
    <Layout>
      <PageMainHeader>계정을 생성하세요.</PageMainHeader>
      <Input
        labelText="닉네임"
        value={userData.nickname}
        onChangeHandler={(e) => {
          setUserData({ ...userData, nickname: e.target.value });
        }}
      />
      <Input
        value={userData.email}
        labelText="이메일"
        onChangeHandler={(e) => {
          setUserData({ ...userData, email: e.target.value });
        }}
      />
      <Button
        bottomFixed={true}
        disabled={!isButtonActive}
        onClickHandler={onNextBtnClickHandler}
      >
        Next
      </Button>
    </Layout>
  );
}

import Layout from "../../../../components/Layout/Layout";
import PageMainHeader from "../../../../components/PageMainHeader/PageMainHeader";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import useNavigatePage from "../../../../hooks/useNavigatePage";
import { useLocation } from "react-router-dom";
import { api } from "../../../../api/baseURL";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../../recoil/atom";
import { userData } from "../../../../mock/index";

export default function GetPassword() {
  const [passwordData, setPasswordData] = useState({ pw: "", checkpw: "" });

  const location = useLocation();
  const { nickname, email } = location.state;

  const setUser = useSetRecoilState(userState);

  const { navigatePage } = useNavigatePage();

  const isButtonActive =
    passwordData.pw.length && passwordData.pw === passwordData.checkpw;

  const onCompleteSignup = async () => {
    try {
      await api.post("/auth/register", {
        email,
        nickname,
        pw: passwordData.pw,
      });

      console.log("🌟회원가입 성공🌟");
      setUser(userData);
      navigatePage("/select-artist");
    } catch (err) {
      console.error(err);
      console.log("🔥회원가입 실패🔥");
      setUser({});
    }
  };
  return (
    <Layout>
      <PageMainHeader>비밀번호를 입력하세요.</PageMainHeader>
      <Input
        labelText="비밀번호"
        type="password"
        onChangeHandler={(e) => {
          setPasswordData({ ...passwordData, pw: e.target.value });
        }}
      />
      <Input
        labelText="비밀번호 확인"
        type="password"
        onChangeHandler={(e) => {
          setPasswordData({ ...passwordData, checkpw: e.target.value });
        }}
        alert={
          !isButtonActive && passwordData.checkpw.length
            ? "비밀번호가 일치하지 않습니다."
            : null
        }
      />
      <Button disabled={!isButtonActive} onClickHandler={onCompleteSignup}>
        Next
      </Button>
    </Layout>
  );
}

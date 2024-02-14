import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import useNavigatePage from "../../../../hooks/useNavigatePage";
import PageMainHeader from "../../../../components/PageMainHeader/PageMainHeader";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import LayoutContent from "../../../../components/Layout/LayoutContent";
import { api } from "../../../../api/baseURL";

export default function Signup() {
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
  });

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [alert, setAlert] = useState("");

  const { navigatePage } = useNavigatePage();

  const isButtonActive = Object.entries(userData).every((item) => item.length);

  /**
   * 이메일 중복 검사 api
   */
  const checkEmail = async () => {
    try {
      const resp = await api.get(`/check-email?email=${userData.email}`);

      if (resp.data.result === "existing email") {
        throw new Error("existing email");
      }
      setIsEmailVerified(true);
      console.log("🌟이메일 중복 검사 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥이메일 중복 검사 실패🔥");

      setIsEmailVerified(false);
      setAlert("이미 존재하는 이메일입니다.");
    }
  };

  const onNextBtnClickHandler = async () => {
    await checkEmail();

    // navigatePage("/signup/verify-email", { nickname, email });
  };

  useEffect(() => {
    const { nickname, email } = userData;
    if (isEmailVerified) {
      navigatePage("/signup/password", {
        nickname,
        email,
      });
    }
  }, [isEmailVerified]);

  return (
    <Layout>
      <LayoutContent padding={true}>
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
          alert={alert}
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
      </LayoutContent>
    </Layout>
  );
}

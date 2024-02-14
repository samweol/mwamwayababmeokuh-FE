import { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import Layout from "../../../../components/Layout/Layout";
import PageMainHeader from "../../../../components/PageMainHeader/PageMainHeader";
import InputBoxContainer from "../components/InputBox/InputBoxContainer";
import useNavigatePage from "../../../../hooks/useNavigatePage";
import LayoutContent from "../../../../components/Layout/LayoutContent";
import { useLocation } from "react-router-dom";

export default function VerifyEmail() {
  const [code, setCode] = useState([]);
  const isButtonActive = code.join("").length === 6;

  const location = useLocation();
  const { nickname, email } = location.state;

  const onChangeCode = (input) => {
    setCode([...code, input]);
  };
  const onNextBtnClickHandler = () => {
    navigatePage("/signup/password");
  };

  const { navigatePage } = useNavigatePage();

  useEffect(() => {
    if (email.length) {
      // email 인증 api 호출하기
    }
  }, [email]);
  return (
    <Layout>
      <LayoutContent padding={true}>
        <PageMainHeader>이메일을 인증하세요.</PageMainHeader>
        <InputBoxContainer onChangeCode={onChangeCode} />
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

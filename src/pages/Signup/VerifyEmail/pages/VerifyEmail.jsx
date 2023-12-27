import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Layout from "../../../../components/Layout/Layout";
import PageMainHeader from "../../../../components/PageMainHeader/PageMainHeader";
import InputBoxContainer from "../components/InputBox/InputBoxContainer";
import useNavigatePage from "../../../../hooks/useNavigatePage";

export default function VerifyEmail() {
  const [code, setCode] = useState([]);
  const isButtonActive = code.join("").length === 6;
  const onChangeCode = (input) => {
    setCode([...code, input]);
  };
  const onNextBtnClickHandler = () => {
    navigatePage("/signup/password");
  };

  const { navigatePage } = useNavigatePage();
  return (
    <Layout>
      <PageMainHeader>이메일을 인증하세요.</PageMainHeader>
      <InputBoxContainer onChangeCode={onChangeCode} />
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

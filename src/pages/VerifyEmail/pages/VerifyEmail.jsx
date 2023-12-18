import Button from "../../../components/Button/Button";
import Layout from "../../../components/Layout/Layout";
import PageMainHeader from "../../../components/PageMainHeader/PageMainHeader";
import InputBoxContainer from "../components/InputBox/InputBoxContainer";

export default function VerifyEmail() {
  return (
    <Layout>
      <PageMainHeader>이메일을 인증하세요.</PageMainHeader>
      <InputBoxContainer />
      <Button bottomFixed={true}>Next</Button>
    </Layout>
  );
}

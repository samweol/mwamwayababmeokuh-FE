import { useRef } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import useNavigatePage from "../../../hooks/useNavigatePage";
import PageMainHeader from "../../../components/PageMainHeader/PageMainHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";

export default function Signin() {
  const inputRef = useRef(null);
  const { navigatePage } = useNavigatePage();
  return (
    <Layout>
      <LayoutContent>
        <PageMainHeader>Sign in to 뫄뫄야밥먹어</PageMainHeader>
        <Button>Sign in with Goggle</Button>
        <Button>Sign in with Apple</Button>
        <Input ref={inputRef} labelText="email" />
        <Button>Next</Button>
        <Button
          inversed={true}
          onClickHandler={() => {
            navigatePage("/signup");
          }}
        >
          Go to Signup
        </Button>
        <Button inversed={true}>Forgot password?</Button>
      </LayoutContent>
    </Layout>
  );
}

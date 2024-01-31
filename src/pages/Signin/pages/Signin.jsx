import { useRef } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import useNavigatePage from "../../../hooks/useNavigatePage";
import PageMainHeader from "../../../components/PageMainHeader/PageMainHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";

export default function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { navigatePage } = useNavigatePage();
  const signInAPI = () => {
    try {
      const signInData = {
        id: emailRef.current.value,
        pw: passwordRef.current.value,
      };
      navigatePage("/home");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout>
      <LayoutContent padding={true}>
        <PageMainHeader>Sign in to 뫄뫄야밥먹어</PageMainHeader>
        <Button>Sign in with Goggle</Button>
        <Button>Sign in with Apple</Button>
        <Input ref={emailRef} labelText="email" />
        <Input ref={passwordRef} labelText="password" type="password" />
        <Button onClickHandler={signInAPI}>Signin</Button>
        <Button
          inversed={true}
          onClickHandler={() => {
            navigatePage("/signup");
          }}
        >
          Go to Signup
        </Button>
        <Button
          inversed={true}
          onClickHandler={() => {
            navigatePage("/findpassword");
          }}
        >
          Forgot password?
        </Button>
      </LayoutContent>
    </Layout>
  );
}

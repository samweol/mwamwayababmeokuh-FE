import { useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import useNavigatePage from "../../../hooks/useNavigatePage";
import PageMainHeader from "../../../components/PageMainHeader/PageMainHeader";
import LayoutContent from "../../../components/Layout/LayoutContent";
import { api } from "../../../api/baseURL";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../recoil/atom";
import MainLogo from "../../../components/MainLogo/MainLogo";

export default function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [alert, setAlert] = useState("");

  const setUser = useSetRecoilState(userState);

  const { navigatePage } = useNavigatePage();

  /**
   * 로그인 api
   */
  const signInAPI = async () => {
    const email = emailRef.current.value;
    const pw = passwordRef.current.value;

    try {
      const resp = await api.post("/auth/login", { email, pw });
      setUser({
        ...resp.data.memberDTO,
        artistDTOList: resp.data.artistDTOList,
      });
      console.log("🌟로그인 성공🌟");
      setAlert("");
      navigatePage("/home");
    } catch (err) {
      console.error(err);
      setUser({});
      setAlert("이메일과 비밀번호를 다시 확인해주세요.");
      console.log("🔥로그인 실패🔥");
    }
  };
  return (
    <Layout>
      <LayoutContent padding={true}>
        <PageMainHeader>Sign in to 뫄뫄야밥먹어</PageMainHeader>
        <Button>Sign in with Goggle</Button>
        <Button>Sign in with Apple</Button>
        <Input ref={emailRef} labelText="email" />
        <Input
          ref={passwordRef}
          labelText="password"
          type="password"
          alert={alert}
        />
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

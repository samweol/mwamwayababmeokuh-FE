import { useRef } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Layout from "../../../components/Layout/Layout";
import "../styles/Signin.scss";

export default function Signin() {
  const inputRef = useRef(null);
  return (
    <Layout>
      <h1 className="signin-header">Sign in to 뫄뫄야밥먹어</h1>
      <Button>Sign in with Goggle</Button>
      <Button>Sign in with Apple</Button>
      <Input ref={inputRef} labelText="email" />
      <Button>Next</Button>
      <Button inversed={true}>Forgot password?</Button>
    </Layout>
  );
}

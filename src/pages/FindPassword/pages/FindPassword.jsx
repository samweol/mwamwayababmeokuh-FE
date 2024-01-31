import React, { useRef, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import PageMainHeader from "../../../components/PageMainHeader/PageMainHeader";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

export default function FindPassword() {
  const [checkedEmail, setCheckedEmail] = useState(false);
  const emailRef = useRef(null);

  const checkEmailAPI = () => {
    try {
      const emailCheckData = {
        email: emailRef.current.value,
      };
    } catch (err) {
      setCheckedEmail(true);
    }
  };

  const resetPasswordAPI = () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout>
      <LayoutContent padding={true}>
        <PageMainHeader>Find Password</PageMainHeader>
        {!checkedEmail && <Input ref={emailRef} labelText="email" />}
        {checkedEmail && (
          <>
            <Input type="password" labelText="password" />
            <Input type="password" labelText="password check" />
          </>
        )}
        <Button>{checkedEmail ? "reset Password" : "Next"}</Button>
      </LayoutContent>
    </Layout>
  );
}

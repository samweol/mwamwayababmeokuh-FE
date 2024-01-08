import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import PostInput from "../components/PostInput/PostInput";
import SelectBox from "../../../components/SelectBox/SelectBox";
import { useState } from "react";

export default function WritePost() {
  const [selected, setSelected] = useState("");

  return (
    <Layout>
      <Header buttonText="Post" />
      <LayoutContent padding={true}>
        <SelectBox selected={selected} onSelectHandler={setSelected} />
        <PostInput />
      </LayoutContent>
    </Layout>
  );
}

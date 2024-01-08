import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import PostInput from "../components/PostInput/PostInput";
import SelectBox from "../../../components/SelectBox/SelectBox";
import { useState } from "react";
import HashTagInput from "../components/HashTagInput/HashTagInput";
import HashTagList from "../components/HashTagList/HashTagList";

export default function WritePost() {
  const [selected, setSelected] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [hashTagList, setHashtagList] = useState([]);

  /**
   * 해시태그 추가 함수
   * @param {새로 입력할 해시태그} hashtag
   */
  const addHashTag = () => {
    setHashtagList([...hashTagList, searchKeyword]);
    setSearchKeyword("");
  };

  return (
    <Layout>
      <Header buttonText="Post" />
      <LayoutContent padding={true}>
        <SelectBox selected={selected} onSelectHandler={setSelected} />
        <PostInput />
        <HashTagInput
          value={searchKeyword}
          onChangeHandler={(e) => {
            setSearchKeyword(e.target.value);
          }}
          onAddHashTag={addHashTag}
        />
        <HashTagList hashTagList={hashTagList} />
      </LayoutContent>
    </Layout>
  );
}

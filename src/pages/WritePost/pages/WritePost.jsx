import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import PostInput from "../components/PostInput/PostInput";
import SelectBox from "../../../components/SelectBox/SelectBox";
import { useState } from "react";
import HashTagInput from "../components/HashTagInput/HashTagInput";
import HashTagList from "../components/HashTagList/HashTagList";
import { api } from "../../../api/baseURL";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import useNavigatePage from "../../../hooks/useNavigatePage";

export default function WritePost() {
  const [selected, setSelected] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [hashTagList, setHashtagList] = useState([]);
  const [searchResultList, setSearchResultList] = useState([]);
  const [content, setContent] = useState("");

  const user = useRecoilValue(userState);
  const { navigatePage } = useNavigatePage();

  /**
   * 해시태그 추가 함수
   * @param {새로 입력할 해시태그} hashtag
   */
  const addHashTag = () => {
    setHashtagList([...hashTagList, searchKeyword]);
    setSearchKeyword("");
  };

  const deleteHashTag = (hashtag) => {
    const tempHashTagList = hashTagList;
    setHashtagList(tempHashTagList.filter((item) => item != hashtag));
  };

  const uploadPost = async () => {
    try {
      const resp = await api.post("/boards/posts", {
        aid: "",
        hashtag: hashTagList[0],
        content: content,
        writer: user.uid,
      });

      //   PostDTO{
      //     “pid” : long,
      //     “aid” : long,
      //     “hashtag” : “varchar”,
      //     “content” : “varchar”,
      //     “lat” : number,
      //     “lng” : number,
      //     “writer” : long,
      //     “createdAt” : “timestamp”
      // }

      console.log("🌟글쓰기 성공🌟");
      navigatePage(`/post/detail/${resp.pid}`, { ...resp.data });
    } catch (err) {
      console.error(err);
      console.log("🔥글쓰기 실패🔥");
    }
  };

  return (
    <Layout>
      <Header buttonText="Post" onClickHandler={uploadPost} />
      <LayoutContent padding={true}>
        <SelectBox
          selectList={user.artistDTOList}
          selected={selected}
          onSelectHandler={setSelected}
        />
        <PostInput
          onChangeHandler={(e) => {
            setContent(e.target.value);
          }}
        />
        <HashTagInput
          value={searchKeyword}
          onChangeHandler={(e) => {
            setSearchKeyword(e.target.value);
          }}
          onAddHashTag={addHashTag}
        />
        <HashTagList
          hashTagList={hashTagList}
          onDeleteHashTag={deleteHashTag}
        />
      </LayoutContent>
    </Layout>
  );
}

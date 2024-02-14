import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import PostInput from "../components/PostInput/PostInput";
import SelectBox from "../../../components/SelectBox/SelectBox";
import { useEffect, useState } from "react";
import HashTagInput from "../components/HashTagInput/HashTagInput";
import HashTagList from "../components/HashTagList/HashTagList";
import { api } from "../../../api/baseURL";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/atom";
import useNavigatePage from "../../../hooks/useNavigatePage";
import useDebounce from "../../../hooks/useDebounce";

export default function WritePost() {
  const [selected, setSelected] = useState({
    aid: -1,
    name: "",
  });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [hashTagList, setHashtagList] = useState([]);
  const [searchResultList, setSearchResultList] = useState([]);
  const [content, setContent] = useState("");

  const { debounceValue } = useDebounce(searchKeyword, 1000);

  const user = useRecoilValue(userState);
  const { navigatePage } = useNavigatePage();

  /**
   * 해시태그 등록 api
   */
  const postHashtag = async () => {
    try {
      await api.post("/hashtags", {
        hashtag: debounceValue,
      });
      console.log("🌟해시태그 추가 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥해시태그 추가 실패🔥");
    }
  };

  /**
   * 해시태그 조회 api
   */
  const searchHashtag = async () => {
    try {
      const resp = await api.get(`/hashtags/search?hashtag=${debounceValue}`);

      console.log(resp.data);
      setSearchResultList(resp.data);
      console.log("🌟해시태그 조회 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥해시태그 조회 실패🔥");
    }
  };

  /**
   * 해시태그 추가 함수
   * @param {새로 입력할 해시태그} hashtag
   */
  const addHashTag = async () => {
    setHashtagList([...hashTagList, searchKeyword]);
    setSearchKeyword("");

    if (!searchResultList.length) {
      await postHashtag();
    }
  };

  const deleteHashTag = (hashtag) => {
    const tempHashTagList = hashTagList;
    setHashtagList(tempHashTagList.filter((item) => item != hashtag));
  };

  const uploadPost = async () => {
    try {
      console.log("uploadPost 시작");
      console.log({
        aid: selected.aid,
        hashtag: hashTagList[0],
        content: content,
        writer: user.uid,
      });

      const resp = await api.post("/boards/posts", {
        aid: selected.aid,
        hashtag: hashTagList[0],
        content: content,
        writer: user.uid,
      });

      console.log("🌟글쓰기 성공🌟");
      console.log(resp.data);
      // navigatePage(`/post/detail/${resp.pid}`, { ...resp.data });
    } catch (err) {
      console.error(err);
      console.log("🔥글쓰기 실패🔥");
    }
  };

  useEffect(() => {
    searchHashtag();
  }, [debounceValue]);

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

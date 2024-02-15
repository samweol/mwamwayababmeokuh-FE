import Layout from "../../../components/Layout/Layout";
import LayoutContent from "../../../components/Layout/LayoutContent";
import Header from "../../../components/Header/Header";
import PostInput from "../components/PostInput/PostInput";
import SelectBox from "../../../components/SelectBox/SelectBox";
import { useEffect, useState } from "react";
import HashTagInput from "../components/HashTagInput/HashTagInput";
import HashTagList from "../components/HashTagList/HashTagList";
import { api } from "../../../api/baseURL";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../../recoil/atom";
import useNavigatePage from "../../../hooks/useNavigatePage";
import useDebounce from "../../../hooks/useDebounce";
import Loading from "../../../components/Loading/Loading";

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
  const setLoading = useSetRecoilState(loadingState);
  const { navigatePage } = useNavigatePage();

  /**
   * 해시태그 등록 api
   */
  const postHashtag = async () => {
    try {
      setLoading(true);
      await api.post("/hashtags", {
        hashtag: debounceValue,
      });
      console.log("🌟해시태그 추가 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥해시태그 추가 실패🔥");
    } finally {
      setLoading(false);
    }
  };

  /**
   * 해시태그 조회 api
   */
  const searchHashtag = async () => {
    try {
      setLoading(true);
      const resp = await api.get(`/hashtags/search?hashtag=${debounceValue}`);

      console.log(resp.data);
      setSearchResultList(resp.data);
      console.log("🌟해시태그 조회 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥해시태그 조회 실패🔥");
    } finally {
      setLoading(false);
    }
  };

  /**
   * 해시태그 추가 함수
   */
  const addHashTag = async () => {
    setHashtagList([...hashTagList, searchKeyword]);
    setSearchKeyword("");

    if (!searchResultList.length) {
      await postHashtag();
    }
  };

  /**
   * 해시태그 삭제 함수
   * @param {삭제할 해시태그} hashtag
   */
  const deleteHashTag = (hashtag) => {
    const tempHashTagList = hashTagList;
    setHashtagList(tempHashTagList.filter((item) => item != hashtag));
  };

  /**
   * 글쓰기 api
   */
  const uploadPost = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!debounceValue.length) {
    } else {
      searchHashtag();
    }
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
          searchResultList={searchResultList}
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
      <Loading />
    </Layout>
  );
}

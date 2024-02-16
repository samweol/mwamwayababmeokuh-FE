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
  const [isHashtagExist, setIsHashtagExist] = useState(true);

  const { debounce } = useDebounce();

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
        hashtag: searchKeyword,
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
      const resp = await api.get(`/hashtags/search`, {
        params: {
          hashtag: searchKeyword,
        },
      });
      setSearchResultList(resp.data.result);
      setIsHashtagExist(resp.data.exist);

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

    if (!isHashtagExist) {
      await postHashtag();
    }

    setSearchResultList([]);
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
      navigatePage(`/post/detail/${resp.data.pid}`, { post: { ...resp.data } });
    } catch (err) {
      console.error(err);
      console.log("🔥글쓰기 실패🔥");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchKeyword.length) {
      debounce(searchHashtag, 3000);
    }
  }, [searchKeyword]);

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
          onHashTagListClickHandler={setSearchKeyword}
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

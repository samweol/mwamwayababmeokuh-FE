import Post from "../../../../components/Post/Post";

export default function SearchResult(props) {
  const { searchResultList } = props;
  const postList = searchResultList?.map((item) => (
    <Post key={item.pid} post={item} />
  ));
  return <section>{postList}</section>;
}

import "./HashTagList.scss";

function HashTagItem(props) {
  const { hashtag } = props;
  return (
    <li key={hashtag} className="hashtag-item">
      {hashtag}
    </li>
  );
}

export default function HashTagList(props) {
  const { hashTagList } = props;
  const hashTagItemList = hashTagList.map((item) => (
    <HashTagItem key={item} hashtag={item} />
  ));
  return <ul className="hashtag-list">{hashTagItemList}</ul>;
}

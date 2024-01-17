import styles from "./HashTagList.module.scss";
import CloseIcon from "../../../../assets/images/close.png";

function HashTagItem(props) {
  const { hashtag, onDeleteHashTag } = props;
  return (
    <li key={hashtag} className={styles["hashtag-item"]}>
      {hashtag}
      <button
        onClick={() => {
          onDeleteHashTag(hashtag);
        }}
      >
        <img src={CloseIcon} alt="닫기 아이콘" />
      </button>
    </li>
  );
}

export default function HashTagList(props) {
  const { hashTagList, onDeleteHashTag } = props;
  const hashTagItemList = hashTagList.map((item) => (
    <HashTagItem key={item} hashtag={item} onDeleteHashTag={onDeleteHashTag} />
  ));
  return <ul className={styles["hashtag-list"]}>{hashTagItemList}</ul>;
}

import { LocalString } from "../../../../utils";
import styles from "./RankItem.module.scss";

export default function RankItem(props) {
  const { tag, posts, onClickHandler } = props;
  return (
    <li className={styles.rankItem} onClick={onClickHandler}>
      <a>
        {tag}
        <span className={styles.rankItemPosts}>{`${LocalString(
          posts
        )} posts`}</span>
      </a>
    </li>
  );
}

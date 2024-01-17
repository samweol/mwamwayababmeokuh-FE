import styles from "./ProfileTab.module.scss";

export default function ProfileTab() {
  return (
    <ul className={styles["tab-cont"]}>
      <li>Post</li>
      <li>Media</li>
      <li>Hashtag</li>
      <li>Like</li>
    </ul>
  );
}

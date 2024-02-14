import styles from "./PostInput.module.scss";
import ProfileImage from "../../../../assets/images/image.png";

export default function PostInput(props) {
  const { onChangeHandler } = props;
  return (
    <article className={styles["postinput-cont"]}>
      <img className={styles["postinput-profile"]} src={ProfileImage} alt="" />
      <textarea
        className={styles["postinput-textarea"]}
        onChange={onChangeHandler}
      ></textarea>
    </article>
  );
}

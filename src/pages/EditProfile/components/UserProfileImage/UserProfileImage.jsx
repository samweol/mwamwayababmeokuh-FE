import styles from "./UserProfileImage.module.scss";
import ProfileImage from "../../../../assets/images/image.png";
import ImageUploadButton from "../../../../components/ImageUploadButton/ImageUploadButton";
export default function UserProfileImage() {
  return (
    <article className={styles["userimage-change-cont"]}>
      <span className={styles["userimage-cont"]}>
        <img src={ProfileImage} alt="유저 프로필 이미지" />
        <ImageUploadButton />
      </span>
    </article>
  );
}

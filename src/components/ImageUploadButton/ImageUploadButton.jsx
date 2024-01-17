import styles from "./ImageUploadButton.module.scss";
import UploadImage from "../../assets/images/image-change.png";
export default function ImageUploadButton() {
  return (
    <article className={styles["image-upload-cont"]}>
      <label className={styles["image-upload-label"]} htmlFor="image-upload">
        <img
          className={styles["image-upload-icon"]}
          src={UploadImage}
          alt="이미지 업로드 아이콘"
        />
      </label>
      <input
        className={styles["image-upload-btn"]}
        id="image-upload"
        type="file"
      />
    </article>
  );
}

import "./ImageUploadButton.scss";
import UploadImage from "../../assets/images/image-change.png";
export default function ImageUploadButton() {
  return (
    <article className="image-upload-cont">
      <label className="image-upload-label" htmlFor="image-upload">
        <img
          className="image-upload-icon"
          src={UploadImage}
          alt="이미지 업로드 아이콘"
        />
      </label>
      <input className="image-upload-btn" id="image-upload" type="file" />
    </article>
  );
}

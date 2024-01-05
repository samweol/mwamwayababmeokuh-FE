import "./UserProfileImage.scss";
import ProfileImage from "../../../../assets/images/image.png";
import ImageUploadButton from "../../../../components/ImageUploadButton/ImageUploadButton";
export default function UserProfileImage() {
  return (
    <article className="userimage-change-cont">
      <span className="userimage-cont">
        <img src={ProfileImage} alt="유저 프로필 이미지" />
        <ImageUploadButton />
      </span>
    </article>
  );
}

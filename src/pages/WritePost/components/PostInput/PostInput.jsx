import "./PostInput.scss";
import ProfileImage from "../../../../assets/images/image.png";

export default function PostInput() {
  return (
    <article className="postinput-cont">
      <img className="postinput-profile" src={ProfileImage} alt="" />
      <textarea className="postinput-textarea"></textarea>
    </article>
  );
}

import "./UserInfo.scss";
import ProfileImage from "../../../../assets/images/image.png";
import Button from "../../../../components/Button/Button";
import useNavigatePage from "../../../../hooks/useNavigatePage";

export default function UserInfo() {
  const { navigatePage } = useNavigatePage();
  return (
    <section className="userinfo-cont">
      <div className="user-edit">
        <img
          className="user-image"
          src={ProfileImage}
          alt="유저 프로필 이미지"
        />
        <Button
          flex={true}
          size="s"
          inversed={true}
          onClickHandler={() => {
            navigatePage("/profile/edit");
          }}
        >
          Edit Profile
        </Button>
      </div>
      <div className="user-info">
        <span className="user-nickname">삼월</span>
        <p className="user-introduce">
          왼손엔 정지훈 오른손엔 김민교 나는 왼손잡이
        </p>
      </div>
    </section>
  );
}

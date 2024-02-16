import styles from "./UserInfo.module.scss";
import ProfileImage from "../../../../assets/images/image.png";
import Button from "../../../../components/Button/Button";
import useNavigatePage from "../../../../hooks/useNavigatePage";

export default function UserInfo(props) {
  const { user } = props;
  const { navigatePage } = useNavigatePage();
  return (
    <section className={styles["userinfo-cont"]}>
      <div className={styles["user-edit"]}>
        <img
          className={styles["user-image"]}
          src={ProfileImage}
          alt="유저 프로필 이미지"
        />
        <Button
          flex={true}
          size="s"
          inversed={true}
          onClickHandler={() => {
            navigatePage("/profile/edit", { user });
          }}
        >
          Edit Profile
        </Button>
      </div>
      <div className={styles["user-info"]}>
        <span className={styles["user-nickname"]}>{user.nickname}</span>
        <p className={styles["user-introduce"]}>{user.bio}</p>
      </div>
    </section>
  );
}

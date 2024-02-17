import styles from "./UserInfo.module.scss";
import ProfileImage from "../../../../assets/images/image.png";
import Button from "../../../../components/Button/Button";
import useNavigatePage from "../../../../hooks/useNavigatePage";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/atom";

export default function UserInfo(props) {
  const { user } = props;
  const currentUser = useRecoilValue(userState);
  const { navigatePage } = useNavigatePage();
  const isSameUser = Boolean(user.uid == currentUser.uid);
  const artistList = user.artistDTOList?.map((item) => (
    <li className={styles.artistItem} key={item.aid}>
      {item.name}
    </li>
  ));
  return (
    <section className={styles["userinfo-cont"]}>
      <div className={styles["user-edit"]}>
        <img
          className={styles["user-image"]}
          src={ProfileImage}
          alt="유저 프로필 이미지"
        />
        {isSameUser && (
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
        )}
      </div>
      <div className={styles["user-info"]}>
        <span className={styles["user-nickname"]}>{user.nickname}</span>
        <ul className={styles.artistList}>{artistList}</ul>
        <p className={styles["user-introduce"]}>{user.bio}</p>
      </div>
    </section>
  );
}

import styles from "./Post.module.scss";
import ProfileImage from "../../assets/images/image.png";
import HeartIcon from "../../assets/images/heart.png";
import VerticalMore from "../../assets/images/more-vertical.png";
import useNavigatePage from "../../hooks/useNavigatePage";
export default function Post(props) {
  const { line, onLikeButtonClickHandler } = props;
  const { navigatePage } = useNavigatePage();
  return (
    <article
      className={`${styles["post-cont"]} ${line && styles.line}`}
      onClick={() => {
        navigatePage("/post/detail");
      }}
    >
      <div className={styles["profile-img-cont"]}>
        <img
          className={styles["profile-img"]}
          src={ProfileImage}
          alt="유저의 프로필 이미지"
        />
      </div>
      <div className={styles["post-info-cont"]}>
        <div className={styles["post-header"]}>
          <div className={styles["post-user-info"]}>
            <span className={styles["user-nickname"]}>삼</span>
            <span className={styles["artis-badge"]}>레드벨벳</span>
            <span className={styles["post-time"]}>8m</span>
          </div>
          <button className={styles["more-btn"]}>
            <img src={VerticalMore} alt="더보기 로고" />
          </button>
        </div>
        <div className={styles["post-content"]}>
          <p>
            예쁜 옷차림은 아름다운 일몰 풍경처럼 당신의 기분을 단숨에 끌어올려
            하루 종일 좋은 기분을 가져다 줄 수 있어요.
          </p>
          <ul className={styles["post-img-cont"]}>
            <li>이미지</li>
          </ul>
        </div>
        <div className={styles["button-cont"]}>
          <button
            className={styles["like-btn"]}
            onClick={onLikeButtonClickHandler}
          >
            <img src={HeartIcon} alt="하트 로고" />
          </button>
        </div>
      </div>
    </article>
  );
}

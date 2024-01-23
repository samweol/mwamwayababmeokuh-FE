import styles from "./Post.module.scss";
import ProfileImage from "../../assets/images/image.png";
import EmptyHeartIcon from "../../assets/images/empty-heart.png";
import HeartIcon from "../../assets/images/heart.png";
import VerticalMore from "../../assets/images/more-vertical.png";
import useNavigatePage from "../../hooks/useNavigatePage";
import { useEffect, useState } from "react";
export default function Post(props) {
  const { post, line, onClickMoreButton } = props;
  const { navigatePage } = useNavigatePage();

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(post.liked);
  }, [post.liked]);

  return (
    <article className={`${styles["post-cont"]} ${line && styles.line}`}>
      <div
        className={styles["profile-img-cont"]}
        onClick={() => {
          navigatePage("/post/detail", { post });
        }}
      >
        <img
          className={styles["profile-img"]}
          src={ProfileImage}
          alt="유저의 프로필 이미지"
        />
      </div>
      <div className={styles["post-info-cont"]}>
        <div className={styles["post-header"]}>
          <div className={styles["post-user-info"]}>
            <span className={styles["user-nickname"]}>{post.userName}</span>
            <span className={styles["artis-badge"]}>{post.artist}</span>
            <span className={styles["post-time"]}>{post.updatedAt}</span>
          </div>
          <button className={styles["more-btn"]} onClick={onClickMoreButton}>
            <img src={VerticalMore} alt="더보기 로고" />
          </button>
        </div>
        <div className={styles["post-content"]}>
          <p>{post.content}</p>
          <ul className={styles["post-img-cont"]}>
            {post.images.map((item) => (
              <li key={item}>이미지</li>
            ))}
          </ul>
        </div>
        <div className={styles["button-cont"]}>
          <button
            className={styles["like-btn"]}
            onClick={() => {
              setLiked(!liked);
            }}
          >
            <img src={liked ? HeartIcon : EmptyHeartIcon} alt="하트 로고" />
          </button>
        </div>
      </div>
    </article>
  );
}

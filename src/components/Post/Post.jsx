import styles from "./Post.module.scss";
import ProfileImage from "../../assets/images/image.png";
import EmptyHeartIcon from "../../assets/images/empty-heart.png";
import HeartIcon from "../../assets/images/heart.png";
import VerticalMore from "../../assets/images/more-vertical.png";
import useNavigatePage from "../../hooks/useNavigatePage";
import { useEffect, useState } from "react";
import { elapsedTime } from "../../utils/index";
import { api } from "../../api/baseURL";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, userState } from "../../recoil/atom";

export default function Post(props) {
  const { post, line, onClickMoreButton } = props;
  const [liked, setLiked] = useState(false);

  const { navigatePage } = useNavigatePage();

  const user = useRecoilValue(userState);
  const setIsLoading = useSetRecoilState(loadingState);

  const fetchLike = async () => {
    try {
      setIsLoading(true);
      const resp = await api.get("/boards/posts/like", {
        params: {
          uid: user.uid,
          pid: post.pid,
        },
      });
      if (resp.data.isLiked) {
        setLiked(true);
      } else {
        setLiked(false);
      }
      console.log("🌟좋아요 여부 조회 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥좋아요 여부 조회 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLikeBtn = async () => {
    try {
      setIsLoading(true);
      if (liked) {
        const resp = await api.delete("/boards/posts/like", {
          data: {
            uid: user.uid,
            pid: post.pid,
          },
        });
        setLiked(false);
      } else {
        const resp = await api.post("/boards/posts/like", {
          uid: user.uid,
          pid: post.pid,
        });
        setLiked(true);
      }

      console.log("🌟좋아요 성공🌟");
    } catch (err) {
      console.error(err);
      console.log("🔥좋아요 실패🔥");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLike();
  }, [liked]);

  return (
    <article className={`${styles["post-cont"]} ${line && styles.line}`}>
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
            <span className={styles["user-nickname"]}>{post.nickname}</span>
            <span className={styles["artist-badge"]}>{post.name}</span>
            <span className={styles["post-time"]}>
              {elapsedTime(post.createdAt)}
            </span>
          </div>
          <button className={styles["more-btn"]} onClick={onClickMoreButton}>
            <img src={VerticalMore} alt="더보기 로고" />
          </button>
        </div>
        <div
          onClick={() => {
            navigatePage(`/post/detail/${post.pid}`, { post });
          }}
          className={styles["post-content"]}
        >
          <p>{post.content}</p>
          <ul className={styles.hashtagCont}>
            <li className={styles.hashtagItem}>
              <a>{post.hashtag}</a>
            </li>
          </ul>
          <ul className={styles["post-img-cont"]}>
            {post.images?.map((item) => (
              <li key={item}>이미지</li>
            ))}
          </ul>
        </div>
        <div className={styles["button-cont"]}>
          <button className={styles["like-btn"]} onClick={toggleLikeBtn}>
            <img src={liked ? HeartIcon : EmptyHeartIcon} alt="하트 로고" />
          </button>
        </div>
      </div>
    </article>
  );
}

import "./Post.scss";
import ProfileImage from "../../assets/images/image.png";
import HeartIcon from "../../assets/images/heart.png";
import VerticalMore from "../../assets/images/more-vertical.png";
import useNavigatePage from "../../hooks/useNavigatePage";
export default function Post(props) {
  const { line, onLikeButtonClickHandler } = props;
  const { navigatePage } = useNavigatePage();
  return (
    <article
      className={`post-cont ${line && "line"}`}
      onClick={() => {
        navigatePage("/post/detail");
      }}
    >
      <div className="profile-img-cont">
        <img
          className="profile-img"
          src={ProfileImage}
          alt="유저의 프로필 이미지"
        />
      </div>
      <div className="post-info-cont">
        <div className="post-header">
          <div className="post-user-info">
            <span className="user-nickname">삼</span>
            <span className="artis-badge">레드벨벳</span>
            <span className="post-time">8m</span>
          </div>
          <button className="more-btn">
            <img src={VerticalMore} alt="더보기 로고" />
          </button>
        </div>
        <div className="post-content">
          <p>
            예쁜 옷차림은 아름다운 일몰 풍경처럼 당신의 기분을 단숨에 끌어올려
            하루 종일 좋은 기분을 가져다 줄 수 있어요.
          </p>
          <ul className="post-img-cont">
            <li>이미지</li>
          </ul>
        </div>
        <div className="button-cont">
          <button className="like-btn" onClick={onLikeButtonClickHandler}>
            <img src={HeartIcon} alt="하트 로고" />
          </button>
        </div>
      </div>
    </article>
  );
}

import styles from "./NoneArtist.module.scss";
import Button from "../../../../components/Button/Button";
import useNavigatePage from "../../../../hooks/useNavigatePage";

export default function NoneArtist(props) {
  const { keyword } = props;
  const { navigatePage } = useNavigatePage();
  return (
    <article className={styles["noneartist-cont"]}>
      <p className={styles["noneartist-alert"]}>
        해당 아티스트가 존재하지 않습니다. <br /> 직접 추가해보세요!
      </p>
      <Button
        onClickHandler={() => {
          navigatePage("/signup/add-artist", { artist: keyword });
        }}
      >
        추가하기
      </Button>
    </article>
  );
}

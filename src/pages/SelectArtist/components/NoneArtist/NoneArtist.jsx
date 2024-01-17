import styles from "./NoneArtist.module.scss";
import Button from "../../../../components/Button/Button";

export default function NoneArtist() {
  return (
    <article className={styles["noneartist-cont"]}>
      <p className={styles["noneartist-alert"]}>
        해당 아티스트가 존재하지 않습니다. <br /> 직접 추가해보세요!
      </p>
      <Button>추가하기</Button>
    </article>
  );
}

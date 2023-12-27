import "./NoneArtist.scss";
import Button from "../../../../components/Button/Button";

export default function NoneArtist() {
  return (
    <article className="noneartist-cont">
      <p className="noneartist-alert">
        해당 아티스트가 존재하지 않습니다. <br /> 직접 추가해보세요!
      </p>
      <Button>추가하기</Button>
    </article>
  );
}

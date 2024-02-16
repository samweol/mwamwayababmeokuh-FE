import RankItem from "./RankItem";
import styles from "./Ranking.module.scss";

export default function Ranking(props) {
  const { rankingList, onClickHandler } = props;

  const rankItemList = rankingList?.map((item) => (
    <RankItem
      key={item}
      tag={item}
      onClickHandler={() => {
        onClickHandler(item);
      }}
    />
  ));

  return (
    <section className={styles.rankCont}>
      <h1>Rank for you</h1>
      <ol className={styles.rankList}>{rankItemList}</ol>
    </section>
  );
}

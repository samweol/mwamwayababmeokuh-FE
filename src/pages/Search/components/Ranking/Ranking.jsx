import RankItem from "./RankItem";
import styles from "./Ranking.module.scss";

export default function Ranking(props) {
  const { onClickHandler } = props;
  // 테스트 데이터
  const rankList = [
    { tag: "#뫄뫄야_밥먹자", post: 3221 },
    { tag: "#서영아_점심먹을시간", post: 3221 },
    { tag: "#마슐볼땐_슈크림", post: 3221 },
    { tag: "#방랑밥_레시피", post: 3221 },
    { tag: "#짬뽕맛집", post: 3221 },
  ];

  const rankItemList = rankList.map((item) => (
    <RankItem
      key={item.tag}
      tag={item.tag}
      posts={item.post}
      onClickHandler={() => {
        onClickHandler(item.tag);
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

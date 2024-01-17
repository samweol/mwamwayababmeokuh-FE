import styles from "./BottomTab.module.scss";

export default function BottomTab() {
  const tabList = [
    {
      title: "홈",
      url: "/home",
    },
    {
      title: "검색",
      url: "/search",
    },
    {
      title: "좋아요",
      url: "/like",
    },
    {
      title: "프로필",
      url: "/profile",
    },
  ];

  const tabListComponent = tabList.map((item, idx) => (
    <li key={idx} className={styles["tab-item"]}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  return (
    <nav className={styles.bottomtab}>
      <ul className={styles["tab-list"]}>{tabListComponent}</ul>
    </nav>
  );
}

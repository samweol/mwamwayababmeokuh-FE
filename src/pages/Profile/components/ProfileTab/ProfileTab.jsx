import styles from "./ProfileTab.module.scss";

export default function ProfileTab(props) {
  const { tabList, selected, onClickHandler } = props;
  const tabListComponent = tabList?.map((item) => (
    <li className={selected === item.label && styles.selected} key={item.id}>
      <button
        onClick={() => {
          onClickHandler(item.label);
        }}
      >
        {item.label}
      </button>
    </li>
  ));
  return <ul className={styles["tab-cont"]}>{tabListComponent}</ul>;
}

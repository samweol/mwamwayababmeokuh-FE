import styles from "./Button.module.scss";

export default function Button(props) {
  const {
    children,
    inversed,
    disabled,
    bottomFixed,
    size,
    flex,
    onClickHandler,
  } = props;
  return (
    <button
      disabled={disabled}
      className={`${styles.btn} ${inversed && styles.inversed} ${
        bottomFixed && styles["btn-bottom-fixed"]
      } ${disabled && styles.disabled} ${size ? styles[size] : styles.m} ${
        flex && styles.flex
      }`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

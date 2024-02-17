import styles from "./Modal.module.scss";

export default function Modal(props) {
  const { modalHeader, modalContent, modalLeftBtn, modalRightBtn } = props;
  return (
    <div className={styles.modalBg}>
      <div className={styles.modalCont}>
        <h1>{modalHeader}</h1>
        <span>{modalContent}</span>
        <div className={styles.buttonCont}>
          <button
            className={styles.cancel}
            onClick={modalLeftBtn.onClickHandler}
          >
            {modalLeftBtn.text}
          </button>
          <button
            className={styles.accept}
            onClick={modalRightBtn.onClickHandler}
          >
            {modalRightBtn.text}
          </button>
        </div>
      </div>
    </div>
  );
}

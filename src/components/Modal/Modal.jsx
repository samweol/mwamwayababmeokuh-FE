import styles from "./Modal.module.scss";

export default function Modal() {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modalCont}>
        <h1>게시물 삭제</h1>
        <span>정말로 이 게시물을 삭제하시겠습니까?</span>
        <div className={styles.buttonCont}>
          <button className={styles.cancel}>취소</button>
          <button className={styles.accept}>삭제</button>
        </div>
      </div>
    </div>
  );
}

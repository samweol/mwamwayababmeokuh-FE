import styles from "./BottomModal.module.scss";
import Button from "../Button/Button";
import { useRef } from "react";

export default function BottomModal(props) {
  const { menuList, closeModal } = props;
  const modalRef = useRef(null);

  return (
    <div
      className={styles.modalBg}
      onClick={(e) => {
        if (e.target !== modalRef.current) {
          closeModal();
        }
      }}
    >
      <ul ref={modalRef} className={styles.modalCont}>
        {menuList.map((item) => (
          <li
            className={styles.menuItem}
            key={item.key}
            onClick={item.onClickHandler}
          >
            {item.label}
          </li>
        ))}
        <li className={styles.cancelBtn}>
          <Button inversed={true} onClickHandler={closeModal}>
            Cancel
          </Button>
        </li>
      </ul>
    </div>
  );
}

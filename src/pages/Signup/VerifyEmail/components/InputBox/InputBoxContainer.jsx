import { useRef } from "react";
import InputBox from "./InputBox";
import styles from "./InputBox.module.scss";
export default function InputBoxContainer(props) {
  const { onChangeCode } = props;
  const inputBoxRef = useRef([]);
  const inputBoxRef2 = useRef([]);
  const inputBoxRef3 = useRef([]);
  const inputBoxRef4 = useRef([]);
  const inputBoxRef5 = useRef([]);
  const inputBoxRef6 = useRef([]);
  return (
    <section className={styles["inputbox-cont"]}>
      <InputBox
        ref={inputBoxRef}
        onChangeHandler={() => {
          onChangeCode(inputBoxRef.current.value);
          inputBoxRef2.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef2}
        onChangeHandler={() => {
          onChangeCode(inputBoxRef2.current.value);
          inputBoxRef3.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef3}
        onChangeHandler={() => {
          onChangeCode(inputBoxRef3.current.value);
          inputBoxRef4.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef4}
        onChangeHandler={() => {
          onChangeCode(inputBoxRef4.current.value);
          inputBoxRef5.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef5}
        onChangeHandler={() => {
          onChangeCode(inputBoxRef5.current.value);
          inputBoxRef6.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef6}
        onChangeHandler={() => {
          onChangeCode(inputBoxRef6.current.value);
        }}
      />
    </section>
  );
}

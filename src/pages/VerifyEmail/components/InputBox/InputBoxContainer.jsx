import { useRef } from "react";
import InputBox from "./InputBox";
import "./InputBox.scss";
export default function InputBoxContainer() {
  const inputBoxRef = useRef([]);
  const inputBoxRef2 = useRef([]);
  const inputBoxRef3 = useRef([]);
  const inputBoxRef4 = useRef([]);
  const inputBoxRef5 = useRef([]);
  const inputBoxRef6 = useRef([]);
  return (
    <section className="inputbox-cont">
      <InputBox
        ref={inputBoxRef}
        onChangeHandler={() => {
          inputBoxRef2.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef2}
        onChangeHandler={() => {
          inputBoxRef3.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef3}
        onChangeHandler={() => {
          inputBoxRef4.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef4}
        onChangeHandler={() => {
          inputBoxRef5.current.focus();
        }}
      />
      <InputBox
        ref={inputBoxRef5}
        onChangeHandler={() => {
          inputBoxRef6.current.focus();
        }}
      />
      <InputBox ref={inputBoxRef6} onChangeHandler={() => {}} />
    </section>
  );
}

import React from "react";
import styles from "./Empty.module.scss";

export default function Empty(props) {
  const { children } = props;
  return <article className={styles.emptyCont}>{children}</article>;
}

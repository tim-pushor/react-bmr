import React from "react";

import styles from "./FormRow.module.css";

const FormRow = (props) => {
  let spanClass;
  let divClass;

  if (props.activity) {
    spanClass=`${styles.label} ${styles['label__description']}`
    divClass=`${styles.formrow} ${styles['formrow__activity']}`
  } else {
    spanClass=styles.label;
    divClass=styles.formrow;
  }
  return <div className={divClass}>
      <span className={spanClass}>{props.label}</span>
      {props.children}</div>;
};

export default FormRow;

// return <div className={styles.formrow}>
// <span className={styles.label}>{props.label}</span>

import React from "react";

import styles from "./FormRow.module.css";

const FormRow = (props) => {
  return <div className={styles.formrow}>
      <span className={styles.label}>{props.label}</span>
      {props.children}</div>;
};

export default FormRow;

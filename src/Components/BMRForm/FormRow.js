import React from "react";

import styles from "./FormRow.module.css";

const FormRow = (props) => {
  return <div className={styles.formrow}>{props.children}</div>;
};

export default FormRow;

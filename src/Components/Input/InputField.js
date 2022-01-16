import React from "react";

import styles from "./InputField.module.css";

const InputField = (props) => {

  let inputClass;

  if (props.isValid === false) {
    inputClass=`${styles.input} ${styles.invalid}`
  } else {
    inputClass=styles.input;
  }
  return (
    <React.Fragment>
      <input
        onChange={(event) => {
          props.onUpdate(event.target.value);
        }}
        onBlur={() => {props.onBlur();}}
        value={props.value}
        className={inputClass}
        type="number"
      />
      <label>{props.label}</label>
    </React.Fragment>
  );
};

export default InputField;

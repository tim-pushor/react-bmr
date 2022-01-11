import React from "react";

import styles from "./InputField.module.css";

const InputField = (props) => {

    const changeHandler = (event) => {
        props.onUpdate(event.target.value);
    };
  return (
    <React.Fragment>
      <input onChange={changeHandler} className={styles.input} type="number"/>
      <label>{props.label}</label>
    </React.Fragment>
  );
};

export default InputField;

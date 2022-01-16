import React from "react";

import styles from "./SelectField.module.css";

const SelectField = (props) => {

    const changeHandler = (event) => {
        props.onUpdate(event.target.value);
    };
  return (
    <select className={styles.input} name="activity" onChange={changeHandler}>
      {props.data.map(x => <option key={x.desc} value={x.value}>{x.desc}</option>)}
  </select>
  );
};

export default SelectField;

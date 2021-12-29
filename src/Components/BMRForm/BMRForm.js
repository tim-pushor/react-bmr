import React, { useState } from "react";

import FormRow from "./FormRow";
import Imperial from "./Imperial";
import Metric from "./Metric";

import styles from "./BMRForm.module.css";

const BMRForm = () => {
  const [isImperial, setIsImperial] = useState(true);

  const imperialTabClass = isImperial
    ? styles["tab-active"]
    : styles["tab-inactive"];
  const metricTabClass = isImperial
    ? styles["tab-inactive"]
    : styles["tab-active"];

  const imperialClickHandler = () => {
    setIsImperial(true);
  };
  const metricClickHandler = () => {
    setIsImperial(false);
  };
  return (
    <form>
      <ul className={styles.tabs}>
        <li className={imperialTabClass} onClick={imperialClickHandler}>
          Imperial Units
        </li>
        <li className={metricTabClass} onClick={metricClickHandler}>
          Metric Units
        </li>
      </ul>
      <div className={styles["tab-content"]}>
        {isImperial && <Imperial />}
        {!isImperial && <Metric />}
      </div>
    </form>
  );
};

export default BMRForm;

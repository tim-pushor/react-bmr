import React, { useState } from "react";
import { BMR } from "../../lib/bmrlib.js";

import FormRow from "./FormRow";
import InputField from "../Input/InputField";
import SelectField from "../Input/SelectField";
import Imperial from "./Imperial";
import Metric from "./Metric";

import styles from "./BMRForm.module.css";

const BMRForm = () => {
  const [isImperial, setIsImperial] = useState(true);
  const [modifierDescription, setModifierDescription] = useState(
    BMR.modifiers[BMR.get_modifiers()[0]].desc
  )
  let years;

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
  const imperialStatsHandler = (data) => {
    console.log("imperial stats");
    console.log(data);
  };
  const metricStatsHandler = (data) => {};
  const yearsHandler = (value) => {
    console.log(`years: ${value}`);
  };
  const genderHandler = (value) => {
    console.log(`gender: ${value}`);
  };

  const genders = [
    { value: "0", desc: "Male" },
    { value: "1", desc: "Female" },
  ];
const activityLevelHandler = (data) => {
  console.log(`activity level: ${data}`);
  setModifierDescription(BMR.modifiers[data].desc);
};
  const modifiers = BMR.get_modifiers().map((X) => {
    return { value: X, desc: X };
  });

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
        {isImperial && <Imperial onUpdateStats={imperialStatsHandler} />}
        {!isImperial && <Metric onUpdateStats={metricStatsHandler} />}
      </div>
      <div className={styles["non-tab-content"]}>
        <FormRow label="Age:">
          <InputField label="years" onUpdate={yearsHandler} />
        </FormRow>
        <FormRow label="Gender:">
          <SelectField data={genders} onUpdate={genderHandler} />
        </FormRow>
        <FormRow label="Bodyfat:">
          <InputField label="%" />
        </FormRow>
        <FormRow label="Activity level:">
          <SelectField data={modifiers} onUpdate={activityLevelHandler}/>
        </FormRow>
        <FormRow activity={true} label="Description:">
          <span>{modifierDescription}</span>
        </FormRow>
      </div>
    </form>
  );
};

export default BMRForm;

import React from "react";

import FormRow from "./FormRow";
import InputField from "../Input/InputField";

const Imperial = (props) => {
    let height;
    let weight;

  const heightHandler = (value) => {
    console.log(`in heightHandler: ${value}`);
    height = value;
    props.onUpdateStats({
        height,
        weight 
    })
  };
  const weightHandler = (blah) => {
    console.log(`in weightHandler: ${blah}`);

  };

  return (
    <React.Fragment>
      <FormRow label="Height:">
        <InputField label="cm" onUpdate={heightHandler} />
      </FormRow>
      <FormRow label="Weight:">
        <InputField label="kg" onUpdate={weightHandler} />
      </FormRow>
    </React.Fragment>
  );
};

export default Imperial;

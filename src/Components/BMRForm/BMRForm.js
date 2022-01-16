import React, { useReducer, useContext } from "react";
import { BMR } from "../../lib/bmrlib.js";

import FormRow from "./FormRow";
import InputField from "../Input/InputField";
import SelectField from "../Input/SelectField";

import styles from "./BMRForm.module.css";
import ResultsContext from "../../store/results-context.js";

const debugForm = true;

const defaultFormState = {
  formIsValid: false,
  isImperial: false,
  gender: BMR.get_genders()[0],
  activityLevel: BMR.get_modifiers()[0],
  activityDesc: BMR.modifiers[BMR.get_modifiers()[0]].desc,
  age: "",
  ageIsValid: undefined,
  bodyfat: "",
  bodyfatIsValid: undefined,
  feet: "",
  feetIsValid: undefined,
  inches: "",
  inchesIsValid: undefined,
  pounds: "",
  poundsIsValid: undefined,
  cm: "",
  cmIsValid: undefined,
  kg: "",
  kgIsValid: undefined,
};

const validateAge = (value) => {
  if (/^\d+$/.test(value)) {
    let age = parseInt(value);
    if (age > 0 && age < 110) {
      return true;
    }
  }
  return false;
};

const validateFeet = (value) => {
  if (/^\d+$/.test(value)) {
    let feet = parseInt(value);
    if (feet > 0 && feet < 8) {
      return true;
    }
  }
  return false;
};
const validateInches = (value) => {
  const inches = parseFloat(value);
  if (!isNaN(inches) && inches > 0 && inches < 12) {
    return true;
  }
  return false;
};

const validateCm = (value) => {
  const cm = parseFloat(value);
  if (!isNaN(cm) && cm > 0 && cm < 300) {
    return true;
  }
  return false;
};

const validateKg = (value) => {
  const kg = parseFloat(value);
  if (!isNaN(kg) && kg > 0 && kg < 300) {
    return true;
  }
  return false;
};

const validatePounds = (value) => {
  const pounds = parseFloat(value);
  if (!isNaN(pounds) && pounds > 0 && pounds < 999) {
    return true;
  }
  return false;
};

const validateBodyfat = (value) => {
  if (value === "") {
    return true;
  }
  const bodyfat = parseFloat(value);
  if (!isNaN(bodyfat) && bodyfat > 0 && bodyfat < 100) {
    return true;
  }

  return false;
};

const validateForm = (obj) => {
  // console.log("Validating form");
  // console.log(obj);
  if (obj.ageIsValid && obj.bodyfatIsValid) {
    if (obj.isImperial) {
      if (obj.poundsIsValid && obj.inchesIsValid && obj.feetIsValid) {
        return true;
      }
    } else {
      if (obj.kgIsValid && obj.cmIsValid) {
        return true;
      }
    }
  }
  return false;
};

const formReducer = (state, action) => {
  if (debugForm) {
    console.log(action);
  }
  let newstate;
  switch (action.type) {
    case "VALIDATE_FIELDS": {
      if (state.isImperial) {
        newstate = {
          ...state,
          ageIsValid: validateAge(state.age),
          bodyfatIsValid: validateBodyfat(state.bodyfat),
          poundsIsValid: validatePounds(state.pounds),
          inchesIsValid: validateInches(state.inches),
          feetIsValid: validateFeet(state.feet),
        };
      } else {
        newstate = {
          ...state,
          ageIsValid: validateAge(state.age),
          bodyfatIsValid: validateBodyfat(state.bodyfat),
          cmIsValid: validateCm(state.cm),
          kgIsValid: validateKg(state.kg),
        };
      }
      break;
    }
    case "SET_AGE": {
      newstate = {
        ...state,
        age: action.value,
        ageIsValid: validateAge(action.value),
      };
      break;
    }
    case "AGE_BLUR": {
      newstate = {
        ...state,
        ageIsValid: validateAge(state.age),
      };
      break;
    }
    case "SET_KG": {
      newstate = {
        ...state,
        kg: action.value,
        kgIsValid: validateKg(action.value),
      };
      break;
    }
    case "KG_BLUR": {
      newstate = {
        ...state,
        kgIsValid: validateKg(state.kg),
      };
      break;
    }
    case "SET_POUNDS": {
      newstate = {
        ...state,
        pounds: action.value,
        poundsIsValid: validatePounds(action.value),
      };
      break;
    }
    case "POUNDS_BLUR": {
      newstate = {
        ...state,
        poundsIsValid: validatePounds(state.pounds),
      };
      break;
    }

    case "SET_CM": {
      newstate = {
        ...state,
        cm: action.value,
        cmIsValid: validateCm(action.value),
      };
      break;
    }
    case "CM_BLUR": {
      newstate = {
        ...state,
        cmIsValid: validateCm(state.cm),
      };
      break;
    }
    case "SET_INCHES": {
      newstate = {
        ...state,
        inches: action.value,
        inchesIsValid: validateInches(action.value),
      };
      break;
    }
    case "INCHES_BLUR": {
      newstate = {
        ...state,
        inchesIsValid: validateInches(state.inches),
      };
      break;
    }
    case "SET_FEET": {
      newstate = {
        ...state,
        feet: action.value,
        feetIsValid: validateFeet(action.value),
      };
      break;
    }
    case "FEET_BLUR": {
      newstate = {
        ...state,
        feetIsValid: validateFeet(state.feet),
      };
      break;
    }
    case "SET_BODYFAT": {
      newstate = {
        ...state,
        bodyfat: action.value,
        bodyfatIsValid: validateBodyfat(action.value),
      };
      break;
    }
    case "SET_ACTIVITY": {
      newstate = {
        ...state,
        activityLevel: action.value,
        activityDesc: BMR.modifiers[action.value].desc,
      };
      break;
    }
    case "BODYFAT_BLUR": {
      newstate = {
        ...state,
        bodyfatIsValid: validateBodyfat(state.bodyfat),
      };
      break;
    }
    case "SET_IMPERIAL": {
      newstate = {
        ...state,
        isImperial: true,
      };
      break;
    }
    case "SET_METRIC": {
      newstate = {
        ...state,
        isImperial: false,
      };
      break;
    }
    case "SET_GENDER": {
      newstate = {
        ...state,
        gender: action.value,
      };
      break;
    }
    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
  newstate.formIsValid = validateForm(newstate);
  return newstate;
};

const BMRForm = () => {
  const [formState, dispatchForm] = useReducer(formReducer, defaultFormState);
  const ctx = useContext(ResultsContext);

  const imperialTabClass = formState.isImperial
    ? styles["tab-active"]
    : styles["tab-inactive"];
  const metricTabClass = formState.isImperial
    ? styles["tab-inactive"]
    : styles["tab-active"];

  if (debugForm) {
    console.log(formState);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.formIsValid) {
      let data, bodyfatname, desc_base;

      if (formState.bodyfat === "") {
        bodyfatname = "unspecified";
      } else {
        bodyfatname = `${formState.bodyfat}%`;
      }

      desc_base = `${formState.age} year old ${formState.gender} with ${bodyfatname} bodyfat and ${formState.activityLevel} Activity Level `;

      data = {
        isMale: formState.gender === "Male",
        bodyfat: formState.bodyfat,
        age: formState.age,
        modifier: BMR.modifiers[formState.activityLevel].value,
      };
      if (formState.isImperial) {
        data = {
          ...data,
          height: formState.feet * 30.48 + formState.inches * 2.54,
          weight: formState.pounds * 0.453592,
          tag: `${formState.feet}'${formState.inches}'' ${formState.pounds}lb ${desc_base}`,
        };
      } else {
        data = {
          ...data,
          height: formState.cm,
          weight: formState.kg,
          tag: `${formState.cm}cm ${formState.kg}kg ${desc_base}`,
        };
      }
      console.log("DO IT!");
      console.log(data);
      ctx.update(data);
    } else {
      console.log("Invalid");
      dispatchForm({ type: "VALIDATE_FIELDS" });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <ul className={styles.tabs}>
        <li
          className={imperialTabClass}
          onClick={() => {
            dispatchForm({ type: "SET_IMPERIAL" });
          }}
        >
          Imperial Units
        </li>
        <li
          className={metricTabClass}
          onClick={() => {
            dispatchForm({ type: "SET_METRIC" });
          }}
        >
          Metric Units
        </li>
      </ul>
      <div className={styles["tab-content"]}>
        {formState.isImperial && (
          <React.Fragment>
            <FormRow label="Height:">
              <InputField
                label="ft"
                onUpdate={(value) => {
                  dispatchForm({ type: "SET_FEET", value: value });
                }}
                onBlur={() => {
                  dispatchForm({ type: "FEET_BLUR" });
                }}
                value={formState.feet}
                isValid={formState.feetIsValid}
              />
              <InputField
                label="in"
                onUpdate={(value) => {
                  dispatchForm({ type: "SET_INCHES", value: value });
                }}
                onBlur={() => {
                  dispatchForm({ type: "INCHES_BLUR" });
                }}
                value={formState.inches}
                isValid={formState.inchesIsValid}
              />
            </FormRow>
            <FormRow label="Weight:">
              <InputField
                label="lb"
                onUpdate={(value) => {
                  dispatchForm({ type: "SET_POUNDS", value: value });
                }}
                onBlur={() => {
                  dispatchForm({ type: "POUNDS_BLUR" });
                }}
                value={formState.pounds}
                isValid={formState.poundsIsValid}
              />
            </FormRow>
          </React.Fragment>
        )}
        {!formState.isImperial && (
          <React.Fragment>
            <FormRow label="Height:">
              <InputField
                label="cm"
                onUpdate={(value) => {
                  dispatchForm({ type: "SET_CM", value: value });
                }}
                onBlur={() => {
                  dispatchForm({ type: "CM_BLUR" });
                }}
                value={formState.cm}
                isValid={formState.cmIsValid}
              />
            </FormRow>
            <FormRow label="Weight:">
              <InputField
                label="kg"
                onUpdate={(value) => {
                  dispatchForm({ type: "SET_KG", value: value });
                }}
                onBlur={() => {
                  dispatchForm({ type: "KG_BLUR" });
                }}
                value={formState.kg}
                isValid={formState.kgIsValid}
              />
            </FormRow>
          </React.Fragment>
        )}
      </div>
      <div className={styles["non-tab-content"]}>
        <FormRow label="Age:">
          <InputField
            label="years"
            onUpdate={(value) => {
              dispatchForm({ type: "SET_AGE", value: value });
            }}
            onBlur={() => {
              dispatchForm({ type: "AGE_BLUR" });
            }}
            value={formState.age}
            isValid={formState.ageIsValid}
          />
        </FormRow>
        <FormRow label="Gender:">
          <SelectField
            data={BMR.get_genders().map((X) => {
              return { value: X, desc: X };
            })}
            onUpdate={(value) => {
              dispatchForm({ type: "SET_GENDER", value: value });
            }}
            value={formState.gender}
          />
        </FormRow>
        <FormRow label="Bodyfat:">
          <InputField
            label="%"
            onUpdate={(value) => {
              dispatchForm({ type: "SET_BODYFAT", value: value });
            }}
            onBlur={() => {
              dispatchForm({ type: "BODYFAT_BLUR" });
            }}
            value={formState.bodyfat}
            isValid={formState.bodyfatIsValid}
          />
        </FormRow>
        <FormRow label="Activity level:">
          <SelectField
            data={BMR.get_modifiers().map((X) => {
              return { value: X, desc: X };
            })}
            onUpdate={(value) => {
              dispatchForm({ type: "SET_ACTIVITY", value: value });
            }}
          />
        </FormRow>
        <FormRow activity={true} label="Description:">
          <span>{formState.activityDesc}</span>
        </FormRow>
      </div>
      <div className={styles.button}>
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
};

export default BMRForm;

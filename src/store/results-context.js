import React, { useState } from "react";

const default_state = {
  isBlank: true,
  isMale: undefined,
  weight: undefined,
  height: undefined,
  age: undefined,
  bodyfat: undefined,
  activitylevel: undefined,
  modifier: undefined,
  tag: undefined,
};

const default_context = {
  ...default_state,
  update: () => {},
};
const ResultsContext = React.createContext(default_context);

export const ResultsContextProvider = (props) => {
  const [statsState, setStatsState] = useState(default_state);

  return (
    <ResultsContext.Provider value={{ ...statsState, update: setStatsState }}>
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsContext;

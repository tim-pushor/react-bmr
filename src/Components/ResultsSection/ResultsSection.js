import React, { useContext } from "react";

import ContentBox from "../ContentBox/ContentBox";
import ResultsContext from "../../store/results-context";

const ResultsSection = () => {
  const ctx = useContext(ResultsContext);
  
  console.log(ctx);
  return (
    <ContentBox>
      <h1>Results</h1>
      isMale: {ctx.isMale}<br />
      height: {ctx.height}<br />
      weight: {ctx.weight}<br />
      age: {ctx.age}<br />
    </ContentBox>
  );
};

export default ResultsSection;

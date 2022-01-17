import React, { useContext } from "react";

import ContentBox from "../ContentBox/ContentBox";
import ResultsContext from "../../store/results-context";
import ResultsTable from "./ResultsTable";

import infoIcon from "../../assets/infoicon.png";

import styles from "./ResultsSection.module.css";

const ResultsSection = () => {
  const ctx = useContext(ResultsContext);

  console.log(ctx);
  const action = ctx.isBlank ? 'will enter' : 'entered';

  return (
    <ContentBox>
      <h1>Results</h1>
      {!ctx.isBlank && (
        <p>
          <strong>Results for: </strong>
          {ctx.tag}
        </p>
      )}
      <p>
        The following table displays the results of the BMR calculations from
        the information that you {action}. The first column is the name of the
        algorithm. The second column is the base energy required
        <em> while at rest</em>. The third column is the amount of energy
        required adjusted for the activity level that you specified. Click the
        information (
        <img className={styles["info-image"]} src={infoIcon} alt="Info Icon" />)
        icon for details on that particular algorithm. All numbers are in
        kilocalories (kcal).
      </p>
      <p>
        <strong>Note:</strong> some algorithms require a bodyfat measurement. If
        you did not enter one, the calculations will show <strong>N/A</strong>.
      </p>
      <ResultsTable />
    </ContentBox>
  );
};

export default ResultsSection;

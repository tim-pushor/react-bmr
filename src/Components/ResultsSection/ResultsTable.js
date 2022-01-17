import React, { useContext } from "react";

import ResultsContext from "../../store/results-context";
import { BMR } from "../../lib/bmrlib";

import styles from "./ResultsTable.module.css";
import infoImage from "../../assets/infoicon.png";

const ResultsTable = () => {
  const ctx = useContext(ResultsContext);

  return (
    <table className={styles.results}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Base BMR</th>
          <th>Adjusted</th>
        </tr>
      </thead>
      <tbody>
        {BMR.get_functions().map((X) => {
          const alg = BMR.functions[X];

          let base, adjusted;

          if (ctx.isBlank) {
            base = "N/A";
            adjusted = "N/A";
          } else if (alg.need_bf && ctx.bodyfat === "") {
            base = "N/A";
            adjusted = "N/A";
          } else {
            base = alg.calculate(ctx).toFixed(2);
            adjusted = (alg.calculate(ctx) * ctx.modifier).toFixed(2);
          }

          return (
            <tr>
              <td>
                <img src={infoImage} alt="Info" />
                {X}
              </td>
              <td>{base}</td>
              <td>{adjusted}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;

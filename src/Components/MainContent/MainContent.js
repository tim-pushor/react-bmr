import React from "react";

import styles from "./MainContent.module.css";
import BMRSection from "../BMRSection/BMRSection";
import ResultsSection from "../ResultsSection/ResultsSection";

const MainContent = () => {
  return (
    <section className={styles.content}>
      <div className={styles["content-left"]}>
        <BMRSection />
      </div>
      <div className={styles["content-right"]}>
        <ResultsSection />
      </div>
    </section>
  );
};

export default MainContent;

import React from "react";

import styles from "./ContentBox.module.css";

const ContentBox = (props) => {
  return <div className={styles.contentbox}>{props.children}</div>;
};

export default ContentBox;

import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          BMR Calculator v0.9.9 - Copyright &copy;2023&nbsp;
          <a href="https://www.linkedin.com/in/tim-pushor-ab501299/">
            Tim Pushor
          </a>
        </p>
        <p>
          Written in <a href="https://reactjs.org">React JS</a> - &nbsp;
          <a href="https://github.com/tim-pushor/react-bmr">Click here</a> to see
          the code
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import ContentBox from "../ContentBox/ContentBox";
import BMRForm from "../BMRForm/BMRForm";
// import styles from './BMRSection.module.css';

const BMRSection = () => {
  return (
    <ContentBox>
      <h1>Personal Information</h1>
      <p>
        Enter your information in the following form and then click&nbsp;
        <strong>Calculate</strong>. If you do not know your bodyfat percentage,
        leave that field blank. All of the other fields are mandatory.
      </p>
      <BMRForm />
    </ContentBox>
  );
};

export default BMRSection;

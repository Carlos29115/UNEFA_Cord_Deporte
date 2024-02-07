import React from "react";
import styles from "./FooterButtons.module.scss";
import { CustomButton } from "components";

const FooterButtons = ({ setActiveStep }: any) => {
  const handleNext = () => {
    setActiveStep((activeStep: any) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep: any) => activeStep - 1);
  };
  return (
    <footer className={styles["footer_content"]}>
      <CustomButton
        typeVariant="contained"
        label="Atras"
        onClick={() => {
          handleBack();
        }}
        className={styles["footer_content_back"]}
      />

      <CustomButton
        typeAction="submit"
        typeVariant="contained"
        label="Siguiente"
        onClick={() => {
          handleNext();
        }}
        className={styles["footer_content_next"]}
      />
    </footer>
  );
};

export default FooterButtons;

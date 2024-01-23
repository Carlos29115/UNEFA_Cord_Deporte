import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsIcon from "@mui/icons-material/Sports";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import PersonIcon from "@mui/icons-material/Person";
import {
  Stack,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomButton } from "components";
import React, { useState } from "react";
import FormStepOne from "./Steps/FormStepOne";

import styles from "./FormDashboard.module.scss";
import FormStepTwo from "./Steps/FormStepTwo";
import FormStepThree from "./Steps/FormStepThree";

const FormDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient(45deg, rgba(74,85,162,1) 0%, rgba(0,212,255,1) 53%, rgba(0,138,255,1) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient(45deg, rgba(74,85,162,1) 0%, rgba(0,212,255,1) 53%, rgba(0,138,255,1) 100%)",
    }),
  }));

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <PersonIcon />,
      2: <SchoolIcon />,
      3: <SportsIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient(45deg, rgba(74,85,162,1) 0%, rgba(0,212,255,1) 53%, rgba(0,138,255,1) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient(45deg, rgba(74,85,162,1) 0%, rgba(0,212,255,1) 53%, rgba(0,138,255,1) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const steps = [
    "Datos Personales",
    "Datos universitarios del estudiante atleta",
    "Datos deportivos del estudiante atleta",
  ];

  return (
    <>
      <form>
        {/* <Typography>Datos del estudiante</Typography> */}
        <Stack
          direction="column"
          spacing={3}
          justifyContent="center"
          maxWidth={1200}
        >
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            sx={{ marginTop: "15px" }}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 && <FormStepOne />}
          {activeStep === 1 && <FormStepTwo />}
          {activeStep === 2 && <FormStepThree />}
          <footer className={styles["footer_content"]}>
            {activeStep !== 0 && (
              <CustomButton
                typeVariant="contained"
                label="Atras"
                onClick={() => {
                  handleBack();
                }}
                className={styles["footer_content_back"]}
              />
            )}
            {activeStep !== steps.length - 1 && (
              <CustomButton
                typeVariant="contained"
                label="Siguiente"
                onClick={() => {
                  handleNext();
                }}
                className={styles["footer_content_next"]}
              />
            )}
          </footer>
        </Stack>
      </form>
    </>
  );
};

export default FormDashboard;

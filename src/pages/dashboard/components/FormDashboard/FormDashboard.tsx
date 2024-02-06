import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import SportsIcon from "@mui/icons-material/Sports";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
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
import React, { useState } from "react";
import FormStepOne from "./Steps/FormStepOne";

import FormStepThree from "./Steps/FormStepThree";
import FormStepTwo from "./Steps/FormStepTwo";

const FormDashboard = () => {
  const DEFAULT_VALUES = {
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    gender: "",
    stature: "",
    peso: "",
    dni: "",
    pasaporte: "",
    mobile: "",
    email: "",
    birthdate: "",
    placeOfBirth: "",
    directionRedes: "",
    shoeSize: "",
    monkeySize: "",
    flannelSize: "",
    direction_residence: "",
    fechaIngreso: "",
    career: "",
    semester: "",
    core: "",
    contactNumber: "",
    discipline_deportiva: "",
    age_started: "",
    direction_training: "",
    fieldArrayNacionality: [{ date: "", achievement: "" }] as any,
    fieldArrayInternacionality: [{ date: "", achievement: "" }] as any,
    stateSelection: "",
    nationalitySelection: "",
    universityEvent: "",
  };

  const [activeStep, setActiveStep] = useState(0);
  const [worldData, setWorldData] = useState(DEFAULT_VALUES);

  const handleNext = () => {
    setActiveStep((activeStep: any) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep: any) => activeStep - 1);
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
      4: <MedicalInformationIcon />,
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
    "Datos de salud del estudiante atleta",
  ];

  return (
    <>
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
        {activeStep === 0 && (
          <FormStepOne
            worldData={worldData}
            setWorldData={setWorldData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {activeStep === 1 && (
          <FormStepTwo
            worldData={worldData}
            setWorldData={setWorldData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {activeStep === 2 && (
          <FormStepThree
            worldData={worldData}
            setWorldData={setWorldData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
      </Stack>
    </>
  );
};

export default FormDashboard;

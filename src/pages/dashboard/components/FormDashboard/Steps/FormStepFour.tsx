import { Grid, Stack } from "@mui/material";
import { TextField, TextFieldSelect } from "components";
import { RULES } from "constants/index";
import { useAlert } from "hooks/useAlert";
import { useFormHook } from "hooks/useFormHook";
import { useState } from "react";

const DEFAULT_VALUES = {
  email: "",
  password: "",
};
const FormStepFour = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit, errors } = useFormHook(DEFAULT_VALUES);
  const { openAlert } = useAlert();

  const bloodTypes = [
    { id: "a+", name: "A+" },
    { id: "a-", name: "A-" },
    { id: "b+", name: "B+" },
    { id: "b-", name: "B-" },
    { id: "ab+", name: "AB+" },
    { id: "ab-", name: "AB-" },
    { id: "o+", name: "O+" },
    { id: "o-", name: "O-" },
  ];

  const disabilitys = {
    ajedrez: [
      {
        id: 1,
        name: "Auditivo",
      },
      {
        id: 2,
        name: "Fisica",
      },
      {
        id: 3,
        name: "Visual",
      },
    ],
    atletismo: [
      {
        id: 1,
        name: "11-13: Discapacidad visual",
      },
      { id: 2, name: "20:Discapacidad intelectual" },
      { id: 3, name: "31-38: Problemas de coordinacion" },
      {
        id: 4,
        name: "Acondroplasia",
      },
      {
        id: 5,
        name: "42-44: Afectación en extremidades inferiores sin protesis",
      },
      {
        id: 6,
        name: "45-47: Afectación en extremidades superiores",
      },
      {
        id: 7,
        name: "51-57: Sillas de ruedas",
      },
      {
        id: 8,
        name: "61-64: Afectación extremidades inferiores",
      },
    ],
    ciclismo: [
      {
        id: 1,
        name: "ciegos - con baja visión",
      },
      {
        id: 2,
        name: "LC1 - Discapacidad extremidades inferiores",
      },
      {
        id: 3,
        name: "LC2 - Discapacidad en una pierna pero puede pedalear con normalidad",
      },
      {
        id: 4,
        name: "LC3 - Discapacidad en los miembros inferiores",
      },
      {
        id: 5,
        name: "LC4 - Discapacidad severa - ambas extremidades",
      },
    ],
    esgrimaRuedas: [
      {
        id: 1,
        name: "1A - Sillas de ruedas - minusvalia en brazo",
      },
      {
        id: 2,
        name: "1B - Sillas de ruedas - minusvalia para flexionar brazos",
      },
      {
        id: 3,
        name: "2 - Silla de ruedas",
      },
      {
        id: 4,
        name: "3 - Silla de ruedas - no puede utilizar las piernas como ayuda",
      },
      {
        id: 5,
        name: "4 - Silla de ruedas - posibilidad de usar las piernas",
      },
    ],
    futbol: [
      {
        id: 1,
        name: "B1 - Ceguera total",
      },
      {
        id: 2,
        name: "FT5 - Limitaciones en las extremidades inferiores",
      },
      {
        id: 3,
        name: "FT6 - Dificultad de coordinación",
      },
      {
        id: 4,
        name: "FT7 - hemiplejicos - afectación en uno de los lados del cuerpo",
      },
      {
        id: 5,
        name: "FT8 - Deterioro",
      },
    ],
    judo: [
      {
        id: 1,
        name: "B1-  Ceguera total",
      },
      {
        id: 2,
        name: "B2 - Media",
      },
      {
        id: 3,
        name: "B3 - Poca visión",
      },
    ],
    levPesas: [
      {
        id: 1,
        name: "A1 - A4: Amputados",
      },
      {
        id: 2,
        name: "Mínima Minusvalía",
      },
      {
        id: 3,
        name: "Parálisis cerebral",
      },
      {
        id: 4,
        name: "Lesión medular",
      },
    ],
    natacion: [
      {
        id: 1,
        name: "S1- S10 : Discapacidad fisica - paralisis cerebral",
      },
      {
        id: 2,
        name: "S11 : Ceguera",
      },
      {
        id: 3,
        name: "S12 - S13:  Deficiencia visual",
      },
      {
        id: 4,
        name: "S14 : Discapacidad intelectual",
      },
    ],
    taekwondo: [
      {
        id: 1,
        name: "Auditivo",
      },
      {
        id: 2,
        name: "Fisica",
      },
      {
        id: 3,
        name: "Visual",
      },
    ],
    tenisRuedas: [
      {
        id: 1,
        name: "Auditivo",
      },
      {
        id: 2,
        name: "Fisica",
      },
      {
        id: 3,
        name: "Visual",
      },
    ],
    triatlon: [
      {
        id: 1,
        name: "PT1 - Paraplejia - tetraplejia - amputación de piernas",
      },
      {
        id: 2,
        name: "PT2 : Discapacidad fisica - paralisis cerebral - elevada",
      },
      {
        id: 3,
        name: "PT3 : Discapacidad fisica - paralisis cerebral - moderada",
      },
      {
        id: 4,
        name: "PT4 : Discapacidad fisica - paralisis cerebral - leve",
      },
      {
        id: 5,
        name: "PT5: Discapacidad visual total o parcial",
      },
    ],
    voleibolSentado: [
      {
        id: 1,
        name: "Amputación debajo de la rodilla",
      },
      {
        id: 2,
        name: "Amputación por encima de la rodilla - rigidez",
      },
    ],
  };

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      // const response = await getLoginServices({ data });
    } catch (error: any) {
      openAlert(error.response.data.msj, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldSelect
                name="bloodType"
                label="Tipo de sangre"
                control={control}
                variant="standard"
                options={bloodTypes}
                error={Boolean(errors.username)}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="isAllergic"
                label="Es alergico?"
                control={control}
                variant="standard"
                type="checkbox"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                name="Allergics"
                label="Especifique sus alergias"
                control={control}
                variant="standard"
                type="textArea"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                name="medication"
                label="Toma algun medicamento??"
                placeholder="Especifique"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                name="isDisability"
                label="Tiene alguna discapacidad??"
                control={control}
                variant="standard"
                type="radio"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="disability"
                label="Tipos de discapacidad"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>
          </Grid>
        </Stack>
      </form>
    </>
  );
};

export default FormStepFour;

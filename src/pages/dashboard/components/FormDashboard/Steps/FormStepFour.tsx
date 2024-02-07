import { Grid, Stack } from "@mui/material";
import { CustomButton, TextField, TextFieldSelect } from "components";
import SwitchField from "components/Fields/SwitchField";
import { RULES } from "constants/index";
import { useAlert } from "hooks/useAlert";
import { useFormHook } from "hooks/useFormHook";
import { useState } from "react";
import { disabilitys } from "./constants/disabilitys";
import styles from "./FormsSteps.module.scss";
import { estudiantesPost } from "services/estudiantes";

const DEFAULT_VALUES = {
  email: "",
  password: "",
};
const FormStepFour = ({
  handleNext,
  handleBack,
  worldData,
  setWorldData,
}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const { control, handleSubmit, errors, getValues } =
    useFormHook(DEFAULT_VALUES);
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

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      await estudiantesPost({ payload: { ...worldData, ...data } });
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
            <Grid item xs={12} sm={12}>
              <TextFieldSelect
                name="bloodType"
                label="Tipo de sangre"
                control={control}
                variant="standard"
                options={bloodTypes}
                error={Boolean(errors.bloodType)}
                errmsg={errors.bloodType}
                rules={RULES.required}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SwitchField
                name="isAllergic"
                label="¿Sufre de alguna alergia?"
                checked={checked}
                handleChecked={(e) => setChecked((prev) => !prev)}
                control={control}
                variant="standard"
                error={Boolean(errors.isAllergic)}
                errmsg={errors.isAllergic}
                rules={RULES.required}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              {getValues("isAllergic") && (
                <TextField
                  name="Allergics"
                  label="Especifique sus alergias"
                  control={control}
                  variant="standard"
                  type="textArea"
                  error={Boolean(errors.Allergics)}
                  errmsg={errors.Allergics}
                  rules={RULES.required}
                />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SwitchField
                name="isDisability"
                label="¿Tiene alguna discapacidad?"
                checked={checked2}
                handleChecked={(e) => setChecked2((prev) => !prev)}
                control={control}
                variant="standard"
                error={Boolean(errors.isDisability)}
                errmsg={errors.isDisability}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              {getValues("isDisability") && (
                <TextFieldSelect
                  name="disability"
                  label="Tipos de discapacidad"
                  control={control}
                  variant="standard"
                  options={disabilitys[worldData?.discipline_deportiva]}
                  type="text"
                  error={Boolean(errors.disability)}
                  errmsg={errors.disability}
                  rules={RULES.required}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="medication"
                label="Toma algun medicamento??"
                placeholder="Especifique"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.medication)}
                errmsg={errors.medication}
                rules={RULES.required}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <CustomButton
                    typeVariant="contained"
                    label="Atras"
                    onClick={async () => {
                      const data = await getValues();
                      setWorldData(data);
                      handleBack();
                    }}
                    className={styles["footer_content_back"]}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <CustomButton
                    typeAction="submit"
                    typeVariant="contained"
                    label="Registrar"
                    className={styles["footer_content_next"]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </form>
    </>
  );
};

export default FormStepFour;

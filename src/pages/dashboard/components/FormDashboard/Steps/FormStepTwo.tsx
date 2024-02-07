import { Grid, Stack } from "@mui/material";
import { CustomButton, TextField, TextFieldSelect } from "components";
import { RULES } from "constants/index";
import { useAlert } from "hooks/useAlert";
import { useFormHook } from "hooks/useFormHook";
import React, { useState } from "react";

const FormStepTwo = ({
  handleNext,
  handleBack,
  worldData,
  setWorldData,
}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit, errors, getValues } = useFormHook(worldData);
  const { openAlert } = useAlert();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await setWorldData((prev: any) => {
        return { ...prev, ...data };
      });
      handleNext();
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
            <Grid item xs={12} sm={4}>
              <TextField
                label="Fecha de ingreso a la universidad"
                name="fechaIngreso"
                control={control}
                variant="standard"
                type="date"
                labelProps={{ shrink: true }}
                error={Boolean(errors.fechaIngreso)}
                errmsg={errors.fechaIngreso}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="career"
                label="Carrera que cursa"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.career)}
                errmsg={errors.career}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="semester"
                label="Semestre en curso"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.semester)}
                errmsg={errors.semester}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField
                name="core"
                label="Núcleo o extensión donde cursa"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.core)}
                errmsg={errors.core}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="contactNumber"
                label="Numero de contacto telefónico del coordinador de carrera"
                control={control}
                variant="standard"
                error={Boolean(errors.contactNumber)}
                errmsg={errors.contactNumber}
                rules={RULES.cellphone}
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
                    label="Siguiente"
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

export default FormStepTwo;

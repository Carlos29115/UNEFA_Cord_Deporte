import { Grid, Stack } from "@mui/material";
import { TextField, TextFieldSelect } from "components";
import { RULES } from "constants/index";
import { useAlert } from "hooks/useAlert";
import { useFormHook } from "hooks/useFormHook";
import React, { useState } from "react";

const DEFAULT_VALUES = {
  email: "",
  password: "",
};
const FormStepTwo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit, errors } = useFormHook(DEFAULT_VALUES);
  const { openAlert } = useAlert();

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
            <Grid item xs={12} sm={4}>
              <TextField
                label="Fecha de ingreso a la universidad"
                name="fecha_ingreso"
                control={control}
                variant="standard"
                type="date"
                labelProps={{ shrink: true }}
                error={Boolean(errors.username)}
                errmsg={errors.username}
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
                error={Boolean(errors.username)}
                errmsg={errors.username}
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
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="core"
                label="Núcleo o extensión donde cursa"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField
                name="contact_number"
                label="Numero de contacto telefónico del coordinador de carrera"
                control={control}
                variant="standard"
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

export default FormStepTwo;

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
const FormStepOne = () => {
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
                name="primer_nombre"
                label="Primer Nombre"
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
                name="segundo_nombre"
                label="Segundo Nombre"
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
                name="primer_apellido"
                label="Primer Apellido"
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
                name="segundo_apellido"
                label="Segundo Apellido"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextFieldSelect
                name="gender"
                label="Genero"
                options={[
                  { id: "M", name: "Masculino" },
                  { id: "F", name: "Femenino" },
                ]}
                control={control}
                variant="standard"
                error={Boolean(errors.username)}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="stature"
                label="Estatura"
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
                name="Peso"
                label="Peso"
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
                name="DNI"
                label="Cedula de identidad"
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
                name="pasaporte"
                label="Pasaporte"
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
                name="mobile"
                label="Numero de telefono"
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
                name="email"
                label="Correo electronico"
                control={control}
                variant="standard"
                type="email"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="birthdate"
                label="Fecha de nacimiento"
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
                name="placeOfBirth"
                label="Lugar de nacimiento"
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
                name="direction_Redes"
                label="Dirección de redes sociales"
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
                name="shoe_size"
                label="Talla de zapatos"
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
                name="monkey_size"
                label="Talla de mono deportivo y chaqueta"
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
                name="flannel_size"
                label="Talla de franela o chemise"
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
                name="direction_residence"
                label="Dirección de domicilio"
                control={control}
                variant="standard"
                type="text"
                multiline={true}
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

export default FormStepOne;

import { Grid, Stack } from "@mui/material";
import { CustomButton, TextField, TextFieldSelect } from "components";
import { RULES } from "constants/index";
import { useAlert } from "hooks/useAlert";
import { useFormHook } from "hooks/useFormHook";
import React, { useState } from "react";
import FooterButtons from "./Components/FooterButtons/FooterButtons";

const FormStepOne = ({
  worldData,
  handleNext,
  handleBack,
  setWorldData,
}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit, errors } = useFormHook(worldData);
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
                name="primerNombre"
                label="Primer Nombre"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.primerNombre)}
                errmsg={errors.primerNombre}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="segundoNombre"
                label="Segundo Nombre"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.segundoNombre)}
                errmsg={errors.segundoNombre}
                // rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="primerApellido"
                label="Primer Apellido"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.primerApellido)}
                errmsg={errors.primerApellido}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="segundoApellido"
                label="Segundo Apellido"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.segundoApellido)}
                errmsg={errors.segundoApellido}
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
                error={Boolean(errors.gender)}
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
                error={Boolean(errors.stature)}
                errmsg={errors.stature}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="peso"
                label="Peso"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.peso)}
                errmsg={errors.peso}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="dni"
                label="Cedula de identidad"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.dni)}
                errmsg={errors.dni}
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
                error={Boolean(errors.pasaporte)}
                errmsg={errors.pasaporte}
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
                error={Boolean(errors.mobile)}
                errmsg={errors.mobile}
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
                error={Boolean(errors.email)}
                errmsg={errors.email}
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
                error={Boolean(errors.birthdate)}
                errmsg={errors.birthdate}
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
                error={Boolean(errors.placeOfBirth)}
                errmsg={errors.placeOfBirth}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="directionRedes"
                label="Dirección de redes sociales"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.directionRedes)}
                errmsg={errors.directionRedes}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                name="shoeSize"
                label="Talla de zapatos"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.shoeSize)}
                errmsg={errors.shoeSize}
                rules={RULES.required}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="monkeySize"
                label="Talla de mono deportivo y chaqueta"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.monkeySize)}
                errmsg={errors.monkeySize}
                rules={RULES.required}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="flannelSize"
                label="Talla de franela o chemise"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.flannelSize)}
                errmsg={errors.flannelSize}
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
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  {/* <CustomButton
                    typeVariant="contained"
                    label="Atras"
                    onClick={() => {
                      handleBack();
                    }}
                  /> */}
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

export default FormStepOne;

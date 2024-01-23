import { Grid, Stack } from "@mui/material";
import { TextField, TextFieldSelect } from "components";
import { RULES } from "constants/index";
import { useAlert } from "hooks/useAlert";
import { useFormHook } from "hooks/useFormHook";
import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";

const DEFAULT_VALUES = {
  email: "",
  password: "",
  fieldArrayNacionality: [] as any,
};
const FormStepThree = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit, errors, watch, getValues } =
    useFormHook(DEFAULT_VALUES);
  const { openAlert } = useAlert();

  const { fields, append } = useFieldArray({
    control,
    name: "fieldArrayNacionality",
  });

  const watchFieldArray = watch("fieldArrayNacionality");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

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
                name="discipline_deportiva"
                label="Disciplina deportiva"
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
                name="age_started"
                label="Año que empezó la practica deportiva"
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
                name="direction_training"
                label="Dirección del lugar de entrenamiento"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.username)}
                errmsg={errors.username}
                rules={RULES.required}
              />
            </Grid>
            <Grid item xs={12}>
              <label>
                Participaciones en competencias deportivas a nivel nacional
              </label>
            </Grid>
            {controlledFields.map((field, index) => {
              return (
                <Grid item xs={12} sm={12} key={field.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name={`fieldArrayNacionality.${index}.date`}
                        label="fecha"
                        control={control}
                        variant="standard"
                        type="date"
                        labelProps={{ shrink: true }}
                        // error={Boolean(
                        //   errors.fieldArrayNacionality?.[index]?.date
                        // )}
                        errmsg={errors.username}
                        rules={RULES.required}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name={`fieldArrayNacionality.${index}.achievement`}
                        label="Logro"
                        control={control}
                        variant="standard"
                        type="text"
                        error={Boolean(errors.username)}
                        errmsg={errors.username}
                        rules={RULES.required}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
            <button
              type="button"
              onClick={() => {
                if (fields.length <= 4) {
                  return append({
                    date: "1",
                    achievement: "2",
                  });
                }
              }}
            >
              Append
            </button>
            <button type="button" onClick={() => console.log(fields.length)}>
              data
            </button>

            <Grid item xs={12} sm={4}>
              <TextField
                name="contactNumber"
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

export default FormStepThree;

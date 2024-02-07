import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { CustomButton, TextField, TextFieldSelect } from "components";
import { RULES } from "constants/index";
import { useAlert } from "hooks/useAlert";
import { useFormHook } from "hooks/useFormHook";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";
//icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
//styles
import styles from "./FormsSteps.module.scss";
import { disciplines } from "./constants/disciplines";

const FormStepThree = ({
  handleNext,
  handleBack,
  worldData,
  setWorldData,
}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit, errors, watch, getValues } =
    useFormHook(worldData);
  const { openAlert } = useAlert();

  const {
    fields: fields1,
    append: append1,
    remove: remove1,
  } = useFieldArray({
    control,
    name: "fieldArrayNacionality",
  });

  const watchFieldArray1 = watch("fieldArrayNacionality");
  const controlledFields1 = fields1.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray1[index],
    };
  });

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control,
    name: "fieldArrayInternacionality",
  });

  const watchFieldArray2 = watch("fieldArrayInternacionality");
  const controlledFields2 = fields2.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray2[index],
    };
  });

  const presubmit = async (data: any) => {
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
      <form onSubmit={handleSubmit(presubmit)}>
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextFieldSelect
                name="discipline_deportiva"
                label="Disciplina deportiva"
                control={control}
                variant="standard"
                options={disciplines}
                error={Boolean(errors.discipline_deportiva)}
                errmsg={errors.discipline_deportiva}
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
                error={Boolean(errors.age_started)}
                errmsg={errors.age_started}
                rules={RULES.required}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                name="direction_training"
                label="Dirección del lugar de entrenamiento"
                control={control}
                variant="standard"
                type="text"
                error={Boolean(errors.direction_training)}
                errmsg={errors.direction_training}
                rules={RULES.required}
              />
            </Grid>
            <Grid item xs={12}>
              <label className={styles["sub_title"]}>
                Participaciones en competencias deportivas a nivel nacional
              </label>
            </Grid>
            {controlledFields1.map((field, index) => {
              return (
                <Grid item xs={12} sm={12} key={field.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
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
                        // errmsg={errors.username}
                        // rules={RULES.required}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name={`fieldArrayNacionality.${index}.achievement`}
                        label="Logro"
                        control={control}
                        variant="standard"
                        type="text"
                        // error={Boolean(errors.username)}
                        // errmsg={errors.username}
                        // rules={RULES.required}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={1}
                      className={styles["container_flex_center"]}
                    >
                      <button
                        type="button"
                        className={`${styles["icon"]} ${styles["delete_button"]}`}
                        onClick={() => {
                          remove1(index);
                        }}
                      >
                        <RemoveIcon />
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <button
                type="button"
                className={`${styles["add_button"]}`}
                onClick={() => {
                  if (fields1.length <= 4) {
                    return append1({
                      date: "",
                      achievement: "",
                    });
                  }
                }}
              >
                Añadir participación nacional
                <AddIcon />
              </button>
            </Grid>
            <Grid item xs={12}>
              <label className={styles["sub_title"]}>
                Participaciones en competencias deportivas a nivel internacional
              </label>
            </Grid>
            {controlledFields2.map((field, index) => {
              return (
                <Grid item xs={12} sm={12} key={field.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                      <TextField
                        name={`fieldArrayInternacionality.${index}.date`}
                        label="fecha"
                        control={control}
                        variant="standard"
                        type="date"
                        labelProps={{ shrink: true }}
                        // error={Boolean(
                        //   errors.fieldArrayNacionality?.[index]?.date
                        // )}
                        // errmsg={errors.username}
                        // rules={RULES.required}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name={`fieldArrayInternacionality.${index}.achievement`}
                        label="Logro"
                        control={control}
                        variant="standard"
                        type="text"
                        // error={Boolean(errors.username)}
                        // errmsg={errors.username}
                        // rules={RULES.required}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={1}
                      className={styles["container_flex_center"]}
                    >
                      <button
                        type="button"
                        className={`${styles["icon"]} ${styles["delete_button"]}`}
                        onClick={() => {
                          remove2(index);
                        }}
                      >
                        <RemoveIcon />
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <button
                type="button"
                className={styles["add_button"]}
                onClick={() => {
                  if (fields2.length <= 4) {
                    return append2({
                      date: "",
                      achievement: "",
                    });
                  }
                }}
              >
                Añadir participación internacional
                <AddIcon />
              </button>
            </Grid>
            {/* 
            <Grid item xs={12} sm={4}>
              <label className={styles["sub_title"]}>
                Pertenece a la selección del estado actualmente
              </label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="stateSelection"
                control={control}
              >
                <FormControlLabel value="si" control={<Radio />} label="Si" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} sm={4}>
              <label className={styles["sub_title"]}>
                Pertenece a la selección nacional actualmente
              </label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="nationalitySelection"
              >
                <FormControlLabel value="si" control={<Radio />} label="Si" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} sm={4}>
              <label className={styles["sub_title"]}>
                Participo en un evento deportivo a nivel universitario
              </label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="no"
                name="universityEvent"
              >
                <FormControlLabel value="si" control={<Radio />} label="Si" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid> */}
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
                  label="Siguiente"
                  className={styles["footer_content_next"]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </form>
    </>
  );
};

export default FormStepThree;

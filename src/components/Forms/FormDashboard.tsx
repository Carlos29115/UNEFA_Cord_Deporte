import React, { useState, useEffect } from "react";
import { TFormProps, TIconsList } from "types/index";
import { useFormHook } from "hooks/useFormHook";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { TextField, CustomButton, TextFieldSelect } from "components/index";
import { RULES } from "constants/index";
import styles from "styles/Layout.module.scss";
//import DateField from '../Fields/DateField';
import { getAllEducationsServices } from "services/EducationsServices";
import { saimeService } from "services/saime";
import { get } from "http";
import {
  getEstadosServices,
  getMunicipioServices,
  getParroquiaServices,
} from "services/estados";
import { createUsersServices } from "services/users";
import { getAllMaritalStatus } from "services/maritalStatus";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
const genderOptions = [
  {
    name: "Masculino",
    id: "M",
  },
  {
    name: "Femenino",
    id: "F",
  },
];

const optionsSelect = {
  nationalityOptions: [
    {
      name: "Venezolano",
      id: "V",
    },
    {
      name: "Extranjero",
      id: "E",
    },
  ],
};

const maritalStatusOptions = [
  {
    name: "Soltero(a)",
    id: 1,
  },
  {
    name: "Casado(a)",
    id: 2,
  },
  {
    name: "Viudo(a)",
    id: 3,
  },
  {
    name: "Divorciado(a)",
    id: 4,
  },
];

const FormRegister = ({
  onSubmit,
  loadingService,
  rowData,
  setCaptcha,
}: TFormProps) => {
  const { data } = rowData;

  const {
    control,
    errors,
    handleSubmit,
    clearErrors,
    setError,
    getValues,
    reset,
  } = useFormHook(data);
  const [dataSaime, setDataSaime] = useState({});

  const getSaime = async (identificationCard: string, nationality: number) => {
    try {
      const response = await saimeService({
        origen: nationality,
        cedula: identificationCard,
      } as any);

      const dataS = {
        firstName: response.data.data.message.primer_nombre,
        secondName: response.data.data.message.segundo_nombre,
        surname: response.data.data.message.primer_apellido,
        nationality: "V",
        identificationCard: response.data.data.message.cedula,
        birthDate: response.data.data.message.fecha_nacimiento,
        gender: response.data.data.message.sexo,
        secondSurName: response.data.data.message.segundo_apellido,
        email: getValues("email"),
        password: getValues("password"),
        password2: getValues("password2"),
        maritalStatusId: getValues("maritalStatusId"),
        cellPhone: getValues("cellPhone"),
        officePhone: getValues("officePhone"),
        homePhone: getValues("homePhone"),
        sex: getValues("sex"),
        rif: getValues("rif"),
        estadoId: getValues("estadoId"),
        municipioId: getValues("municipioId"),
        parroquiaId: getValues("parroquiaId"),
        direction: getValues("direction"),
        educationLevelId: getValues("educationLevelId"),
        profession: getValues("profession"),
        laborOrganization: getValues("laborOrganization"),
        post: getValues("post"),
      };

      setDataSaime(dataS);
    } catch (error: any) {


    }
  };

  const handleBlurPassword = () => {
    if (getValues("password") !== getValues("password2")) {
      setError("password2", {
        type: "igualdad",
        message: "contraseñas no son iguales",
      });
    } else {
      clearErrors();
    }
  };

  const handleOnBlur = () => {
    const cedula = getValues("identificationCard");
    const origen = getValues("nationality");
    if (cedula && origen) {

      getSaime(cedula, origen);
    }
  };

  const presubmit = async (dataSubmit: any) => {
    handleBlurPassword();
    await onSubmit(dataSubmit);
  };

  useEffect(() => {
    if (Object.keys(dataSaime).length) {
      reset({
        ...dataSaime,
      });
      getValues("identificationCard");
    }
  }, [dataSaime, data, reset]);

  //Estado Municipio Parroquia
  const [idEMP, setIdEMP] = useState<any>({
    estadoId: data.estadoId,
    municipioId: data.municipioId,
  });
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [parroquias, setParroquias] = useState([]);
  const [education, setEducation] = useState([]);

  const getAllEducations = async () => {
    try {
      const res = await getAllEducationsServices({ authRequire: true });
      setEducation(res.data.rows);
    } catch (err) {

    }
  };

  // const getAllMaritalStatusOptions = async () =>{
  //   try {
  //     const res = await getAllMaritalStatus({ authRequire: true });
  //     setMaritalStatus(res.data.rows);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const getEstados = async () => {
    try {
      const res = await getEstadosServices({ params: {}, authRequire: true });
      setEstados(res.data.rows);
    } catch (err) {


    }
  };

  const handleChangeEstado = (e: any) => {
    const estadoId = e.target.value;
    if (estadoId) {
      setIdEMP({ ...idEMP, estadoId });
    }
  };

  const getMunicipio = async (estadoId: number) => {
    const res = await getMunicipioServices({
      params: { estadoId },
      authRequire: true,
    });
    setMunicipios(res.data.rows);
  };

  const handleChangeMunicipio = (e: any) => {
    const municipioId = e.target.value;
    if (municipioId) {
      setIdEMP((prevState: any) => ({ ...prevState, municipioId }));
    }
  };

  function onChange(value: any) {
    setCaptcha(value);
  }

  const getParroquia = async (municipioId: any) => {
    try {
      const res = await getParroquiaServices({
        params: { municipioId },
        authRequire: true,
      });
      setParroquias(res.data.rows);
    } catch (error) {


    }
  };

  useEffect(() => {
    if (idEMP.estadoId) {
      getMunicipio(idEMP.estadoId);
    }
  }, [idEMP.estadoId]);

  useEffect(() => {
    if (idEMP.municipioId) {
      getParroquia(idEMP.municipioId);
    }
  }, [idEMP.municipioId]);

  useEffect(() => {
    getEstados();
    getAllEducations();
  }, []);

  const quiestionsForm = [
    {
      type:1,
      sm:4,
      xs:12,
      name: "email",
      label: "Correo",
      rules: "required",
      typeOf:"email",
    },
    {
      type: 2,
      sm: 4,
      xs: 12,
      name: "nationality",
      label: "Nacionalidad",
      rules: "required",
      options: "nationalityOptions",
    },
    {
      type:1,
      sm:4,
      xs:12,
      name: "password",
      label: "Contraseña",
      rules: "password",
    }
  ];

  return (
    <form
      onSubmit={handleSubmit(presubmit)}
      style={{ maxHeight: "90vh", overflowY: "auto", padding: "20px" }}
    >
      <Typography
        sx={{ textAlign: "center" }}
        className={styles["modules__header-title"]}
        component="h2"
      >
        Registrarse
      </Typography>
      <Stack
        direction="column"
        spacing={3}
        justifyContent="center"
        maxWidth={1200}
      >
        <Grid container spacing={4}>
          {/* {quiestionsForm.map(
            ({ type, sm, xs, name, label, rules, options, typeOf }: any) => {
              console.log(quiestionsForm);
              switch (type) {
                case 1:
                  return (
                    <Grid item xs={12} sm={4}>
                      <TextField
                        name={name}
                        label={label}
                        control={control}
                        variant="standard"
                        rules={(RULES as any)[rules]}
                        error={Boolean(errors.name)}
                        errmsg={errors.name}
                        type={typeOf}
                      />
                    </Grid>
                  );
                case 2:
                  return (
                    <Grid item xs={xs} sm={sm}>
                      <TextFieldSelect
                        name={name}
                        label={label}
                        control={control}
                        variant="standard"
                        rules={(RULES as any)[rules]}
                        options={(optionsSelect as any)[options]}
                      />
                    </Grid>
                  );
              }
            }
          )} */}
          <Grid item xs={12} sm={4}>
            <TextField
              name="email"
              label="Correo"
              control={control}
              variant="standard"
              rules={RULES.required}
              error={Boolean(errors.email)}
              errmsg={errors.email}
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="password"
              label="Contraseña"
              control={control}
              type="password"
              variant="standard"
              error={Boolean(errors.password)}
              errmsg={errors.password}
              rules={RULES.password}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="password2"
              label="Repetir Contraseña"
              control={control}
              handleBlur={handleBlurPassword}
              type="password"
              variant="standard"
              error={Boolean(errors.password2)}
              errmsg={errors.password2}
              rules={RULES.password}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFieldSelect
              name="nationality"
              label="Nacionalidad"
              control={control}
              variant="standard"
              defaultValue={data.identidentificationCardity}
              rules={RULES["required"]}
              options={optionsSelect["nationalityOptions"]}
              error={Boolean(errors.nationality)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="identificationCard"
              autoFocus
              focused={true}
              label="Cedula"
              handleBlur={handleOnBlur}
              control={control}
              variant="standard"
              rules={RULES.cedula}
              error={Boolean(errors.identificationCard)}
              errmsg={errors.identificationCard}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              name="firstName"
              label="Primer nombre"
              control={control}
              variant="standard"
              rules={RULES.names}
              error={Boolean(errors.firstName)}
              errmsg={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="secondName"
              label="Segundo nombre"
              control={control}
              variant="standard"
              rules={RULES.names}
              error={Boolean(errors.secondName)}
              errmsg={errors.secondName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="surname"
              label="Primer apellido"
              control={control}
              variant="standard"
              rules={RULES.names}
              error={Boolean(errors.surname)}
              errmsg={errors.surname}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="secondSurName"
              label="Segundo apellido"
              control={control}
              variant="standard"
              rules={RULES.names}
              error={Boolean(errors.secondSurName)}
              errmsg={errors.secondSurName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="birthDate"
              label="Fecha de nacimiento"
              control={control}
              variant="standard"
              type="date"
              labelProps={{ shrink: true }}
              rules={RULES.required}
              error={Boolean(errors.birthDate)}
              errmsg={errors.birthDate}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFieldSelect
              name="maritalStatusId"
              label="Estado Civil"
              control={control}
              variant="standard"
              rules={RULES.required}
              options={maritalStatusOptions}
              error={Boolean(errors.maritalStatusId)}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              name="cellPhone"
              label="Telefono Movil"
              control={control}
              variant="standard"
              rules={RULES.cellphone}
              error={Boolean(errors.cellPhone)}
              errmsg={errors.cellPhone}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              name="officePhone"
              label="Telefono de oficina"
              control={control}
              variant="standard"
              rules={RULES.cellphone}
              error={Boolean(errors.officePhone)}
              errmsg={errors.officePhone}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              name="homePhone"
              label="Telefono de hogar"
              control={control}
              variant="standard"
              rules={RULES.cellphone}
              error={Boolean(errors.homePhone)}
              errmsg={errors.homePhone}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFieldSelect
              name="sex"
              label="Sexo"
              control={control}
              variant="standard"
              rules={RULES.required}
              options={genderOptions}
              error={Boolean(errors.sex)}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              name="rif"
              label="RIF"
              control={control}
              variant="standard"
              rules={RULES.required}
              error={Boolean(errors.rif)}
              errmsg={errors.rif}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFieldSelect
              name="estadoId"
              variant="standard"
              control={control}
              options={estados}
              label="Estados"
              error={Boolean(errors.estado)}
              itemLabel="nombre"
              rules={RULES.required}
              handleChange={handleChangeEstado}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextFieldSelect
              name="municipioId"
              variant="standard"
              control={control}
              options={municipios}
              label="Municipios"
              error={Boolean(errors.municipio)}
              itemLabel="nombre"
              handleChange={handleChangeMunicipio}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextFieldSelect
              name="parroquiaId"
              variant="standard"
              control={control}
              options={parroquias}
              label="Parroquias"
              error={Boolean(errors.parroquiaId)}
              itemLabel="nombre"
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              name="direction"
              label="Dirección"
              control={control}
              variant="standard"
              rules={RULES.required}
              error={Boolean(errors.direction)}
              errmsg={errors.direction}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextFieldSelect
              name="educationLevelId"
              label="Nivel de educacion"
              control={control}
              variant="standard"
              rules={RULES.required}
              options={education}
              error={Boolean(errors.educationLevelId)}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              name="profession"
              label="Profesión"
              control={control}
              variant="standard"
              rules={RULES.required}
              error={Boolean(errors.profession)}
              errmsg={errors.profession}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              name="laborOrganization"
              label="Nombre de la empresa"
              control={control}
              variant="standard"
              rules={RULES.required}
              error={Boolean(errors.laborOrganization)}
              errmsg={errors.laborOrganization}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="post"
              label="Cargo que desempeña"
              control={control}
              variant="standard"
              rules={RULES.required}
              error={Boolean(errors.post)}
              errmsg={errors.post}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ReCAPTCHA
              style={{ display: "flex", justifyContent: "center" }}
              sitekey="6LcOrj4nAAAAAKpCo99WVG4y_n4i3TK8pwD8f6ma"
              onChange={onChange}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            sx={{ display: "flex" }}
            justifyContent={"center"}
          >
            <CustomButton
              label="Registrar"
              typeVariant="outlined"
              typeAction="submit"
              disabled={loadingService}
            />
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: 'flex' }} justifyContent={'center'} >
            <NavLink to="/iniciar-sesion" end>
              Iniciar Sesion
            </NavLink>
          </Grid>
        </Grid>
      </Stack >
    </form >
  );
};

export default FormRegister;

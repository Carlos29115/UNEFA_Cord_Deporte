import React, { useState, useEffect } from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { TFormProps, TIconsList } from 'types/index';
import { useFormHook } from 'hooks/useFormHook';
import styles from './FormUsuarios.module.scss';
import { TextFieldSelect, TextField } from '../Fields';

import { CustomButton } from 'components/CustomButton';

const options = [
  {
    id: '1',
    name: 'Super Usuario'
  },
  {
    id: '3',
    name: 'Presidente de Ente'
  },
  {
    id: '4',
    name: 'Delegado'
  }
];

const FormUsuarios = ({ onSubmit, loadingService, rowData }: TFormProps) => {
  const { data, isNewRecord } = rowData;
  const [entesOption, setEntesOptions] = useState([]);

  const { control, errors, handleSubmit } = useFormHook(data);

  //id correp nombre lastname ente cedula rol

  //presidente delegado administrador
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          spacing={3}
          justifyContent="center"
          maxWidth={550}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                type="email"
                label="Correo"
                control={control}
                variant="standard"
                error={Boolean(errors.username)}
                errmsg={errors.username}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="password"
                label="Contraseña"
                type="password"
                control={control}
                variant="standard"
                error={Boolean(errors.password)}
                errmsg={errors.password}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="Nombre"
                control={control}
                variant="standard"
                error={Boolean(errors.username)}
                errmsg={errors.username}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Apellido"
                control={control}
                variant="standard"
                error={Boolean(errors.username)}
                errmsg={errors.username}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="identity"
                label="Cédula"
                control={control}
                variant="standard"
                error={Boolean(errors.username)}
                errmsg={errors.username}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextFieldSelect
                name="ente"
                label="Ente"
                control={control}
                variant="standard"
                error={Boolean(errors.username)}
                options={entesOption}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextFieldSelect
                name="role"
                label="Rol"
                control={control}
                variant="standard"
                error={Boolean(errors.username)}
                options={options}
              />
            </Grid>
          </Grid>

          <CustomButton
            label={isNewRecord ? 'Crear' : 'Actualizar'}
            typeVariant="outlined"
            typeAction="submit"
            disabled={loadingService}
          />
        </Stack>
      </form>
    </div>
  );
};

export default FormUsuarios;

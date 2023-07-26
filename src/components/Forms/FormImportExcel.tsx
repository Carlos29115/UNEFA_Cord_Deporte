import React, { useEffect, useState } from 'react';
import { TFormProps } from 'types/index';
import { useFormHook } from 'hooks/useFormHook';
import { Stack } from '@mui/material';
import { TextField, CustomButton, TextFieldSelect } from 'components/index';
import { RULES } from 'constants/index';

import { searchItemLocal } from 'utils/helpers';
const FormImportExcel = ({ onSubmit, loadingService, rowData }: TFormProps) => {
  const dataUser = searchItemLocal('dataUser');
  const [entesOption, setEntesOptions] = useState([]);
  const { control, errors, handleSubmit } = useFormHook(rowData);
  /* 
  useEffect(
    () => {
      reset({ ...rowData });
    },
    [rowData]
  ); */


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <TextField
          name="dateStart"
          label="Fecha Inicio"
          control={control}
          labelProps={{ shrink: true }}
          type="date"
          variant="standard"
          rules={RULES.required}
          error={Boolean(errors.dateStart)}
          errmsg={errors.dateStart}
        />
        <TextField
          name="dateEnd"
          label="Fecha Fin"
          control={control}
          type="date"
          variant="standard"
          labelProps={{ shrink: true }}
          rules={RULES.required}
          error={Boolean(errors.dateEnd)}
          errmsg={errors.dateEnd}
        />

        <TextFieldSelect
          name="enteId"
          label="Ente"
          control={control}
          variant="standard"
          error={Boolean(errors.username)}
          options={entesOption}
          disabled={dataUser.userRole.roleId === 1 ? false : true}
        />

        <CustomButton
          label={'Exportar A Excel'}
          typeVariant="outlined"
          typeAction="submit"
          disabled={loadingService}
        />
      </Stack>
    </form>
  );
};

export default FormImportExcel;

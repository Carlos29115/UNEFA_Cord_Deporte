import { OptionsObject, useSnackbar } from 'notistack';
import { useCallback } from 'react';

const defaultOptions: OptionsObject = {
  variant: 'success',
  anchorOrigin: { horizontal: 'center', vertical: 'bottom' }
};

export const useAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  /**
   * Dispara una nueva alerta
   * @param message : string
   * @param variant : success | error | warning | info
   * @returns string
   */

  const openAlert = useCallback(
    (message: string, options?: OptionsObject) =>
      enqueueSnackbar(message, { ...defaultOptions, ...options }),
    [enqueueSnackbar]
  );

  return {
    openAlert
  };
};

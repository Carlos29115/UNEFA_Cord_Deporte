import { useForm } from 'react-hook-form';

export const useFormHook = (DEFAULT_VALUES: unknown = {}) => {
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
    getValues,
    setError,
    clearErrors,
    watch,
    reset
  } = useForm({ defaultValues: DEFAULT_VALUES as any });

  const handleBlurPassword = () => {
    if (getValues('password') !== getValues('password2')) {
      setError('password2', {
        type: 'igualdad',
        message: 'contraseñas no son iguales'
      });
    } else {
      clearErrors();
    }
  };

  return {
    handleSubmit,
    control,
    getValues,
    setError,
    clearErrors,
    watch,
    reset,
    errors,
    handleBlurPassword,
    isSubmitSuccessful
  };
};

import { useState, useEffect } from "react";

import {
  CustomButton,
  TextField,
  TextFieldAutoC,
  TextFieldSelect,
} from "components/index";
import { RULES, localToken, recoverToken } from "constants/index";
import styles from "./Register.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormHook } from "hooks/useFormHook";
import { Stack } from "@mui/material";
import { resetPasswordServices } from "services/resetear";
import { useAlert } from "hooks/useAlert";
import { searchItemLocal, setItemLocal } from "utils/helpers";
import NAVIGATION from "routes/navigation";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";

const DEFAULT_VALUES = {
  password: "",
  password2: "",
};
const Resetear = () => {
  const { resetToken } = useParams();
  const [captcha, setCaptcha] = useState(null);
  const token = searchItemLocal(localToken);
  const navigate = useNavigate();
  const { openAlert } = useAlert();
  const {
    control,
    handleSubmit,
    handleBlurPassword,
    errors,
    setError,
    clearErrors,
  } = useFormHook(DEFAULT_VALUES);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    handleBlurPassword();
    delete data.password2
    try {
      setIsLoading(true);
      setItemLocal(recoverToken, resetToken);
      const response = await resetPasswordServices({
        data: data,
        authRequire: true,
      });
      navigate(NAVIGATION.LOGIN);
    } catch (error: any) {
      openAlert(error.response.data.errors[0].message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  function onChange(value: any) {
    setCaptcha(value);
  }

  useEffect(() => {
    if (token) navigate(NAVIGATION.HOME);
  }, [token, navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.topWrapper}>
        <h3 className={styles.title}>Ingrese nueva contraseña</h3>
      </div>
      <div>
        <div className={styles.group}>
          <TextField
            name="password"
            label="Nueva Contraseña"
            control={control}
            type="password"
            variant="standard"
            error={Boolean(errors.password)}
            errmsg={errors.password}
            rules={RULES.required}
          />
        </div>
        <div className={styles.group}>
          <TextField
            name="password2"
            label="Repetir Contraseña"
            type="password"
            handleBlur={handleBlurPassword}
            control={control}
            variant="standard"
            error={Boolean(errors.password2)}
            errmsg={errors.password2}
            rules={RULES.required}
          />
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <CustomButton
          label="Enviar"
          typeVariant="outlined"
          typeAction="submit"
          disabled={isLoading}
        />
      </div>

      <div className={styles.olvido}>
        <NavLink to="/iniciar-sesion" end>
          Iniciar Sesion
        </NavLink>
      </div>
    </form>
  );
};

export default Resetear;

import { useState, useEffect } from 'react';
import { RULES, localToken } from 'constants/index';
import styles from './Register.module.scss';
import { useFormHook } from 'hooks/useFormHook';

import { sendEmailServices } from 'services/resetear';
import { useAlert } from 'hooks/useAlert';
import { searchItemLocal } from 'utils/helpers';
import NAVIGATION from 'routes/navigation';
import { useNavigate } from 'react-router';
import ReCAPTCHA from 'react-google-recaptcha';
import { NavLink } from 'react-router-dom';

import {
  CustomButton,
  TextField,
  TextFieldAutoC,
  TextFieldSelect,
} from "components/index";

const DEFAULT_VALUES = {
  email: ''
};
const Recuperar = () => {
  const [captcha, setCaptcha] = useState(null);
  const token = searchItemLocal(localToken);
  const navigate = useNavigate();
  const { openAlert } = useAlert();
  const { control, handleSubmit, errors } =
    useFormHook(DEFAULT_VALUES);
  const [isLoading, setIsLoading] = useState<boolean>(false);




  const onSubmit = async (data: any) => {

    if (captcha !== null) {
      try {
        setIsLoading(true);
        await sendEmailServices({ data });
      } catch (error: any) {
        openAlert(error.response.data.errors[0].message, { variant: "error" });
      } finally {
        setIsLoading(false);
      }
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
        <h2 className={styles.title}>¿Olvidó su contraseña?</h2>
        <div className={styles.subtitle}>
          No se preocupe, le enviamos un correo con las instrucciones
        </div>
      </div>
      <div>
        <div className={styles.group}>
          <TextField
            name="email"
            label="Correo"
            control={control}
            variant="standard"
            error={Boolean(errors.username)}
            errmsg={errors.username}
            rules={RULES.required}
          />
        </div>

        <div className={styles.captchaWrapper}>
          <ReCAPTCHA
            sitekey="6LcOrj4nAAAAAKpCo99WVG4y_n4i3TK8pwD8f6ma"
            onChange={onChange}
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

export default Recuperar;

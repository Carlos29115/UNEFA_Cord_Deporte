import { useState, useEffect, useRef } from "react";
import style from "./Login.module.scss";
import { CustomButton, TextField } from "components/index";
import { RULES, localToken } from "constants/index";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormHook } from "hooks/useFormHook";
import { Stack } from "@mui/material";
import { getLoginServices } from "services/auth";
import { useAlert } from "hooks/useAlert";
import { searchItemLocal, setItemLocal } from "utils/helpers";
import NAVIGATION from "routes/navigation";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const DEFAULT_VALUES = {
  email: "",
  password: "",
};
const Login = () => {
  const [captcha, setCaptcha] = useState(null);
  const token = searchItemLocal(localToken);
  const navigate = useNavigate();
  const { openAlert } = useAlert();
  const { control, handleSubmit, errors } = useFormHook(DEFAULT_VALUES);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    if (captcha !== null) {
      try {
        setIsLoading(true);
        const response = await getLoginServices({ data });
        setItemLocal(localToken, response?.data?.token);
      } catch (error: any) {
        openAlert(error.response.data.msj, { variant: "error" });
      } finally {
        setIsLoading(false);
      }
    } else {
      openAlert("complete el reCAPTCHA", { variant: "error" });
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
      <Stack spacing={3}>
        <Stack spacing={1} alignItems={'center'} justifyContent={'center'} className={style.containerTittle}>
          <h1>Coordinacion de Deporte</h1>
          <p>Inicia sesión para continuar</p>
        </Stack>
        <TextField
          name="email"
          label="Correo"
          control={control}
          variant="standard"
          type="email"
          error={Boolean(errors.username)}
          errmsg={errors.username}
          rules={RULES.required}
        />

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

        {/* <div className={"buttonWrapper"}>
          <ReCAPTCHA
            sitekey="6LcOrj4nAAAAAKpCo99WVG4y_n4i3TK8pwD8f6ma"
            onChange={onChange}
          />
        </div> */}

        <CustomButton
          label="Iniciar Sesion"
          typeVariant="outlined"
          typeAction="submit"
          disabled={isLoading}
          className={style.buttonLogin}
        />
      </Stack>
      <div
        className={"olvido"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <NavLink to="/recuperar" end className={style.recoverPassword}>
          ¿Olvido su contraseña?
        </NavLink>
      </div>

      {/* <div
        className={"olvido"}
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <NavLink to="/registrar" end>
          Registrar
        </NavLink>
      </div> */}
    </form>
  );
};

export default Login;

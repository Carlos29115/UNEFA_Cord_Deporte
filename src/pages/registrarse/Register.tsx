import { useState, useEffect } from "react";

import {
  CustomButton,
  FormRegister,
  TextField,
  TextFieldAutoC,
  TextFieldSelect,
} from "components/index";
import { RULES, localToken } from "constants/index";
import styles from "./Register.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormHook } from "hooks/useFormHook";
import { Stack } from "@mui/material";
import { getRegisterServices } from "services/auth";

import { useAlert } from "hooks/useAlert";
import { searchItemLocal, setItemLocal } from "utils/helpers";
import NAVIGATION from "routes/navigation";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const initialDatarow = {
  id: "",
  email: "",
  firstName: "",
  secondName: "",
  surname: "",
  secondSurName: "",
  birthDate: "",
  maritalStatusId: "",
  cellPhone: "",
  sex: "",
  rif: "",
  parroquiaId: "",
  officePhone: "",
  homePhone: "",
  educationLevelId: "",
  profession: "",
  laborOrganization: "",
  post: "",
  nationality: "V",
  identificationCard: "",
  password: "",
  password2: "",
  direction: "",
  estadoId: "",
  municipioId: "",
};

const Register = () => {
  const [loadingService, setLoadingService] = useState<boolean>(false);
  const [entesOptions, setEntesOptions] = useState([]);
  const [captcha, setCaptcha] = useState(null);
  const token = searchItemLocal(localToken);
  const navigate = useNavigate();
  const { openAlert } = useAlert();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [rowData, setRowData] = useState({
    data: initialDatarow,
    isNewRecord: true,
  });

  const onSubmit = async (data: any) => {
    if (captcha !== null) {
      try {
        delete data.password2;
        const { email, password, ...restData } = data;
        const datos = {
          user: { email, password },
          pi: restData,
        };
        setIsLoading(true);
        await getRegisterServices({ datos });
        openAlert("Se registro exitosamente");
        navigate("/iniciar-sesion", { replace: true });
      } catch (error) {
        const err = error as any;

        openAlert(err.response.data.msj, {
          variant: "error",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      openAlert("complete el reCAPTCHA", { variant: "error" });
    }
  };

  useEffect(() => {
    if (token) navigate(NAVIGATION.HOME);
  }, [token, navigate]);

  return (
    <>
      <FormRegister
        onSubmit={onSubmit}
        rowData={rowData}
        loadingService={loadingService}
        setCaptcha={setCaptcha}
        captcha={captcha}
      />
    </>
  );
};

export default Register;

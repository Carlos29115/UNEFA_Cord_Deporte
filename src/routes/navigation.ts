// @PREXIs
export const PREFIX_DASHBOARD = "/dashboard";
export const PREFIX_ADMIN = "/administracion";

// @NAVIGATION
export const NAVIGATION = {
  HOME: `${PREFIX_DASHBOARD}`,
  LOGIN: `/iniciar-sesion`,
  USUARIOS: `${PREFIX_DASHBOARD}/usuarios`,

  RECUPERAR: "recuperar",
  RESETEAR: "resetear/:resetToken",
  // REGISTER
  REGISTER: "/registrar",
  PERFIL: `${PREFIX_DASHBOARD}/perfil`,
};
export default NAVIGATION;

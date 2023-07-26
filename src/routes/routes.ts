import { TRoute } from "types";
import { typeRouteEnum } from "lib/enums";
import { NAVIGATION } from "./navigation";
import Login from "pages/login/Login";
import Dashboard from "pages/dashboard/Dashboard";
import Usuarios from "pages/usuarios/Usuarios";
import Resetear from "pages/resetear/Resetear";
import Perfil from "pages/perfil/Perfil";
import Register from "pages/registrarse/Register";
import Recuperar from "pages/recuperar/Recuperar";

/*
import Recover from 'pages/recover/Recover';
import Register from 'pages/register/Register'; */

export const routes: TRoute[] = [
  {
    label: "Principal",
    path: NAVIGATION.HOME,
    component: Dashboard,
    typeRoute: typeRouteEnum.PRIVATE,
  },
  {
    label: "Principal",
    path: NAVIGATION.RECUPERAR,
    component: Recuperar,
    typeRoute: typeRouteEnum.PUBLIC,
  },
  {
    label: "Principal",
    path: NAVIGATION.RESETEAR,
    component: Resetear,
    typeRoute: typeRouteEnum.PUBLIC,
  },
  {
    label: "Usuarios",
    path: NAVIGATION.USUARIOS,
    component: Usuarios,
    typeRoute: typeRouteEnum.PRIVATE,
  },
  {
    label: "iniciar-sesion",
    path: NAVIGATION.LOGIN,
    component: Login,
    typeRoute: typeRouteEnum.PUBLIC,
  },
  {
    label: "perfil",
    path: NAVIGATION.PERFIL,
    typeRoute: typeRouteEnum.PRIVATE,
    component: Perfil,
  },
  {
    label: "Registrarse",
    path: NAVIGATION.REGISTER,
    component: Register,
    typeRoute: typeRouteEnum.PUBLIC,
  },
];

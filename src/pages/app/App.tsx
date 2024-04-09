import React, { useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

/* @Utils */

import { routes } from "routes";
import { TRoute } from "types";
import { typeRouteEnum } from "lib/enums";
import NAVIGATION from "routes/navigation";
import { MainLayout, PublicLayout, Page404 } from "components/index";

const App: React.FC = () => {
  const clearCache = () => {
    const script = document.querySelector('script[src*="reCAPTCHA"]');

    // If the script element exists, remove it from the DOM
    if (script) {
      document.body.removeChild(script);
    }
  };

  const navigate = useNavigate();
  const accessPublic = [
    typeRouteEnum.PUBLIC,
    typeRouteEnum.COMPOSED,
  ] as string[];
  const accessPrivate = [
    typeRouteEnum.PRIVATE,
    typeRouteEnum.COMPOSED,
  ] as string[];

  /*   /* Verificar token 
    useEffect(() => {
      dispatch(reloadingBrowser());
    }, [dispatch]); */

  useEffect(() => {
    clearCache();
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate(NAVIGATION.HOME);
    }
  }, [navigate]);
  /* 
    useEffect(() => {
      if (!isEmpty(user?.cedula) && isAuthenticated)
        dispatch(userDataWorker({ cedula: user?.cedula }));
    }, [dispatch, user, isAuthenticated]); */

  return (
    <>
      <Routes>
        {/* Rutas privadas */}
        <Route element={<MainLayout />}>
          {routes
            .filter((route: TRoute) =>
              accessPrivate.includes(route?.typeRoute as string)
            )
            .map((route: TRoute) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
        </Route>
        {/* Rutas publicas */}
        <Route element={<PublicLayout />}>
          {routes
            .filter((route: TRoute) =>
              accessPublic.includes(route?.typeRoute as string)
            )
            .map((route: TRoute) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
        </Route>
        {/* Rutas no encontradas */}
        <Route
          path="*"
          element={window.location.pathname !== "/" && <Page404 />}
        />
      </Routes>
    </>
  );
};

export default App;

import { Outlet, useLocation } from "react-router-dom";
import styles from "./Login.module.scss";
import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import fondo from "img/fondoUnefa.jpg";
import { Grid } from "@mui/material";

const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [classPage, setClassPage] = useState(false);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/registrar") {
      setClassPage(true);
    } else {
      setClassPage(false);
    }
  }, [location]);

  return (
    <div className={styles.app}>
      <Grid container direction={"row"} className={styles.background}>
        <Grid item md={5}>
          <div
            className={classPage ? styles.registerClass : styles.centerWrapper}
          >
            <div className={styles.containerChildrens}>
              {children ? children : <Outlet />}
            </div>
          </div>
        </Grid>
        <Grid item md={7} className={styles.containerImage} sx={{background: `url(${fondo})no-repeat center center`}}>
        </Grid>
      </Grid>
    </div>
  );
};

export default PublicLayout;

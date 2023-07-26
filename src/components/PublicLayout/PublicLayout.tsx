import { Outlet, useLocation } from "react-router-dom";
import styles from "./Login.module.scss";
import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import banner from "img/banner.jpg";

const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [classPage, setClassPage] = useState(false);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/registrar") {
      setClassPage(true)

    } else {
      setClassPage(false)
    }
  }, [location]);

  return (
    <div className={styles.app}>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#005b9a",
        }}
      >
        <figure
          style={{
            backgroundColor: "#005b9a",
            width: "56.5rem",
            margin: "0",
            height: "70px",
          }}
        >
          <img src={banner} alt="" style={{ width: "100%", height: "70px" }} />
        </figure>
      </header>
      <div className={styles.background}>
        <div
          className={classPage ? styles.registerClass : styles.centerWrapper}
        >
          <div>{children ? children : <Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;

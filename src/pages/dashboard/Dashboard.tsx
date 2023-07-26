
import React from "react";
import styles from "styles/Layout.module.scss";

import {

  CardNormal,

} from "components/index";



const Dashboard = () => {




  return (
    <section>
      <div className={styles["modules__header"]}>
        {/*   <Typography className={styles["page-title"]} component="h1">
          {dataUser ? dataUser?.userRole?.ente?.name : "Dashboard"}
        </Typography> */}
      </div>
      <CardNormal>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <p style={{ fontSize: '20px' }}>Gracias por registrarte</p>
          <p style={{ fontSize: '20px' }}> Proximamente aca estara habilitado el registro para tu postulacion en los premios nacionales</p>
        </div>
      </CardNormal>


    </section>
  );
};

export default Dashboard;

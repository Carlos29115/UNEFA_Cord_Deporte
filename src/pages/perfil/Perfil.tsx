import { Typography } from '@mui/material';
import { CardNormal } from 'components';
import React from 'react';
import styles from 'styles/Layout.module.scss';

const Perfil = () => {
  return (
    <section className={styles['modules__header2']}>
      <div style={{ width: '100%' }}>
        <CardNormal>
          <Typography className="page-title" component="h1">
            PERFIL
          </Typography>
          <p>Perfil</p>
        </CardNormal>
      </div>
    </section>
  );
};

export default Perfil;

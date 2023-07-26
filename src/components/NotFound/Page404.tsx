import React from 'react';
import { makeStyles } from '@mui/styles';
import { Helmet } from 'react-helmet-async';
/* @Images */
import Error404 from 'img/error_404.jpg';
import Error404_1 from 'img/error_404-1.jpg';


import { PREFIX_DASHBOARD } from 'routes/navigation';

const myStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gap: '30px',
    minHeight: '100vh',
  },
  main: {
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto',
    justifyContent: 'center',
    gap: '20px',
  },
  image: {
    height: '350px',
    justifySelf: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontFamily: "'Abril Fatface', cursive",
  
    letterSpacing: '1px',
  },
  link: {
    color: '#333',
    textDecoration: '#333',
    textDecorationLine: 'underline',
  },
});

const Page404 = () => {
  const classes = myStyles();
  return (
    <>
      <Helmet>
        <title>SAMINCYT - Página no encontrada</title>
      </Helmet>
      <section className={classes.root}>
        <main>
          <div className={classes.main}>
            <h1 style={{ fontSize: '30px' }} className={classes.titulo}>
              Página no encontrada
            </h1>

            {Math.random() <= 0.5 ? (
              <img
                className={classes.image}
                src={Error404}
                alt='Pagina no encontrada'
              />
            ) : (
              <img
                className={classes.image}
                src={Error404_1}
                alt='Pagina no encontrada'
              />
            )}
            <p style={{ fontSize: '24px' }} className={classes.titulo}>
              Lo sentimos, pero la página que busca no la encontramos o no
              existe{' '}
            </p>
            <p style={{ fontSize: '24px' }} className={classes.titulo}>
              Volver a{' '}
              <a className={classes.link} href={PREFIX_DASHBOARD}>
                {' '}
                Inicio
              </a>
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Page404;

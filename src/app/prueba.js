'use client';

import Head from 'next/head';
import styles from './page.module.css';
import Navbar from '../../components/NavBar';
import { CONTENT_ESP, CONTENT_EN } from '../../public/content';
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'


export default function Home() {
  const [lightTheme, setLightTheme] = useState(true);
  const myTitles = ["FrontEnd", "UX Enginneer", "Software Engineer", "Developer"];

  const [index, setIndex] = useState(0);
  const [valor, setValor] = useState(false);

  useEffect(() => {
    const tick = () => setIndex(i => i + 1);
    console.log("AAAa", index);
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [index]);

  const handleClick = () => {
    console.log("Holis");
    setIndex(index => index + 1)
    setValor(false)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>

        <section className={`${styles.MainSection} ${lightTheme ? styles.darkTheme : styles.hidden}`}>

          <Grid container className={styles.info}>
            <Grid item xs={12} md={6} lg={4} >
              <h1 className={styles.rainbowText}>Montoya Montes P.</h1>
              <h1 className={styles.rainbowText}>{myTitles[index % myTitles.length]}</h1>
              <h1>{index}</h1>
              {valor ? <h1>AAAAA</h1> : <h1>BBBB</h1>}
              <button onClick={() => handleClick()}> click</button>

              <h1 className={styles.titleSection}>{CONTENT_ESP?.home?.main?.title}</h1>
              <p>{CONTENT_ESP?.home?.main?.p}</p>
            </Grid>

          </Grid>

          <div className={styles.blur}>
          </div>
        </section>

        <section className={`${styles.section} ${lightTheme ? styles.darkTheme : styles.hidden}`}>
          <div className={styles.info}>
            <h2 className={styles.titleSection}>About</h2>
            <p>This is the about page of my website.</p>
          </div>
        </section>

        <section className={`${styles.section} ${lightTheme ? styles.darkTheme : styles.hidden}`}>
          <div className={styles.info}>

            <h2 className={styles.titleSection}>Contact</h2>
            <p>This is the contact page of my website.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 My Company</p>
      </footer>
    </div>
  );
}

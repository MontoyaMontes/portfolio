'use clisent';
import Head from 'next/head';
import styles from './page.module.css';
import React, { useEffect, useState, useRef } from "react";
import Grid from '@mui/material/Grid'
import { CONTENT } from '../../../public/content';
import "/src/app/globals.css"
import { Button, IconButton } from '@mui/material';
import { ArrowDownward, CloudDownload, GitHub, LinkedIn } from '@mui/icons-material';
import CardProject from '../../../components/Card';
import Skills from '../../../components/Skills';
import Link from 'next/link';
import Navbar from '../../../components/NavBar';

export default function Prueba() {
    const [lightTheme, setLightTheme] = useState(true);
    const myTitles = ["FrontEnd Developer", "Software Developer", "Software Engineer", "UX/UI Enginneer"];
    const [index, setIndex] = useState(0);
    const [CURRENT_CONTENT, SET_CURRENT_CONTENT] = useState(CONTENT.ESP)

    useEffect(() => {
        const tick = () => setIndex(i => i + 1);
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [index]);

    const myRef = useRef(null)

    return (

        <div className={styles.container}>
            <Head>
                <title>Montoya Montes</title>
            </Head>
            <Navbar />

            <main className={styles.main}>

                <section id="home" className={`${styles.MainSection} ${lightTheme ? styles.darkTheme : styles.hidden}`}>

                    <div className={styles.info}>
                        <div className={styles.titleMain}>
                            <a href="https://www.linkedin.com/in/pedro-montoya-montes-8480501a3/" target="__blank" >
                                <IconButton>
                                    <LinkedIn className={styles.home__social_icon} />
                                </IconButton>
                            </a>

                            <a href="https://github.com/MontoyaMontes/" target="__blank" className={styles.home__social_icon}>
                                <IconButton >
                                    <GitHub className={styles.home__social_icon} />
                                </IconButton>
                            </a>
                            <div className={styles.containerRawinbown}>
                                <h1 className={styles.rainbowText}>Montoya Montes</h1>
                                <h1 className={styles.rainbowText}>{myTitles[index % myTitles.length]}</h1>
                            </div>

                        </div>
                        <h1 className={styles.titleSection}>{CURRENT_CONTENT?.home?.section.main?.title}</h1>
                        <p className={styles.subtitle}>{CURRENT_CONTENT?.home?.section.main?.subtitle}</p>

                        <div className={styles.containter_btn_start}>
                            <Button size='large' variant='contained' color='primary' href="#about" scroll="false" endIcon={<ArrowDownward />}>Empezar</Button>
                        </div>


                    </div>
                    <div className={styles.blur} />


                </section>

                <section id="about" refProp={myRef} className={`${styles.section} ${lightTheme ? styles.darkTheme : styles.hidden}`}>
                    <div className={styles.info}>
                        <Grid container>

                            <Grid item xs={12} md={8}>
                                <h2 className={styles.titleSection}>{CURRENT_CONTENT?.home?.section.aboutme?.title}</h2>
                                <p className={styles.subtitle}>{CURRENT_CONTENT?.home?.section.aboutme?.subtitle1}</p>
                                <p className={styles.subtitle}>{CURRENT_CONTENT?.home?.section.aboutme?.subtitle2}</p>
                                <p className={styles.subtitle}>{CURRENT_CONTENT?.home?.section.aboutme?.subtitle3}</p>

                            </Grid>

                            <Grid item xs={12} md={4}>
                                <img className={styles.profile_container}
                                    alt='profile picture'
                                    src="/profile1.png"
                                />

                                <div className={styles.containter_btn} >
                                    <Button variant='contained' color='primary' startIcon={<CloudDownload />} download="montoya_cv.pdf" href="/pdf/CV_v3_6.pdf"> Descargar CV</Button>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </section>

                <section id="projects" className={`${styles.section} ${lightTheme ? styles.darkTheme : styles.hidden}`}>
                    <div className={styles.info}>
                        <h2 className={styles.titleSection}>{CURRENT_CONTENT?.home?.section.projects?.title}</h2>
                        <p className={styles.subtitle}>{CURRENT_CONTENT?.home?.section.projects?.subtitle}</p>

                        <Grid container spacing={2}>
                            {CURRENT_CONTENT?.projects?.map(project => {
                                return (<Grid item xs={12} sm={6} md={3} key={project.title}>
                                    <CardProject
                                        title={project.title}
                                        date={project.date}
                                        image={project.image}
                                        text={project?.text}
                                        fulltext={project?.fulltext}
                                        link={project.link}
                                        src={project.src} />
                                </Grid>)
                            })}
                        </Grid>
                    </div>
                </section>

                <section id="skills" className={`${styles.section} ${lightTheme ? styles.darkTheme : styles.hidden}`}>
                    <div className={styles.info}>
                        <h2 className={styles.titleSection}>{CURRENT_CONTENT?.home?.section.skills?.title}</h2>
                        <p>{CURRENT_CONTENT?.home?.section?.skills.subtitle}</p>

                        <h1>{CURRENT_CONTENT?.home?.section?.skills.subsection1}</h1>

                        <div className={styles.skills__container}>

                            {CURRENT_CONTENT?.skillsSet?.map((skill) => {
                                return (
                                    <Skills title={skill.title} fields={skill.data} key={skill.title} id={skill.id} />
                                )
                            })}

                        </div>

                        {/* <h3>{CURRENT_CONTENT?.home?.section?.skills.subsection2}</h3> */}

                    </div>
                </section>

                <section id="contact" className={`${styles.section} ${lightTheme ? styles.darkTheme : styles.hidden}`}>
                    <div className={styles.info}>

                        <h2 className={styles.titleSection}>{CURRENT_CONTENT?.home?.section.contact?.title}</h2>
                        <p className={styles.subtitle}>{CURRENT_CONTENT?.home?.section.contact?.subtitle}</p>

                        <ul>
                            <li>
                                <Link href="mailto:montoyamontespi@gmail.com">
                                    Correo electrónico
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/pedro-montoya-montes-8480501a3">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/montoyamontes">
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* <section className={`${styles.section} ${lightTheme ? styles.darkTheme : styles.hidden}`}>
                    <div className={styles.info}>

                    </div>
                </section> */}

            </main>

            <footer className={styles.footer}>
                <p>© 2023 Montoya Montes montoyamontespi@gmail.com</p>
            </footer>
        </div >
    );
}

export const CONTENT = {
    ESP: {
        home: {
            section: {
                main: {
                    title: "Hola Mundo! Soy Montoya M.",
                    subtitle: "Soy desarrollaror FrontEnd e ingeniero UX, me gusta resolver problemas y programar.",
                },
                skills: {
                    title: "Mis habilidades y cursos",
                    subtitle: "",
                    subsection1: "Habilidades",
                    subsection2: "Cursos",
                },
                projects: {
                    title: "Mis proyectos",
                    subtitle: "Algunos proyetos que he realizado"
                },
                aboutme: {
                    title: "Sobre mi",
                    subtitle1: "Soy estudiante de ciencias de la computación (UNAM), Ingeniero de Software e ingeniero UX.",
                    subtitle2: "Actualmente trabajo como desarrollador FrontEnd utilizando React+JS",
                    subtitle3: "Me gusta aprender, sé inglés, esperanto y estoy aprendiendo japones, también tengo cursos de programación desde Bootstrap, asando por UX por google, inglés para el trabajo hasta Concurrencia en GO."
                },
                contact: {
                    title: "Contactame!",
                    subtitle: "Mis redes"
                }

            }
        },
        projects: [
            { title: "Portafolio web 1", date: "21/03/22", image: "/images/proyecto0.png", text: "Portafolio web 1.0,", fulltext: "Proyecto personal, para implementar CCS+HTML+JS+PHP, se implementó diseño funcional movil y web, con cambio de tema de obscuro-claro", link: "https://montoyamontes.github.io/personal-website/" },
            { title: "Diseño App", date: "01/06/2022", image: "/images/proyecto1.png", text: "Diseño de app de cine", fulltext: "Proyecto para el curso de Google UX: Se implenentó lo aprendido en diseño UX para una app, de venta de dulces de cine", link: "https://montoyamontes.github.io/personal-website/", src: "pdf/Project1.pdf" },
            { title: "Diseño login", date: "01/07/2022", image: "/images/proyecto2.png", text: "Diseño de login a página web", fulltext: "Proyecto para el curso de Google UX: Diseño de login de una plataforma de estudios", link: "https://montoyamontes.github.io/personal-website/", src: "pdf/Project2.pdf" },
            { title: "Diseño Wapplet", date: "01/01/23", image: "/images/proyecto3.png", text: "Diseño Wapplet", fulltext: "Proyecto para el curso de Google UX: Diseño de una app de ahorros, aplicando todo lo aprendido", link: "https://montoyamontes.github.io/personal-website/", src: "pdf/Project3.pdf" },
        ],
        skillsSet: [
            {
                title: "FrontEnd", data: [
                    { label: "HTML", progress: "100" },
                    { label: "CSS", progress: "90" },
                    { label: "React", progress: "90" },
                    { label: "Vue", progress: "40" },
                    { label: "TypeScript", progress: "80" },
                    { label: "SCSS/LASS/LESS", progress: "80" },
                    { label: "Figma", progress: "90" },
                ]
            },
            {
                title: "BackEnd", data: [
                    { label: "SQL", progress: "70" },
                    { label: "MongoDB", progress: "80" },
                    { label: "REST", progress: "80" },
                    { label: "MariaDB", progress: "60" },
                ]
            },
            {
                title: "Lenguajes de programaciónn", data: [
                    { label: "JavaSccript", progress: "90" },
                    { label: "TypeScript", progress: "85" },
                    { label: "Java", progress: "80" },
                    { label: "Python", progress: "90" },
                    { label: "Go", progress: "80" },
                    { label: "Racket", progress: "60" },
                ]
            },
        ],

    },

}

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Configuración básica de i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        h1Index1: "Welcome to my personal website",
        pIndex1: "Here you will find a brief summary about me, my certifications, and my projects.",
        btnIndex: "Explore",

        h2About1: "About Me",
        pAbout1: "Welcome to my portfolio website!",
        pAbout2: "I am a passionate full-stack developer with over 3 years of industry experience, where I also serve as an ESB integration architect. Throughout my journey, I have had the privilege of working on challenging projects that have expanded my expertise in backend development and provided me with opportunities to explore cutting-edge technologies and innovative solutions.",
        pAbout3: "Over this time, I've contributed to significant projects that have reinforced my focus on backend development and allowed me to acquire valuable skills in API creation and management.",
        pAbout4: "My journey into the world of development began with the 'Lasso' project, where I immersed myself in the exciting realm of backend using JavaScript. I brought my skills to the table in API creation and management, as well as working with IBM technologies for sensor integration and data lakes.",
        pAbout5: "During my involvement in the 'Artifence' project, I led the project coordination as a Project Manager, collaborated on backend development in Node.js, and also had the opportunity to deploy a comprehensive local server. This allowed me to apply my technical experience and leadership to ensure project success from planning to execution.",
        pAbout6: "My commitment to excellence is reflected in my focus on creating clean and scalable code. Additionally, I collaborate with multidisciplinary teams, working alongside designers and frontend developers to achieve seamless integration. I leverage effective communication platforms to ensure efficient collaboration and smooth communication.",
        pAbout7: "My technical skills range from a strong command of JavaScript and Node.js for backend development to a deep experience in Java, Python, and database management, including MongoDB and MySQL. Moreover, I have worked with platforms like Virustotal, AbuseIPDB, URLhaus, among others, for API implementation and web services.",
        pAbout8: "My motivation lies in tackling complex challenges and solving them through logic and programming. My dedication to problem-solving sets me apart, and I'm always seeking creative ways to overcome obstacles.",
        btnAbout1: "Download CV",

        h2Certifications1: "My Certifications",
        pCertifications1: "Error retrieving data:",

        h2Contact1: "Contact Me",
        pContact1: "You can reach me through the form below or by using the links to my profiles on LinkedIn and GitHub",
        labelContact1: "Name:",
        labelContact2: "Email:",
        labelContact3: "Message:",
        pContact2: "Find me on:",

        liNavbar1: "Home",
        liNavbar2: "About Me",
        liNavbar3: "Projects",
        liNavbar4: "Certifications",
        liNavbar5: "Contact Me",
        
        h2Projects1: "My Projects"
        // Agrega más claves y traducciones para el inglés
      },
    },
    es: {
      translation: {
        h1Index1: "Bienvenido a mi web personal",
        pIndex1: "Aquí encontrarás un pequeño resumen de mí, mis certificaciones y mis proyectos.",
        btnIndex: "Explorar",

        h2About1: "Sobre Mi",
        pAbout1: "¡Bienvenido a mi sitio web de portafolio!",
        pAbout2: "Soy un apasionado desarrollador full-stack con más de 3 años de experiencia en la industria, donde también desempeño el rol de arquitecto de integración ESB. A lo largo de mi trayectoria, he tenido el privilegio de trabajar en proyectos desafiantes que han ampliado mi experiencia en el desarrollo de backend y me han brindado oportunidades para explorar tecnologías de vanguardia y soluciones innovadoras.",
        pAbout3: "Durante este tiempo, he contribuido a proyectos significativos que han reforzado mi enfoque en el desarrollo de backend y me han permitido adquirir habilidades valiosas en la creación y gestión de APIs.",
        pAbout4: "Mi viaje en el mundo del desarrollo comenzó con el proyecto 'Lasso', donde me sumergí en el emocionante mundo del backend utilizando JavaScript. Aporté mis habilidades en la creación y gestión de APIs, así como también trabajé con tecnologías de IBM para la integración de sensores y la creación de depósitos de datos.",
        pAbout5: "Durante mi participación en el proyecto 'Artifence', lideré la coordinación del proyecto como Project Manager, colaboré en el desarrollo de backend en Node.js y también tuve la oportunidad de implementar un servidor local completo. Esto me permitió aplicar mi experiencia técnica y liderazgo para garantizar el éxito del proyecto desde la planificación hasta la ejecución.",
        pAbout6: "Mi compromiso con la excelencia se refleja en mi enfoque en crear código limpio y escalable. Además, colaboro con equipos multidisciplinarios, trabajando junto a diseñadores y desarrolladores frontend para lograr una integración perfecta. Utilizo plataformas de comunicación efectivas para garantizar una colaboración eficiente y una comunicación fluida.",
        pAbout7: "Mis habilidades técnicas abarcan desde un sólido dominio de JavaScript y Node.js para el desarrollo de backend hasta una amplia experiencia en Java, Python y la gestión de bases de datos, incluyendo MongoDB y MySQL. Además, he trabajado con plataformas como Virustotal, AbuseIPDB, URLhaus, entre otras, para la implementación de APIs y servicios web.",
        pAbout8: "Mi motivación radica en abordar desafíos complejos y resolverlos a través de la lógica y la programación. Mi dedicación a la resolución de problemas me distingue, y siempre busco formas creativas de superar obstáculos.",
        btnAbout1: "Descargar CV",

        h2Certifications1: "Mis Certificaciomnes",
        pCertifications1: "Error al obtener los datos:",

        h2Contact1: "Contact Me",
        pContact1: "Puedes contactarme a través del formulario a continuación o utilizando los enlaces a mis perfiles en LinkedIn y GitHub.",
        labelContact1: "Nombre:",
        labelContact2: "Correo electrónico:",
        labelContact3: "Mensaje:",
        pContact2: "Encuéntrame en:",

        liNavbar1: "Home",
        liNavbar2: "Sobre mi",
        liNavbar3: "Projectos",
        liNavbar4: "Certificaciones",
        liNavbar5: "Contactame",

        h2Projects1: "Mis Proyectos",

        // Agrega más claves y traducciones para el español
      },
    },
    // Agrega más idiomas según sea necesario
  },
  lng: "en", // Idioma predeterminado
  fallbackLng: "en", // Idioma de respaldo si no se encuentra la traducción
});

export default i18n;
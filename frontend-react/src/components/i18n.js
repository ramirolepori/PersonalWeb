import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Configuración básica de i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        h1Index1: "I'm",
        h1Index2: " Ramiro Lepori",

        h2About1: "About me",
        pAbout1: "I am a passionate full-stack developer with over 3 years of industry experience, where I also serve as an ESB integration architect. Throughout my journey, I have had the privilege of working on challenging projects that have expanded my expertise in backend development and provided me with opportunities to explore cutting-edge technologies and innovative solutions.",
        pAbout2: "Over this time, I've contributed to significant projects that have reinforced my focus on backend development and allowed me to acquire valuable skills in API creation and management.",
        pAbout3: "My journey into the world of development began with the 'Lasso' project, where I immersed myself in the exciting realm of backend using JavaScript. I brought my skills to the table in API creation and management, as well as working with IBM technologies for sensor integration and data lakes.",
        pAbout4: "During my involvement in the 'Artifence' project, I led the project coordination as a Project Manager, collaborated on backend development in Node.js, and also had the opportunity to deploy a comprehensive local server. This allowed me to apply my technical experience and leadership to ensure project success from planning to execution.",
        pAbout5: "My commitment to excellence is reflected in my focus on creating clean and scalable code. Additionally, I collaborate with multidisciplinary teams, working alongside designers and frontend developers to achieve seamless integration. I leverage effective communication platforms to ensure efficient collaboration and smooth communication.",
        pAbout6: 'My technical skills range from a strong command of <span>JavaScript</span> and <span>Node.js</span> for backend development to a deep experience in <span>Java</span>, <span>Python</span>, and database management, including <span>MongoDB</span> and <span>MySQL</span>. Moreover, I have worked with platforms like <span>Virustotal</span>, <span>AbuseIPDB</span>, <span>URLhaus</span>, among others, for API implementation and web services.',
        pAbout7: "My motivation lies in tackling complex challenges and solving them through logic and programming. My dedication to problem-solving sets me apart, and I'm always seeking creative ways to overcome obstacles.",

        h2Certifications1: "My certifications",
        pCertifications1: "Error retrieving data:",

        h2Contact1: "Get in touch",
        pContact1: "You can reach me through the form below or by using the links to my profiles on LinkedIn and GitHub",
        labelContact1: "Name:",
        labelContact2: "Email:",
        labelContact3: "Message:",
        buttonContact1: "Send",
        pContact2: "Find me on:",

        liNavbar1: "Home",
        liNavbar2: "About Me",
        liNavbar3: "Projects",
        liNavbar4: "Contact Me",
        
        h2Projects1: "My projects"
        // Agrega más claves y traducciones para el inglés
      },
    },
    es: {
      translation: {
        h1Index1: "Soy",
        h1Index2: " Ramiro Lepori",

        h2About1: "Sobre mi",
        pAbout1: "Soy un apasionado desarrollador full-stack con más de 3 años de experiencia en la industria, donde también desempeño el rol de arquitecto de integración ESB. A lo largo de mi trayectoria, he tenido el privilegio de trabajar en proyectos desafiantes que han ampliado mi experiencia en el desarrollo de backend y me han brindado oportunidades para explorar tecnologías de vanguardia y soluciones innovadoras.",
        pAbout2: "Durante este tiempo, he contribuido a proyectos significativos que han reforzado mi enfoque en el desarrollo de backend y me han permitido adquirir habilidades valiosas en la creación y gestión de APIs.",
        pAbout3: "Mi viaje en el mundo del desarrollo comenzó con el proyecto 'Lasso', donde me sumergí en el emocionante mundo del backend utilizando JavaScript. Aporté mis habilidades en la creación y gestión de APIs, así como también trabajé con tecnologías de IBM para la integración de sensores y la creación de depósitos de datos.",
        pAbout4: "Durante mi participación en el proyecto 'Artifence', lideré la coordinación del proyecto como Project Manager, colaboré en el desarrollo de backend en Node.js y también tuve la oportunidad de implementar un servidor local completo. Esto me permitió aplicar mi experiencia técnica y liderazgo para garantizar el éxito del proyecto desde la planificación hasta la ejecución.",
        pAbout5: "Mi compromiso con la excelencia se refleja en mi enfoque en crear código limpio y escalable. Además, colaboro con equipos multidisciplinarios, trabajando junto a diseñadores y desarrolladores frontend para lograr una integración perfecta. Utilizo plataformas de comunicación efectivas para garantizar una colaboración eficiente y una comunicación fluida.",
        pAbout6: 'Mis habilidades técnicas abarcan desde un sólido dominio de <span>JavaScript</span> y <span>Node.js</span> para el desarrollo de backend hasta una amplia experiencia en <span>Java</span>, <span>Python</span> y la gestión de bases de datos, incluyendo <span>MongoDB</span> y <span>MySQL</span>. Además, he trabajado con plataformas como <span>Virustotal</span>, <span>AbuseIPDB</span>, <span>URLhaus</span>, entre otras, para la implementación de APIs y servicios web.',
        pAbout7: "Mi motivación radica en abordar desafíos complejos y resolverlos a través de la lógica y la programación. Mi dedicación a la resolución de problemas me distingue, y siempre busco formas creativas de superar obstáculos.",

        h2Certifications1: "Mis certificaciones",
        pCertifications1: "Error al obtener los datos:",

        h2Contact1: "Ponte en contacto",
        pContact1: "Puedes contactarme a través del formulario a continuación o utilizando los enlaces a mis perfiles en LinkedIn y GitHub.",
        labelContact1: "Nombre:",
        labelContact2: "Correo electrónico:",
        labelContact3: "Mensaje:",
        buttonContact1: "Enviar",
        pContact2: "Encuéntrame en:",

        liNavbar1: "Home",
        liNavbar2: "Sobre mi",
        liNavbar3: "Projectos",
        liNavbar4: "Contactame",

        h2Projects1: "Mis proyectos",

        // Agrega más claves y traducciones para el español
      },
    },
    // Agrega más idiomas según sea necesario
  },
  lng: "en", // Idioma predeterminado
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
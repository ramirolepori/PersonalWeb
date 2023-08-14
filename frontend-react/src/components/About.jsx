import React from 'react';
import '../assets/css/about.css'; // Ajusta la ruta del archivo CSS según tu estructura de archivos
import chicaImage from '../images/chica.png'; // Ajusta la ruta de la imagen según tu estructura de archivos

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="text-container">
          <p>Welcome to my portfolio website!</p>
          <p>I am a passionate full-stack developer with over 3 years of industry experience, where I also serve as an ESB integration architect. Throughout my journey, I have had the privilege of working on challenging projects that have expanded my expertise in backend development and provided me with opportunities to explore cutting-edge technologies and innovative solutions.</p>
          <p>Over this time, I've contributed to significant projects that have reinforced my focus on backend development and allowed me to acquire valuable skills in API creation and management.</p>
          <p>My journey into the world of development began with the 'Lasso' project, where I immersed myself in the exciting realm of backend using JavaScript. I brought my skills to the table in API creation and management, as well as working with IBM technologies for sensor integration and data lakes.</p>
          <p>During my involvement in the 'Artifence' project, I led the project coordination as a Project Manager, collaborated on backend development in Node.js, and also had the opportunity to deploy a comprehensive local server. This allowed me to apply my technical experience and leadership to ensure project success from planning to execution.</p>
          <p>My commitment to excellence is reflected in my focus on creating clean and scalable code. Additionally, I collaborate with multidisciplinary teams, working alongside designers and frontend developers to achieve seamless integration. I leverage effective communication platforms to ensure efficient collaboration and smooth communication.</p>
          <p>My technical skills range from a strong command of JavaScript and Node.js for backend development to a deep experience in Java, Python, and database management, including MongoDB and MySQL. Moreover, I have worked with platforms like Virustotal, AbuseIPDB, URLhaus, among others, for API implementation and web services.</p>
          <p>My motivation lies in tackling complex challenges and solving them through logic and programming. My dedication to problem-solving sets me apart, and I'm always seeking creative ways to overcome obstacles.</p>            
          <a href="ruta-al-archivo.pdf" download className="cv-button">Descargar CV</a>
        </div>
        <div className="image-container">
          <img src={chicaImage} alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;

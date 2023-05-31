document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.nav-container');
    
    const navHTML = `
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Me</a></li>
          <li><a href="projects.html">My Projects</a></li>
          <li><a href="certifications.html">My Certifications</a></li>
          <li><a href="contact.html">Contact Me</a></li>
        </ul>
      </nav>
    `;
    
    navContainer.innerHTML = navHTML;
  });
  
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm Anmol Ratan Tiwari, and I'm working as a Software Developer at Shineywise Technologies Pvt Ltd.
          </p>
          <p>
            focused on backend development, APIs, and system integrations. Experienced in MuleSoft and enterprise applications, with a strong interest in building scalable and maintainable systems
          </p>
          <p>
            {/* I'm always eager to learn new technologies and take on challenging projects 
            that push the boundaries of what's possible. */}
          </p>
        </div>
        <div className="about-skills">
          <h3>Technical Skills</h3>
          <div className="skills-categories">
            <div className="skill-category">
              <strong>Languages:</strong>
              <span>Java, C++, JavaScript, SQL</span>
            </div>
            <div className="skill-category">
              <strong>Frontend:</strong>
              <span>HTML, CSS, ReactJS</span>
            </div>
            <div className="skill-category">
              <strong>Backend:</strong>
              <span>Java, Spring, Spring Boot, MuleSoft</span>
            </div>
            <div className="skill-category">
              <strong>Salesforce:</strong>
              <span>Apex, Triggers, Securities, Flows</span>
            </div>
            <div className="skill-category">
              <strong>DevOps:</strong>
              <span>Git, GitHub Actions, AWS, VS Code</span>
            </div>
            <div className="skill-category">
              <strong>Methodologies:</strong>
              <span>Agile/Scrum, CI/CD, Test-Driven Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Associate Software Engineer',
      company: 'Shineywise Technologies Pvt Ltd',
      period: 'May 2025 - Present',
      description: 'Hands-on experience in Developing and APIs using Mulesoft and integrating with backend services, Deploying applications on Cloudhub.',
      achievements: [
        'Developed RESTful APIs using Mulesoft for real estate projects',
        'Developed data integration solutions using Mulesoft Anypoint Platform',
        'Implemented CI/CD pipelines using GitHub Actions to automate build and deployment workflows'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            <p className="description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

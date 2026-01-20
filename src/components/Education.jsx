import './Education.css'

function Education() {
  const educationList = [
     
    {
      id: 1,
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'APJ Abdul Kalam Technical University',
      period: '2020 - 2025',
      description: 'focused on software development, data structures, algorithms, and web technologies.',
      gpa: '6.1/10.0'
    }
  ]

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map(edu => (
          <div key={edu.id} className="education-card">
            <div className="education-header">
              <div>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
              </div>
              <span className="period">{edu.period}</span>
            </div>
            <p className="description">{edu.description}</p>
            <div className="gpa">
              <strong>GPA:</strong> {edu.gpa}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

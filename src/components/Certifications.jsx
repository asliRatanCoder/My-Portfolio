import './Certifications.css'

function Certifications() {
  const certifications = [
    {
      id: 1,
      name: 'Salesforce Certified Mulesoft Developer 1',
      issuer: 'Salesforce',
      date: 'November 2026',
      credentialId: '6938206',
      image: '/Data/Certified MuleSoft Developer- Level 1.png'
    },
    {
      id: 2,
      name: 'Salesforce Certified Mulesoft Developer 2',
      issuer: 'Salesforce',
      date: 'November 2025',
      credentialId: '6984240',
      image: '/Data/Certified MuleSoft Developer- Level 2.png'
    },
    {
      id: 3,
      name: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: 'December 2024',
      credentialId: '5542616',
      image: '/Data/Salesforce Certified AI Associate.png'
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map(cert => (
          <div key={cert.id} className="certification-card">
            <div className="certification-image">
              <img src={cert.image} alt={cert.name} />
            </div>
            <h3>{cert.name}</h3>
            <h4>{cert.issuer}</h4>
            <p className="cert-date">{cert.date}</p>
            <p className="credential-id">
              <strong>ID:</strong> {cert.credentialId}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications

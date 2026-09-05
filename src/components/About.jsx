import { skills, experience, education, certifications, resume, profile } from '../data/site'

export default function About() {
  const base = import.meta.env.BASE_URL
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div>
          <p className="section-kicker">About</p>
          <h2>Full-stack, with a bias for shipping.</h2>
          <p>
            I am a software engineer at Shineywise Technologies in India, where I built a healthcare
            lab&rsquo;s patient app, collector app, WhatsApp bot and backend integrations from scratch and
            took them through Google review. I take on freelance work alongside that: fixed-price sites
            and bots for small businesses, and overflow development for agencies.
          </p>
          <p>
            I write clear updates, keep repos tidy, and hand over things you can run without me.
            Based in {profile.location}, which overlaps the UK working day and US mornings and evenings.
          </p>

          <h3 className="sub-heading">Experience</h3>
          {experience.map((e) => (
            <div key={e.company} className="timeline-item">
              <div className="timeline-head">
                <strong>{e.title}</strong> · {e.company}
                <span className="period">{e.period}</span>
              </div>
              <p>{e.body}</p>
            </div>
          ))}
          <div className="timeline-item">
            <div className="timeline-head">
              <strong>{education.degree}</strong> · {education.institution}
              <span className="period">{education.period}</span>
            </div>
          </div>

          <a className="btn btn-outline" href={`${base}${resume}`} download="Anmol_Ratan_Tiwari_Resume.pdf">
            Download CV (PDF)
          </a>
        </div>

        <aside>
          <h3 className="sub-heading">Skills</h3>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row">
                <dt>{s.group}</dt>
                <dd>{s.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>

          <h3 className="sub-heading">Certifications</h3>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c.id}>
                <img src={`${base}${c.image}`} alt="" width="48" height="48" loading="lazy" />
                <div>
                  <strong>{c.name}</strong>
                  <span>Salesforce · ID {c.id}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

import { profile } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <p className="section-kicker">Contact</p>
        <h2>Tell me what you need. I reply within 24 hours.</h2>
        <p className="section-intro">
          One paragraph is enough: what you want built, when you need it, and a rough budget.
          Agencies: mention the stack and I will suggest a trial task.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-outline btn-lg" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
            WhatsApp {profile.whatsappDisplay}
          </a>
        </div>
        <p className="contact-meta">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span aria-hidden="true">·</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span aria-hidden="true">·</span>
          <span>{profile.location}</span>
        </p>
      </div>
    </section>
  )
}

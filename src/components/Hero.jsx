import { hero, profile, photo } from '../data/site'

export default function Hero() {
  const base = import.meta.env.BASE_URL
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="availability">
            <span className="dot" aria-hidden="true" /> {profile.availability} · {profile.location}
          </p>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="lead">{hero.sub}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn btn-outline" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href="#work">See my work ↓</a>
          </div>
          <dl className="proof">
            {hero.proof.map((p) => (
              <div key={p.label} className="proof-item">
                <dt>{p.value}</dt>
                <dd>{p.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero-photo">
          <img src={`${base}${photo}`} alt="Portrait of Anmol Ratan Tiwari" width="280" height="280" />
        </div>
      </div>
    </section>
  )
}

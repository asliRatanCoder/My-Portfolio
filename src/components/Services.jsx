import { services, profile } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <p className="section-kicker">Services</p>
        <h2>Three things I do well, priced up front.</h2>
        <p className="section-intro">
          Every price is in US dollars and includes source code, hosting setup and a written handover.
        </p>
        <div className="service-grid">
          {services.map((s) => (
            <article key={s.id} className="card service-card">
              <header>
                <h3>{s.title}</h3>
                <p className="price">
                  <strong>{s.price}</strong>
                  <span>{s.priceNote}</span>
                </p>
              </header>
              <p className="service-for">{s.for}</p>
              <p>{s.body}</p>
              <ul className="check-list">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <a
                className="btn btn-outline btn-block"
                href={`mailto:${profile.email}?subject=${encodeURIComponent(s.title)}`}
              >
                {s.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

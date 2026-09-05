import { work } from '../data/site'

function Card({ item, base }) {
  return (
    <article className={`card work-card${item.portrait ? ' is-portrait' : ''}`} id={`work-${item.id}`}>
      <div className="work-media">
        <img src={`${base}${item.image}`} alt={item.imageAlt} loading="lazy" />
      </div>
      <div className="work-body">
        <p className="tag">{item.tag}</p>
        <h3>{item.title}</h3>
        <p className="client">{item.client}</p>
        <dl className="case">
          <dt>Problem</dt>
          <dd>{item.problem}</dd>
          <dt>What I built</dt>
          <dd>{item.built}</dd>
          <dt>Result</dt>
          <dd>{item.result}</dd>
        </dl>
        <ul className="chips" aria-label="Technology used">
          {item.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        {item.links.length > 0 && (
          <p className="work-links">
            {item.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} →</a>
            ))}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Work() {
  const base = import.meta.env.BASE_URL
  return (
    <section id="work" className="section section-alt">
      <div className="container">
        <p className="section-kicker">Work</p>
        <h2>Shipped, live, and linked.</h2>
        <p className="section-intro">
          Real projects with real users. Each one lists the problem, what I built, and how it ended.
        </p>
        <div className="work-grid">
          {work.map((item) => <Card key={item.id} item={item} base={base} />)}
        </div>
      </div>
    </section>
  )
}

import { process } from '../data/site'

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <p className="section-kicker">How it works</p>
        <h2>From first email to handover in four steps.</h2>
        <ol className="process-grid">
          {process.map((p) => (
            <li key={p.step} className="card process-card">
              <span className="step">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

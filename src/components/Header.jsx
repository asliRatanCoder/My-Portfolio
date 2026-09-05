import { profile } from '../data/site'

const links = [
  ['#work', 'Work'],
  ['#services', 'Services'],
  ['#process', 'Process'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">AR</span>
          <span className="brand-name">Anmol Ratan Tiwari</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-primary btn-sm" href={`mailto:${profile.email}`}>Email me</a>
      </div>
    </header>
  )
}

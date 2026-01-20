import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <nav>
          <a href="#profile">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:anmolratantiwari98@gmail.com">Email</a>
          <a href="https://github.com/asliratanCoder" target="_blank" rel="noopener noreferrer">GitHub</a>
           <a href="https://www.linkedin.com/in/asliratan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

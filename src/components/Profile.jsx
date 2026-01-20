import "./Profile.css";

function Profile() {
  const baseUrl = import.meta.env.BASE_URL;
  const resumeUrl = `${baseUrl}Data/Anmol_Ratan_Tiwari_Resume_latest.pdf`;
  const profileImageUrl = `${baseUrl}Data/Profile Picture.jpeg`;

  return (
    <section id="profile" className="profile">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImageUrl} alt="Profile-image" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Anmol Ratan Tiwari</h1>
          <p className="profile-title">Software Developer</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:anmolratantiwari98@gmail.com">
                anmolratantiwari98@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:+919717047583">+91 9717047583</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Greater Noida, Uttar Pradesh, India</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <a
                href="https://www.linkedin.com/in/asliratan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <a
                href="https://github.com/asliratanCoder"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="profile-actions">
            <a
              href={resumeUrl}
              download="Anmol_Ratan_Tiwari_Resume.pdf"
              className="btn-primary"
            >
              Download Resume
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

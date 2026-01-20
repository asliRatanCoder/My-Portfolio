import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <main>
        <About />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App

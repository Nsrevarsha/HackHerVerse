import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>HackHer Paradise</h1>
          <p className="tagline">Code with summertime sadness</p>
          <p className="date">March 15-16, 2024</p>
          <a href="#register" className="cta-button">Enter Paradise</a>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>$5000 in Prizes</h3>
          <p>Money is the reason we exist</p>
        </div>
        <div className="feature-card">
          <h3>Workshops</h3>
          <p>Born to code, built to last</p>
        </div>
        <div className="feature-card">
          <h3>Networking</h3>
          <p>Connect with fellow hackers in paradise</p>
        </div>
      </section>

      <section className="schedule" id="register">
        <h2>Weekend Schedule</h2>
        <div className="timeline">
          <div className="event">
            <span className="time">6:00 PM</span>
            <h4>Opening Ceremony</h4>
            <p>Friday, March 15</p>
          </div>
          <div className="event">
            <span className="time">7:00 PM</span>
            <h4>Hacking Begins</h4>
            <p>Friday, March 15</p>
          </div>
          <div className="event">
            <span className="time">7:00 PM</span>
            <h4>Project Submissions</h4>
            <p>Saturday, March 16</p>
          </div>
        </div>
      </section>

      <section className="register-section">
        <div className="register-content">
          <h2>Join the Paradise</h2>
          <p>24 hours of coding, creativity, and melancholy</p>
          <form className="register-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Register Now</button>
          </form>
        </div>
      </section>

      <footer>
        <p>Born to hack, programmed to die</p>
      </footer>
    </div>
  )
}

export default Home 
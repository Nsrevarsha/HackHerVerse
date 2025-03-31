import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hack<span className="her-verse">Her</span>Verse
          </h1>
          <p className="tagline">Code with summertime sadness</p>
          <p className="date">May 03-04, 2025</p>
          <a href="#register" className="cta-button">Enter Paradise</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About the Hackathon</h2>
        <p>HackHerVerse is a premier hackathon bringing together the brightest minds to innovate, collaborate, and create revolutionary solutions.</p>
      </section>

      {/* Prizes Section */}
      <section className="prizes" id="prizes">
        <h2>Prizes</h2>
        <p>Compete for a chance to win from a $20,000 prize pool.</p>
      </section>

      {/* Tracks Section */}
      <section className="tracks" id="tracks">
        <h2>Tracks</h2>
        <ul>
          <li>AI & Machine Learning</li>
          <li>Web & Mobile Development</li>
          <li>Blockchain & Web3</li>
          <li>Healthcare & Biotech</li>
          <li>Cybersecurity</li>
        </ul>
      </section>

      {/* Judges & Mentors Section */}
      <section className="judges" id="judges">
        <h2>Judges & Mentors</h2>
        <p>Industry leaders and experts will guide and evaluate your projects.</p>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <h2>FAQ</h2>
        <div className="question">
          <h4>Who can participate?</h4>
          <p>Anyone passionate about technology! Beginners and experts alike.</p>
        </div>
        <div className="question">
          <h4>Do I need a team?</h4>
          <p>No, you can join solo or form a team during the event.</p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors" id="sponsors">
        <h2>Our Sponsors</h2>
        <p>Made possible by the generous support of our sponsors.</p>
      </section>

      {/* Registration Section */}
      <section className="register" id="register">
        <h2>Register Now</h2>
        <a href="#" className="cta-button">Sign Up</a>
      </section>

      {/* Footer */}
      <footer>
        <p>Born to hack, programmed to die</p>
      </footer>
    </div>
  )
}

export default Home;

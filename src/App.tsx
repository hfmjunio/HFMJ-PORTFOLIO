import './App.css'

const websiteProjects = [
  {
    title: 'Studio Landing Page',
    type: 'Website project',
    description:
      'A bold editorial-style site with immersive motion and a clear conversion path.',
  },
  {
    title: 'Community App Dashboard',
    type: 'Application project',
    description:
      'An interactive dashboard that turns feedback, events, and community updates into one calm experience.',
  },
]

const artworkPieces = [
  {
    title: 'Neon Bloom',
    medium: 'Digital illustration',
    year: '2025',
  },
  {
    title: 'Quiet Interface',
    medium: 'Concept art',
    year: '2024',
  },
  {
    title: 'Motion Study',
    medium: 'Visual experiment',
    year: '2024',
  },
]

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="portfolio-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Creative developer • digital storyteller</p>
          <h1>Hi, I’m Hanie Fe — I design and create websites, apps, and art </h1>
          <p className="hero-description">
            I build thoughtful digital experiences that balance visual impact with intuitive interaction.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View projects
            </a>
            <a href="#artwork" className="secondary-btn">
              See artwork
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Portfolio highlights">
          <p className="card-pill">Open for collaborations</p>
          <ul>
            <li>React and Vite builds</li>
            <li>Website and app concepts</li>
            <li>Digital artwork and visuals</li>
          </ul>
        </aside>
      </header>

      <main className="content">
        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Websites and applications</h2>
          </div>

          <div className="card-grid">
            {websiteProjects.map((project) => (
              <article className="info-card" key={project.title}>
                <div className="card-accent" />
                <p className="card-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="artwork" className="section">
          <div className="section-heading">
            <p className="eyebrow">Digital artwork</p>
            <h2>Illustration, moodboards, and visual experiments</h2>
          </div>

          <div className="art-grid">
            {artworkPieces.map((piece) => (
              <article className="art-card" key={piece.title}>
                <div className="art-visual" aria-hidden="true" />
                <h3>{piece.title}</h3>
                <p>{piece.medium}</p>
                <span>{piece.year}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2>Let’s build something memorable.</h2>
          <p>Open to commissions, collaborations, and creative partnerships.</p>
          <a href="mailto:hello@hfmj.dev" className="primary-btn">
            hello@hfmj.dev
          </a>
        </section>
      </main>

      <footer className="footer">© {currentYear} HFMJ. Crafted with React and Vite.</footer>
    </div>
  )
}

export default App

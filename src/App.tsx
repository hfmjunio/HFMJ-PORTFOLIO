import { useState } from 'react'
import './App.css'
import meImage from './assets/me.jpg'
import angelArtworkImage from './assets/angelartwork.png'
import obliviousArtworkImage from './assets/oblivious.png'
import homeIcon from './assets/home.svg'
import idIcon from './assets/id.svg'
import folderIcon from './assets/folder.svg'
import phoneIcon from './assets/phone.svg'

const featuredVideoUrl =
  import.meta.env.VITE_YOUTUBE_VIDEO_URL ||
  'https://www.youtube.com/embed/YOUR_VIDEO_ID'

const websiteProjects = [
  {
    title: 'Studio Landing Page',
    type: 'Website project',
    description:
      'A bold editorial-style site with immersive motion and a clear conversion path.',
    videoUrl: featuredVideoUrl,
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
    title: 'Camila',
    medium: 'Digital illustration',
    year: '2022',
    image: angelArtworkImage,
  },
  {
    title: 'Oblivious',
    medium: 'Digital illustration',
    year: '2026',
    image: obliviousArtworkImage,
  },
]

const navItems = [
  { label: 'Home', href: '#home', icon: homeIcon },
  { label: 'About', href: '#about', icon: idIcon },
  { label: 'Projects', href: '#projects', icon: folderIcon },
  { label: 'Contact', href: '#contact', icon: phoneIcon },
]

function App() {
  const currentYear = new Date().getFullYear()
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null)

  return (
    <div className="portfolio-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-item">
              <img src={item.icon} alt="" className="nav-icon" aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-copy">
          <h1>Hi, I’m Hanie Fe Marie Junio </h1>
          <h2>Website Developer & Artist</h2>
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
          <img src={meImage} alt="Hanie Fe" className="hero-image" />
          
        </aside>
      </header>

      <main className="content">
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>I create thoughtful digital experiences with a calm, modern feel.</h2>
          </div>
          <p>
            My work blends visual design, web development, and creative direction to create interfaces
            that feel clear, expressive, and easy to use.
          </p>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Websites and applications</h2>
          </div>

          <div className="text-stack">
            {websiteProjects.map((project) => (
              <article key={project.title}>
                <p className="card-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.videoUrl ? (
                  <div className="video-actions">
                    <button
                      type="button"
                      className="primary-btn small-btn"
                      onClick={() => setSelectedVideoUrl(project.videoUrl ?? null)}
                    >
                      Play preview
                    </button>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="artwork" className="section">
          <div className="section-heading">
            <p className="eyebrow">Digital artwork</p>
            <h2>Illustration, moodboards, and visual experiments</h2>
          </div>

          <div className="text-stack artwork-stack">
            {artworkPieces.map((piece) => (
              <article key={piece.title} className="artwork-entry">
                {piece.image ? (
                  <button
                    type="button"
                    className="artwork-preview"
                    onClick={() => setSelectedArtwork(piece.image)}
                    aria-label={`View ${piece.title}`}
                  >
                    <img src={piece.image} alt={piece.title} />
                  </button>
                ) : null}
                <div className="artwork-meta">
                  <h3>{piece.title}</h3>
                  <p>{piece.medium}</p>
                  <span>{piece.year}</span>
                </div>
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

      {selectedArtwork ? (
        <div className="video-modal-backdrop" onClick={() => setSelectedArtwork(null)}>
          <div className="video-modal artwork-modal" onClick={(event) => event.stopPropagation()}>
            <div className="video-modal-header">
              <h3>Artwork preview</h3>
              <button
                type="button"
                className="secondary-btn small-btn"
                onClick={() => setSelectedArtwork(null)}
              >
                Close
              </button>
            </div>
            <img src={selectedArtwork} alt="Expanded artwork preview" className="artwork-expanded" />
          </div>
        </div>
      ) : null}

      {selectedVideoUrl ? (
        <div className="video-modal-backdrop" onClick={() => setSelectedVideoUrl(null)}>
          <div className="video-modal" onClick={(event) => event.stopPropagation()}>
            <div className="video-modal-header">
              <h3>Project preview</h3>
              <button
                type="button"
                className="secondary-btn small-btn"
                onClick={() => setSelectedVideoUrl(null)}
              >
                Close
              </button>
            </div>

            <div className="video-wrapper">
              {selectedVideoUrl.includes('youtube.com') || selectedVideoUrl.includes('youtu.be') ? (
                <iframe
                  className="video-frame"
                  src={selectedVideoUrl}
                  title="Project video preview"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video controls preload="metadata" playsInline>
                  <source src={selectedVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import meImage from './assets/me.jpg'
import angelArtworkImage from './assets/angelartwork.png'
import obliviousArtworkImage from './assets/oblivious.png'

const featuredVideoUrl =
  import.meta.env.VITE_YOUTUBE_VIDEO_URL ||
  'https://www.youtube.com/embed/YOUR_VIDEO_ID'

const websiteProjects = [
  {
    title: 'Studio Landing Page',
    type: 'Website',
    description:
      'A bold editorial-style site with immersive motion and a clear conversion path.',
    videoUrl: featuredVideoUrl,
  },
  {
    title: 'Community App Dashboard',
    type: 'Application',
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
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Artwork', href: '#artwork' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const currentYear = new Date().getFullYear()
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = requestAnimationFrame(() => setReady(true))
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(t)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#18202b] antialiased">
      <style>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes softIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .rise { opacity: 0; animation: riseIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .rise-1 { animation-delay: 0.05s; }
        .rise-2 { animation-delay: 0.16s; }
        .rise-3 { animation-delay: 0.27s; }
        .rise-4 { animation-delay: 0.38s; }
        .rise-5 { animation-delay: 0.5s; }
        .modal-in { animation: softIn 0.22s ease-out forwards; }
        .link-underline {
          position: relative;
          text-decoration: none;
        }
        .link-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .link-underline:hover::after { transform: scaleX(1); }
        @media (prefers-reduced-motion: reduce) {
          .rise { opacity: 1; animation: none; transform: none; }
          .modal-in { animation: none; }
        }
      `}</style>

      <nav
        className={`fixed top-0 inset-x-0 z-30 transition-colors duration-300 ${
          scrolled ? 'bg-[#f7f6f3]/90 backdrop-blur-md border-b border-[#18202b0f]' : 'bg-transparent'
        }`}
        aria-label="Primary navigation"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#home" className="font-serif text-[1.05rem] text-[#18202b] no-underline">
            Hanie Fe
          </a>
          <div className="flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline text-[0.92rem] text-[#404a5e] hover:text-[#18202b] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6">
        <header id="home" className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 items-center pt-40 pb-24">
          <div>
            <h2
              className={`m-0 mb-4 text-[0.95rem] tracking-wide text-[#6f7d99] ${
                ready ? 'rise rise-1' : 'opacity-0'
              }`}
            >
              Website Developer &amp; Artist
            </h2>
            <h1
              className={`m-0 mb-6 text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.05] font-serif font-normal ${
                ready ? 'rise rise-2' : 'opacity-0'
              }`}
            >
              Hi, I'm Hanie Fe Marie Junio
            </h1>
            <p
              className={`text-lg max-w-[480px] text-[#4f5560] leading-relaxed ${
                ready ? 'rise rise-3' : 'opacity-0'
              }`}
            >
              I build thoughtful digital experiences that balance visual impact with intuitive interaction.
            </p>
            <div className={`flex items-center gap-6 mt-8 ${ready ? 'rise rise-4' : 'opacity-0'}`}>
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-br from-[#8f9eb7] to-[#6f7d99] text-white text-sm font-medium no-underline transition-transform duration-200 hover:-translate-y-0.5"
              >
                View projects
              </a>
              <a href="#artwork" className="link-underline text-sm text-[#18202b]">
                See artwork
              </a>
            </div>
          </div>

          <div className={`relative ${ready ? 'rise rise-5' : 'opacity-0'}`}>
            <img
              src={meImage}
              alt="Hanie Fe"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
            />
          </div>
        </header>

        <main>
          <section id="about" className="py-16 border-t border-[#18202b14]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
              <h2 className="m-0 text-2xl font-serif font-normal">About</h2>
              <p className="max-w-[560px] text-[#4f5560] leading-relaxed">
                My work blends visual design, web development, and creative direction to create
                interfaces that feel clear, expressive, and easy to use.
              </p>
            </div>
          </section>

          <section id="projects" className="py-16 border-t border-[#18202b14]">
            <h2 className="m-0 mb-10 text-2xl font-serif font-normal">Websites and applications</h2>
            <div className="grid gap-10">
              {websiteProjects.map((project) => (
                <article
                  key={project.title}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 pb-10 border-b border-[#18202b0f] last:border-b-0 last:pb-0"
                >
                  <div>
                    <p className="m-0 text-sm text-[#6f7d99]">{project.type}</p>
                    <h3 className="m-0 mt-1 text-xl font-serif font-normal">{project.title}</h3>
                  </div>
                  <div>
                    <p className="text-[#4f5560] leading-relaxed max-w-[520px]">{project.description}</p>
                    {project.videoUrl ? (
                      <button
                        type="button"
                        className="link-underline mt-3 text-sm text-[#18202b] bg-transparent border-0 p-0 cursor-pointer"
                        onClick={() => setSelectedVideoUrl(project.videoUrl ?? null)}
                      >
                        Play preview
                      </button>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="artwork" className="py-16 border-t border-[#18202b14]">
            <h2 className="m-0 mb-10 text-2xl font-serif font-normal">
              Illustration, moodboards, and visual experiments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {artworkPieces.map((piece) => (
                <article key={piece.title} className="group">
                  {piece.image ? (
                    <button
                      type="button"
                      className="block w-full border-0 p-0 bg-transparent cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => setSelectedArtwork(piece.image)}
                      aria-label={`View ${piece.title}`}
                    >
                      <img
                        src={piece.image}
                        alt={piece.title}
                        className="w-full h-[320px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </button>
                  ) : null}
                  <div className="mt-4">
                    <h3 className="m-0 text-lg font-serif font-normal">{piece.title}</h3>
                    <p className="m-0 mt-1 text-[#4f5560] text-sm">
                      {piece.medium}, {piece.year}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="py-20 border-t border-[#18202b14] text-center">
            <h2 className="m-0 mb-3 text-2xl font-serif font-normal">Let's build something memorable.</h2>
            <p className="text-[#4f5560] mb-6">Open to commissions, collaborations, and creative partnerships.</p>
            <a href="mailto:hello@hfmj.dev" className="link-underline text-lg text-[#18202b]">
              hello@hfmj.dev
            </a>
          </section>
        </main>

        <footer className="text-center py-10 text-[#4f5560] text-sm border-t border-[#18202b14]">
          © {currentYear} HFMJ. Crafted with React and Vite.
        </footer>
      </div>

      {selectedArtwork ? (
        <div
          className="fixed inset-0 bg-[#18202b]/80 flex items-center justify-center p-5 z-40 cursor-pointer"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="modal-in w-full max-w-[820px] cursor-default"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <p className="m-0 text-white/80 text-sm">Artwork preview</p>
              <button
                type="button"
                className="text-white/80 hover:text-white text-sm bg-transparent border-0 cursor-pointer"
                onClick={() => setSelectedArtwork(null)}
              >
                Close
              </button>
            </div>
            <img
              src={selectedArtwork}
              alt="Expanded artwork preview"
              className="block w-full max-h-[75vh] object-contain rounded-xl"
            />
          </div>
        </div>
      ) : null}

      {selectedVideoUrl ? (
        <div
          className="fixed inset-0 bg-[#18202b]/80 flex items-center justify-center p-5 z-40 cursor-pointer"
          onClick={() => setSelectedVideoUrl(null)}
        >
          <div
            className="modal-in w-full max-w-[880px] cursor-default"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <p className="m-0 text-white/80 text-sm">Project preview</p>
              <button
                type="button"
                className="text-white/80 hover:text-white text-sm bg-transparent border-0 cursor-pointer"
                onClick={() => setSelectedVideoUrl(null)}
              >
                Close
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-black">
              {selectedVideoUrl.includes('youtube.com') || selectedVideoUrl.includes('youtu.be') ? (
                <iframe
                  className="w-full h-auto bg-black block border-0 aspect-video"
                  src={selectedVideoUrl}
                  title="Project video preview"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video controls preload="metadata" playsInline className="w-full h-auto bg-black block">
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
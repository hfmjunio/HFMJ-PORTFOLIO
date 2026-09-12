import { useEffect, useState } from 'react'
import hjLogoImg from './assets/project_assets/portfolio/hjlogo.png'
import meImage from './assets/project_assets/portfolio/me.jpg'
import angelArtworkImage from './assets/project_assets/portfolio/angelartwork.png'
import obliviousArtworkImage from './assets/project_assets/portfolio/oblivious.png'
import reflectifyLogin from './assets/project_assets/reflectify/login.png'
import reflectifyStudy from './assets/project_assets/reflectify/study.png'
import reflectifyStudb from './assets/project_assets/reflectify/studb.png'
import reflectifyPomodoro from './assets/project_assets/reflectify/pomodoro.png'
import reflectifyAlgo from './assets/project_assets/reflectify/algo.png'
import reflectifyFc from './assets/project_assets/reflectify/fc.png'
import reflectifyGamefc from './assets/project_assets/reflectify/gamefc.png'
import reflectifyGamequiz from './assets/project_assets/reflectify/gamequiz.png'
import reflectifyGenerateset from './assets/project_assets/reflectify/generateset.png'
import reflectifyQuizzes from './assets/project_assets/reflectify/quizzes.png'
import reflectifyLogoImg from './assets/project_assets/reflectify/reflectifylogo.png'
import skypetsLogoImg from './assets/project_assets/skypets/skypetslogo.png'
import openaiLogo from './assets/project_assets/portfolio/openai.png'
import projectsLogo from './assets/project_assets/portfolio/projects.png'
import tsuLogo from './assets/project_assets/portfolio/tsulogo.png'
import pgtLogo from './assets/project_assets/portfolio/pgtlogo.jpeg'
import educationLogo from './assets/project_assets/portfolio/educ.svg'
import contactLogo from './assets/project_assets/portfolio/contact.png'
import artworkLogo from './assets/project_assets/portfolio/artwork.svg'
import instagramLogo from './assets/project_assets/portfolio/instagram.svg'

import phLogo from './assets/project_assets/portfolio/ph.svg'


const techIcons: Record<string, { label: string; icon: string }> = {
  react: { label: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  vite: { label: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
  typescript: { label: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  nodejs: { label: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  render: { label: 'Render', icon: 'https://cdn.simpleicons.org/render/46E3B7' },
  cloudinary: { label: 'Cloudinary', icon: 'https://cdn.simpleicons.org/cloudinary/3448C5' },
  firebase: { label: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  php: { label: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  mysql: { label: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  openai: { label: 'OpenAI GPT-4o mini', icon: openaiLogo },
  figma: { label: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
}

function getYouTubeThumbnail(videoUrl: string): string | null {
  const match = videoUrl.match(/(?:embed\/|watch\?v=|youtu\.be\/)([\w-]{6,})/)
  const id = match?.[1]
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null
}

const websiteProjects = [
  {
    title: 'Reflectify: A Gamified LMS with Spaced Repetition Algorithm and Flashcard Automation using GPT-4o mini',
    logo: reflectifyLogoImg,
    type: 'Capstone Project',
    description:
      'A Learning Management System (LMS) app with spaced-repetition flashcards, auto-generated quizzes (OpenAI GPT-4o mini integration), and a built-in pomodoro timer to help students plan and track focused study sessions.',
    stack: ['react', 'vite', 'typescript', 'nodejs', 'render', 'cloudinary', 'firebase', 'openai', 'figma'],
    screenshots: [
      { label: 'Login', image: reflectifyLogin },
      { label: 'Study dashboard', image: reflectifyStudy },
      { label: 'Study breakdown', image: reflectifyStudb },
      { label: 'Pomodoro timer', image: reflectifyPomodoro },
      { label: 'Algorithm view', image: reflectifyAlgo },
      { label: 'Flashcards', image: reflectifyFc },
      { label: 'Flashcard game', image: reflectifyGamefc },
      { label: 'Quiz game', image: reflectifyGamequiz },
      { label: 'Generate set', image: reflectifyGenerateset },
      { label: 'Quizzes', image: reflectifyQuizzes },
    ],
  },
  {
    title: 'SkyPets',
    logo: skypetsLogoImg,
    type: 'Case Study Project',
    description:
      'A memorial gallery where people can create lasting tributes for pets who have passed away, utilizing MySQL for data storage and Cloudinary for photo memory hosting.',
    stack: ['php', 'mysql', 'cloudinary', 'figma'],
    videoUrl: 'https://www.youtube.com/embed/PmhS-wPU3Zw',
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
  { label: 'Experience & Education', href: '#background', icon: educationLogo },
  { label: 'Projects', href: '#projects', icon: projectsLogo },
  { label: 'Artworks', href: '#artwork', icon: artworkLogo },
  { label: 'Contact', href: '#contact', icon: contactLogo },
]

function App() {
  const currentYear = new Date().getFullYear()
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null)
  const [gallery, setGallery] = useState<{ images: string[]; index: number } | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const openGallery = (images: string[], index: number) => setGallery({ images, index })
  const closeGallery = () => setGallery(null)
  const showPrev = () =>
    setGallery((current) =>
      current
        ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length }
        : current
    )
  const showNext = () =>
    setGallery((current) =>
      current ? { ...current, index: (current.index + 1) % current.images.length } : current
    )

  useEffect(() => {
    if (!gallery) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrev()
      else if (event.key === 'ArrowRight') showNext()
      else if (event.key === 'Escape') closeGallery()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [gallery])

  return (
    <div className="min-h-screen text-text font-sans antialiased" style={{ backgroundColor: '#f4f3ef' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap');

        .kode-mono-link {
          font-family: 'Kode Mono', monospace;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .kode-mono-heading {
          font-family: 'Kode Mono', monospace;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .kode-mono-tech {
          font-family: 'Kode Mono', monospace;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .kode-mono-btn {
          font-family: 'Kode Mono', monospace;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        @keyframes riseIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes softIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rise { opacity: 0; animation: riseIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .rise-1 { animation-delay: 0.05s; }
        .rise-2 { animation-delay: 0.16s; }
        .rise-3 { animation-delay: 0.27s; }
        .rise-4 { animation-delay: 0.38s; }
        .rise-5 { animation-delay: 0.5s; }
        .modal-in { animation: softIn 0.22s ease-out forwards; }
        .animate-in { animation: slideIn 0.3s ease-out forwards; }
        .fade-in { opacity: 1; }
        .slide-in-from-top-2 { /* Tailwind class compatibility */ }
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
        .video-thumb img { transition: transform 0.5s ease-out; }
        .video-thumb:hover img { transform: scale(1.05); }
        .video-thumb .play-overlay {
          transition: background-color 0.2s ease;
          background-color: rgba(24, 32, 43, 0.2);
        }
        .video-thumb:hover .play-overlay { background-color: rgba(24, 32, 43, 0.4); }
        .video-thumb .play-circle { transition: transform 0.2s ease; }
        .video-thumb:hover .play-circle { transform: scale(1.15); }
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.4); }
          70% { opacity: 1; transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }
        .badge-pop {
          opacity: 0;
          animation: badgePop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .badge-pop { opacity: 1; animation: none; }
          .rise { opacity: 1; animation: none; transform: none; }
          .modal-in { animation: none; }
          .animate-in { animation: none; }
        }
        .tech-badge { transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease; }
        .tech-badge:hover {
          transform: scale(1.12) translateY(-4px);
          box-shadow: 0 8px 18px rgba(24, 32, 43, 0.14);
          background-color: #ffffff;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-glass { animation: slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .bg-glass:nth-child(1) { animation-delay: 0.1s; }
        .bg-glass:nth-child(2) { animation-delay: 0.2s; }
        .bg-glass:nth-child(3) { animation-delay: 0.3s; }
        .bg-glass:nth-child(4) { animation-delay: 0.4s; }
        .bg-glass:nth-child(5) { animation-delay: 0.5s; }
        .bg-glass:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <nav
        className={`fixed top-0 inset-x-0 z-30 transition-colors duration-300 ${
          scrolled ? 'bg-nav-glass backdrop-blur-md border-b border-border/40' : 'bg-transparent'
        }`}
        aria-label="Primary navigation"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-2 font-mono text-[1.05rem] text-text no-underline font-bold">
            <img src={hjLogoImg} alt="HJ Logo" className="h-7 w-auto object-contain" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline kode-mono-link text-[0.9rem] text-text/90 hover:text-text transition-colors inline-flex items-center gap-1.5"
              >
                {item.icon && <img src={item.icon} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />}
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-transparent hover:bg-accent/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden bg-nav-glass backdrop-blur-md border-b border-border/40 animate-in fade-in slide-in-from-top-2">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg hover:bg-accent/10 text-text/90 hover:text-text transition-colors text-sm font-mono"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {item.icon && <img src={item.icon} alt="" className="w-3 h-3 object-contain" aria-hidden="true" />}
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        <header id="home" className="grid grid-cols-1 md:grid-cols-[1.7fr_0.9fr] gap-10 items-center pt-40 pb-24">
          <div>
            <h2
              className={`m-0 mb-4 text-[0.95rem] tracking-wide text-text/70 font-mono ${
                ready ? 'rise rise-1' : 'opacity-0'
              }`}
            >
              Full-Stack Developer &amp; Artist
            </h2>
            <h1
              className={`m-0 mb-6 text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] ${
                ready ? 'rise rise-2' : 'opacity-0'
              }`}
              style={{ fontFamily: "'Kode Mono', monospace", fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              Hi, I'm Hanie Fe Junio
            </h1>
            <p
              className={`text-lg max-w-[480px] text-text/80 leading-relaxed ${
                ready ? 'rise rise-3' : 'opacity-0'
              }`}
            >
              I build thoughtful digital experiences that balance visual impact with intuitive interaction.
            </p>
            <div className={`flex items-center gap-6 mt-8 ${ready ? 'rise rise-4' : 'opacity-0'}`}>
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium no-underline transition-transform duration-200 hover:-translate-y-0.5 shadow-sm kode-mono-btn"
              >
                View projects
              </a>
              <a href="#artwork" className="link-underline text-sm text-text kode-mono-btn">
                See artwork
              </a>
            </div>
          </div>

          <div className={`relative max-w-[280px] mx-auto md:ml-auto md:mr-0 ${ready ? 'rise rise-5' : 'opacity-0'}`}>
            <img
              src={meImage}
              alt="Hanie Fe"
              className="w-full aspect-[4/5] object-cover border-2 border-text shadow-custom"
            />
          </div>
        </header>

        <main>
          <section id="about" className="py-16 border-t border-border/40">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
              <h2 className="m-0 text-2xl font-normal">About</h2>
              <p className="max-w-[560px] text-text/80 leading-relaxed">
                My work blends visual design, web development, and creative direction to create
                interfaces that feel clear, expressive, and easy to use.
              </p>
            </div>
          </section>

          <section id="background" className="py-16 border-t border-border/40">
            <h2 className="m-0 mb-10 text-3xl font-bold flex items-center gap-3" style={{ fontFamily: "'Kode Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>
              <img src={educationLogo} alt="" className="h-10 w-auto object-contain" />
              Experience & Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Education & Experience */}
              <div className="space-y-10">
                <div className="bg-glass rounded-lg p-5 border border-border/40 hover:shadow-custom transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <img src={tsuLogo} alt="Tarlac State University" className="h-16 w-auto object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold tracking-wider text-text/70 uppercase mb-3 font-mono">Education</h3>
                      <h4 className="text-lg font-normal m-0 text-text mb-1">Bachelor of Science in Information Technology (Cum Laude)</h4>
                      <p className="text-sm text-text/80 m-0">Major in Web and Mobile Application</p>
                      <p className="text-sm font-medium text-text m-0">Tarlac State University</p>
                      <p className="text-xs text-text/70 m-0 font-mono mt-2">2022–2026</p>
                    </div>
                  </div>
                </div>

                <div className="bg-glass rounded-lg p-5 border border-border/40 hover:shadow-custom transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <img src={pgtLogo} alt="Provincial Government of Tarlac" className="h-16 w-auto object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold tracking-wider text-text/70 uppercase mb-3 font-mono">Experience</h3>
                      <h4 className="text-lg font-normal m-0 text-text mb-1">IT Support Intern (4 Months OJT)</h4>
                      <p className="text-sm font-medium text-text m-0">Provincial Government of Tarlac — Provincial Human Resource Management Office</p>
                      <p className="text-xs text-text/70 m-0 mt-2">Hardware & software troubleshooting, system maintenance, and network configuration.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-glass rounded-lg p-5 border border-border/40 hover:shadow-custom transition-all duration-300">
                  <h3 className="text-sm font-semibold tracking-wider text-text/70 uppercase mb-4 font-mono">Certificates</h3>
                  <ul className="space-y-2 text-sm text-text/80 m-0 pl-0 list-none">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> CCNA: Introduction to Networks</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> CCNAv7: Switching, Routing, and Wireless Essentials</li>
                  </ul>
                </div>
              </div>

              {/* Skills & Seminars */}
              <div className="space-y-10">
                <div className="bg-glass rounded-lg p-5 border border-border/40 hover:shadow-custom transition-all duration-300">
                  <h3 className="text-sm font-semibold tracking-wider text-text/70 uppercase mb-4 font-mono">Skills</h3>
                  <div className="space-y-3 text-sm text-text/80">
                    <div>
                      <strong className="text-text font-medium">Languages & Frameworks:</strong> JavaScript, TypeScript, React, Java, HTML, CSS, Basic Backend, Server Setup, API Integration
                    </div>
                    <div>
                      <strong className="text-text font-medium">Mobile & Tools:</strong> Capacitor, Ionic, Git, GitHub, Firebase
                    </div>
                    <div>
                      <strong className="text-text font-medium">Creative Skills:</strong> Digital Art, Graphic Design, UI/UX Design
                    </div>
                    <div>
                      <strong className="text-text font-medium">IT Support:</strong> Hardware & Software Troubleshooting, System Maintenance, Network Configuration, Data Entry & Documentation
                    </div>
                    <div>
                      <strong className="text-text font-medium">Professional Competencies:</strong> Teamwork and Collaboration, Time Management
                    </div>
                  </div>
                </div>

                <div className="bg-glass rounded-lg p-5 border border-border/40 hover:shadow-custom transition-all duration-300">
                  <h3 className="text-sm font-semibold tracking-wider text-text/70 uppercase mb-4 font-mono">Seminars & Webinars</h3>
                  <ul className="space-y-2 text-sm text-text/80 m-0 pl-0 list-none">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></span> Web Development Training: Good Coding and Implementation</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></span> Information Session on Data Privacy Awareness</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></span> Network Devices: Switches, Routers, Firewalls, and Wi-Fi Standards & Configuration</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></span> Seminar on Network Design and Implementation</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></span> Cloud and DevOps Basics</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <section id="projects" className="py-16 border-t border-border/40">
            <h2 className="m-0 mb-10 text-3xl font-bold flex items-center gap-3" style={{ fontFamily: "'Kode Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>
              <img src={projectsLogo} alt="" className="h-10 w-auto object-contain" />
              Projects
            </h2>
            <div className="grid gap-10">
              {websiteProjects.map((project) => (
                <article
                  key={project.title}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 pb-10 border-b border-border/40 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col items-center text-center md:items-center">
                    <p className="m-0 text-sm text-text/70 font-mono">{project.type}</p>
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="mt-4 h-24 w-auto object-contain"
                      />
                    ) : null}
                    <h3 className="m-0 mt-1 text-xl font-normal" style={{ fontFamily: "'Kode Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>{project.title}</h3>
                  </div>
                  <div>
                    <p className="text-text/80 leading-relaxed text-justify">{project.description}</p>
                    {project.stack ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((techKey, techIndex) => {
                          const tech = techIcons[techKey]
                          if (!tech) return null
                          return (
                            <span
                              key={techKey}
                              style={{ animationDelay: `${techIndex * 0.06}s` }}
                              className="badge-pop tech-badge kode-mono-tech inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border/50 bg-glass text-xs text-text cursor-default"
                            >
                              <img src={tech.icon} alt="" className="w-3.5 h-3.5" aria-hidden="true" />
                              {tech.label}
                            </span>
                          )
                        })}
                      </div>
                    ) : null}
                    {project.videoUrl ? (
                      <button
                        type="button"
                        className="video-thumb mt-4 relative block w-full max-w-sm border-0 p-0 bg-transparent cursor-pointer overflow-hidden rounded-xl shadow-sm"
                        onClick={() => setSelectedVideoUrl(project.videoUrl ?? null)}
                        aria-label={`Play ${project.title} preview video`}
                      >
                        {getYouTubeThumbnail(project.videoUrl) ? (
                          <img
                            src={getYouTubeThumbnail(project.videoUrl) ?? ''}
                            alt={`${project.title} video preview`}
                            className="w-full aspect-video object-cover block"
                          />
                        ) : (
                          <div className="w-full aspect-video bg-border/20" />
                        )}
                        <span className="play-overlay absolute inset-0 flex items-center justify-center">
                          <span className="play-circle w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 ml-0.5 fill-text">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </span>
                      </button>
                    ) : null}
                    {project.screenshots ? (
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {project.screenshots.map((shot, shotIndex) => (
                          <button
                            key={shot.label}
                            type="button"
                            className="border-0 p-0 bg-transparent cursor-pointer overflow-hidden rounded-lg w-20 h-14 shrink-0 shadow-sm"
                            onClick={() =>
                              openGallery(
                                project.screenshots!.map((s) => s.image),
                                shotIndex
                              )
                            }
                            aria-label={`View ${shot.label} screenshot`}
                            title={shot.label}
                          >
                            <img
                              src={shot.image}
                              alt={shot.label}
                              className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-[1.05]"
                            />
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="artwork" className="py-16 border-t border-border/40">
            <h2 className="m-0 mb-10 text-3xl font-bold flex items-center gap-3" style={{ fontFamily: "'Kode Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>
              <img src={artworkLogo} alt="" className="h-10 w-auto object-contain" />
              Artworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {artworkPieces.map((piece, pieceIndex) => (
                <article key={piece.title} className="group">
                  {piece.image ? (
                    <button
                      type="button"
                      className="block w-full border-0 p-0 bg-transparent cursor-pointer overflow-hidden rounded-xl shadow-custom"
                      onClick={() =>
                        openGallery(
                          artworkPieces.map((p) => p.image),
                          pieceIndex
                        )
                      }
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
                    <h3 className="m-0 text-lg font-normal">{piece.title}</h3>
                    <p className="m-0 mt-1 text-text/70 text-sm font-mono">
                      {piece.medium}, {piece.year}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-border/40 text-center">
              <h3 className="m-0 text-3xl font-bold flex items-center justify-center gap-3" style={{ fontFamily: "'Kode Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>
                <img src={artworkLogo} alt="" className="h-10 w-auto object-contain" />
                <img src={instagramLogo} alt="" className="h-10 w-auto object-contain" />
                <a
                  href="https://www.instagram.com/hanzi.draws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-accent transition-colors text-text"
                >
                  @hanzi.draws
                </a>
              </h3>
            </div>
          </section>

          <section id="contact" className="py-20 border-t border-border/40 text-center">
            <h2 className="m-0 mb-6 text-3xl font-bold flex items-center justify-center gap-3" style={{ fontFamily: "'Kode Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>
              <img src={contactLogo} alt="" className="h-10 w-auto object-contain" />
              Let's build something memorable.
            </h2>
            <p className="text-text/80 mb-6">Open to commissions, collaborations, and creative partnerships.</p>
            <div className="space-y-4">
                            <div>
                <a href="mailto:haniejunio19@gmail.com" className="link-underline text-lg text-text">
                  haniejunio19@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src={phLogo} alt="" className="w-5 h-5 object-contain" />
                <p>+63 0930 315 9167</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center py-10 text-text/70 text-sm border-t border-border/40 font-mono">
          © {currentYear} HFMJ. All rights reserved. | Built with React, TypeScript, and Vite.
        </footer>
      </div>

      {gallery ? (
        <div
          className="fixed inset-0 bg-text/80 flex items-center justify-center p-5 z-40 cursor-pointer"
          onClick={closeGallery}
        >
          <div
            className="modal-in relative w-full max-w-[820px] cursor-default"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <p className="m-0 text-white/80 text-sm font-mono">
                {gallery.index + 1} / {gallery.images.length}
              </p>
              <button
                type="button"
                className="text-white/80 hover:text-white text-sm bg-transparent border-0 cursor-pointer font-mono"
                onClick={closeGallery}
              >
                Close
              </button>
            </div>

            <div className="relative flex items-center">
              {gallery.images.length > 1 ? (
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={showPrev}
                  className="absolute left-2 z-10 w-9 h-9 rounded-full bg-text/60 text-white flex items-center justify-center border-0 cursor-pointer hover:bg-text/80 transition-colors"
                >
                  ‹
                </button>
              ) : null}

              <img
                key={gallery.index}
                src={gallery.images[gallery.index]}
                alt={`Preview ${gallery.index + 1} of ${gallery.images.length}`}
                className="modal-in block w-full max-h-[75vh] object-contain rounded-xl mx-auto"
              />

              {gallery.images.length > 1 ? (
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={showNext}
                  className="absolute right-2 z-10 w-9 h-9 rounded-full bg-text/60 text-white flex items-center justify-center border-0 cursor-pointer hover:bg-text/80 transition-colors"
                >
                  ›
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {selectedVideoUrl ? (
        <div
          className="fixed inset-0 bg-text/80 flex items-center justify-center p-5 z-40 cursor-pointer"
          onClick={() => setSelectedVideoUrl(null)}
        >
          <div
            className="modal-in w-full max-w-[880px] cursor-default"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <p className="m-0 text-white/80 text-sm font-mono">Project preview</p>
              <button
                type="button"
                className="text-white/80 hover:text-white text-sm bg-transparent border-0 cursor-pointer font-mono"
                onClick={() => setSelectedVideoUrl(null)}
              >
                Close
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-black shadow-custom">
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
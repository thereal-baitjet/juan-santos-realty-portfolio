  import React from "react";
  import { motion } from "framer-motion";
  import { ArrowRight, Download, Mail, Github, Linkedin, Globe, ExternalLink, Sparkles, ChevronUp, Menu, X, Music, Play, Languages } from "lucide-react";
  import { Card, CardContent } from "./components/ui/card.jsx";
  import { Button } from "./components/ui/button.jsx";

  function Badge({ children }) {
    return (
      <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-zinc-200 dark:border-zinc-800">
        {children}
      </span>
    );
  }

  function Section({ id, title, eyebrow, children }) {
    return (
      <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {eyebrow ? (
            <div className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">{eyebrow}</div>
          ) : null}
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">{title}</h2>
          {children}
        </motion.div>
      </section>
    );
  }

  const projects = [
    {
      title: "Take Care - Pet Game",
      subtitle: "iOS App Store published game",
      bullets: [
        "5.0 star rating on App Store",
        "Pet care simulation with idle gameplay",
        "Multiple pets, city exploration, stat management",
        "Available on iPhone, iPad, Mac, and Apple Vision",
      ],
      stack: ["iOS", "Swift", "Game Development"],
      link: "https://apps.apple.com/us/app/take-care-25f610/id6747323386",
      demo: null,
      isAppStore: true,
    },
    {
      title: "RLM Token",
      subtitle: "Polygon blockchain token on Uniswap",
      bullets: [
        "Deployed on Polygon network",
        "Available for trading on Uniswap",
        "Smart contract development",
        "DeFi tokenomics implementation",
      ],
      stack: ["Solidity", "Polygon", "DeFi", "Smart Contracts"],
      link: "https://app.uniswap.org/explore/tokens/polygon/0xc922566a905075d83d706998ff48c0ca5d215e89",
      demo: null,
      isCrypto: true,
    },
    {
      title: "XRP-LIVEv2",
      subtitle: "Cryptocurrency tracking and live data",
      bullets: [
        "Real-time XRP price monitoring",
        "Live cryptocurrency data integration",
        "Updated version with enhanced features",
      ],
      stack: ["JavaScript", "APIs", "Crypto"],
      link: "https://github.com/thereal-baitjet/XRP-LIVEv2",
      demo: "https://xrp-price-now.lovable.app/",
    },
    {
      title: "Bet Fullstack",
      subtitle: "Predictions, rankings & live betting platform",
      bullets: [
        "Full-stack betting application",
        "Real-time predictions and rankings",
        "Live betting functionality",
      ],
      stack: ["HTML", "JavaScript", "Full-stack"],
      link: "https://github.com/thereal-baitjet/bet-fullstack",
      demo: null,
    },
    {
      title: "Portfolio 2024",
      subtitle: "Juan Santos 2024 portfolio web apps",
      bullets: [
        "Collection of web applications",
        "HTML-based portfolio showcase",
        "Multiple project demonstrations",
      ],
      stack: ["HTML", "Web Apps", "Portfolio"],
      link: "https://github.com/thereal-baitjet/portfolio2024",
      demo: null,
    },
    {
      title: "Logo Inspiration Site",
      subtitle: "Design inspiration and logo showcase",
      bullets: [
        "Collection of logo designs and inspiration",
        "Creative design showcase platform",
        "Visual design portfolio",
      ],
      stack: ["HTML", "CSS", "Design"],
      link: "https://github.com/thereal-baitjet/logo-inspiration-site",
      demo: null,
    },
  ];

  const skills = {
    Development: ["Python", "JavaScript", "Vue.js", "Angular", "Node.js", "SQL", "Firebase", "APIs"],
    "AI & Machine Learning": ["GPT-4", "Claude", "Whisper", "Stable Diffusion", "Producer.ai", "Riffusion", "AI Music Generation", "Prompt Engineering"],
    "Automation & Integration": ["n8n", "GoHighLevel", "CRM", "API Integration", "Workflow Automation"],
    "Business & Finance": ["Series 7", "SIE", "Life & Health", "Realtor", "Wholesale", "Crypto Trading"],
    "Soft Skills": ["Leadership", "Strategy", "Client Management", "Negotiation"],
  };

  export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [language, setLanguage] = React.useState('en');

    // Language content
    const content = {
      en: {
        tagline: "Software • AI Expert • Real Estate Tech",
        heroTitle: "Building systems that turn messy, real-world data into decisions",
        heroDescription: "Developer, AI expert, and entrepreneur with deep expertise in GPT-4, Claude, and AI music generation. I build systems that turn messy, real-world data into decisions, with proven success in AI automation, finance, and property technology.",
        downloadResume: "Download Resume",
        viewProjects: "View Projects",
        viewExperience: "View Experience",
        home: "Home",
        projects: "Projects",
        experience: "Experience",
        music: "Music",
        skills: "Skills",
        contact: "Contact",
        projectsTitle: "Highlighted Projects",
        projectsEyebrow: "Proof of Work",
        experienceTitle: "Experience",
        experienceEyebrow: "Where I've Built",
        musicTitle: "Music",
        musicEyebrow: "Creative Work",
        skillsTitle: "Skills",
        skillsEyebrow: "Toolbox",
        contactTitle: "Contact",
        contactEyebrow: "Let's Collaborate",
        contactDescription: "I’m open to roles where I can build systems, automate workflows, and ship practical tools—especially in environments that value data-driven decisions and real-world impact.",
        emailMe: "Email Me",
        viewOnSpotify: "View on Spotify",
        watchOnYouTube: "Watch on YouTube",
        viewProfile: "View Profile",
        searchBaitjet: "Search Baitjet",
        appStore: "App Store",
        viewOnUniswap: "View on Uniswap",
        code: "Code",
        demo: "Demo",
        unavailable: "Unavailable",
        footer: "Built with React, Tailwind.",
        languageToggle: "ES"
      },
      es: {
        tagline: "Software • Experto en IA • Tecnología Inmobiliaria",
        heroTitle: "Construyendo sistemas que convierten datos reales desordenados en decisiones",
        heroDescription: "Desarrollador, experto en IA y emprendedor con amplia experiencia en GPT-4, Claude y generación de música con IA. Construyo sistemas que convierten datos reales desordenados en decisiones, con éxito comprobado en automatización de IA, finanzas y tecnología inmobiliaria.",
        downloadResume: "Descargar CV",
        viewProjects: "Ver Proyectos",
        viewExperience: "Ver Experiencia",
        home: "Inicio",
        projects: "Proyectos",
        experience: "Experiencia",
        music: "Música",
        skills: "Habilidades",
        contact: "Contacto",
        projectsTitle: "Proyectos Destacados",
        projectsEyebrow: "Prueba de Trabajo",
        experienceTitle: "Experiencia",
        experienceEyebrow: "Antecedentes",
        musicTitle: "Música",
        musicEyebrow: "Producción Creativa",
        skillsTitle: "Habilidades",
        skillsEyebrow: "Herramientas",
        contactTitle: "Contacto",
        contactEyebrow: "Colaboremos",
        contactDescription: "Estoy abierto a roles donde pueda construir sistemas, automatizar flujos de trabajo y crear herramientas prácticas, especialmente en entornos que valoran las decisiones basadas en datos y el impacto en el mundo real.",
        emailMe: "Enviar Email",
        viewOnSpotify: "Ver en Spotify",
        watchOnYouTube: "Ver en YouTube",
        viewProfile: "Ver Perfil",
        searchBaitjet: "Buscar Baitjet",
        appStore: "App Store",
        viewOnUniswap: "Ver en Uniswap",
        code: "Código",
        demo: "Demo",
        unavailable: "No Disponible",
        footer: "Construido con React, Tailwind.",
        languageToggle: "EN"
      }
    };

    const t = content[language];

    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-800 dark:text-zinc-100">
        {/* Nav */}
        <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-zinc-950/60 backdrop-blur border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <a href="#home" className="font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Juan Santos
            </a>
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#home" className="hover:opacity-80 transition-opacity">{t.home}</a>
              <a href="#projects" className="hover:opacity-80 transition-opacity">{t.projects}</a>
              <a href="#experience" className="hover:opacity-80 transition-opacity">{t.experience}</a>
              <a href="#music" className="hover:opacity-80 transition-opacity">{t.music}</a>
              <a href="#skills" className="hover:opacity-80 transition-opacity">{t.skills}</a>
              <a href="#contact" className="hover:opacity-80 transition-opacity">{t.contact}</a>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-2xl hidden sm:inline-flex"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              >
                <Languages className="mr-2 h-4 w-4"/>
                {t.languageToggle}
              </Button>
              <Button asChild className="rounded-2xl hidden sm:inline-flex">
                <a href="#contact"><Mail className="mr-2 h-4 w-4"/>{t.contact}</a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="sm:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur"
            >
              <div className="px-4 py-4 space-y-3">
                <a
                  href="#home"
                  className="block text-sm hover:opacity-80 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.home}
                </a>
                <a
                  href="#projects"
                  className="block text-sm hover:opacity-80 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.projects}
                </a>
                <a
                  href="#experience"
                  className="block text-sm hover:opacity-80 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.experience}
                </a>
                <a
                  href="#music"
                  className="block text-sm hover:opacity-80 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.music}
                </a>
                <a
                  href="#skills"
                  className="block text-sm hover:opacity-80 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.skills}
                </a>
                <a
                  href="#contact"
                  className="block text-sm hover:opacity-80 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.contact}
                </a>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-2xl w-full mb-2"
                    onClick={() => {
                      setLanguage(language === 'en' ? 'es' : 'en');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Languages className="mr-2 h-4 w-4"/>
                    {t.languageToggle}
                  </Button>
                  <Button asChild className="rounded-2xl w-full">
                    <a href="#contact"><Mail className="mr-2 h-4 w-4"/>{t.contact}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{t.tagline}</p>
              <h1 className="mt-3 text-4xl sm:text-6xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
                {t.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-zinc-600 dark:text-zinc-300">
                {t.heroDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="/Juan_Santos_Bilingual_Tech_Resume_WebsiteFix.pdf" download="Juan_Santos_Bilingual_Tech_Resume_WebsiteFix.pdf">
                    <Download className="mr-2 h-4 w-4"/> {t.downloadResume}
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href="#projects">
                    {t.viewProjects} <ArrowRight className="ml-2 h-4 w-4"/>
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href="#experience">
                    {t.viewExperience} <ArrowRight className="ml-2 h-4 w-4"/>
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-zinc-600 dark:text-zinc-300">
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://github.com/thereal-baitjet" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4"/> GitHub
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://linkedin.com/in/juansantosrealty" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4"/> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://goldinthehudson.com" target="_blank" rel="noreferrer">
                  <Globe className="h-4 w-4"/> Gold in the Hudson
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://twitter.com/Baitjet4" target="_blank" rel="noreferrer">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @Baitjet4
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-80" href="https://twitter.com/RLMREALMONEY" target="_blank" rel="noreferrer">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @RLMREALMONEY
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <Section id="projects" title={t.projectsTitle} eyebrow={t.projectsEyebrow}>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="rounded-2xl shadow-sm border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{p.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.subtitle}</p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2 items-start">
                          <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      {p.status ? (
                        <span className="inline-flex items-center text-sm text-amber-600 dark:text-amber-400">
                          <span className="mr-1 h-2 w-2 rounded-full bg-amber-500"></span>
                          {t.unavailable}
                        </span>
                      ) : p.isAppStore ? (
                        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:underline">
                          <svg className="mr-1 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          {t.appStore}
                        </a>
                      ) : p.isCrypto ? (
                        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline">
                          <svg className="mr-1 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          {t.viewOnUniswap}
                        </a>
                      ) : (
                        <>
                          <a href={p.link} className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                            <Github className="mr-1 h-3.5 w-3.5"/> {t.code}
                          </a>
                          {p.demo && (
                            <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                              <ExternalLink className="mr-1 h-3.5 w-3.5"/> {t.demo}
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title={t.experienceTitle} eyebrow={t.experienceEyebrow}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Santos Business Consulting</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Founder • 2024 – Present</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Annual advisory package with systems, automation, and finance guidance.</li>
                  <li>SEO + referrals → growing recurring clients.</li>
                  <li>Designs lean, pragmatic workflows with measurable ROI.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Freelance Developer</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Software & AI Projects • 2023 – Present</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Built AutoComp Genie, Diet-Scanner, Whisper Sales Assistant.</li>
                  <li>Shipped with Vue, Angular, Firebase, Python.</li>
                  <li>Improved decision-making speed by up to ~30%.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">New York Life</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Financial Professional • 2023</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Solutions for young families; compliance-first approach.</li>
                  <li>CPA + community partnerships for literacy outreach.</li>
                  <li>Risk analysis and pipeline development.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Entrepreneurship</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Real Estate & Crypto • 2013 – Present</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>10-ATM route: recurring passive income.</li>
                  <li>Wholesale deals: $20K–$100K spreads; one &gt;$200K.</li>
                  <li>BlockBrick Fund: tokenized real estate model.</li>
                  <li className="text-zinc-500 dark:text-zinc-400 italic">Active crypto portfolio management with positive returns.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Music */}
        <Section id="music" title={t.musicTitle} eyebrow={t.musicEyebrow}>
          <div className="max-w-4xl">
            <p className="text-zinc-600 dark:text-zinc-300 mb-8">
              When I'm not coding or building businesses, I create music across various genres. From production to streaming, here's where you can find my musical work.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6 text-center">
                  <Music className="h-8 w-8 mx-auto mb-4 text-green-600 dark:text-green-400" />
                  <h3 className="text-lg font-semibold mb-2">Spotify</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">2,216 monthly listeners • Baitjet</p>
                  <Button asChild variant="outline" className="rounded-2xl w-full">
                    <a href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG" target="_blank" rel="noreferrer">
                      <Play className="mr-2 h-4 w-4"/> {t.viewOnSpotify}
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6 text-center">
                  <svg className="h-8 w-8 mx-auto mb-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">YouTube Music</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">Music videos and live performances</p>
                  <Button asChild variant="outline" className="rounded-2xl w-full">
                    <a href="https://www.youtube.com/@Mr.J.C.Santos" target="_blank" rel="noreferrer">
                      <Play className="mr-2 h-4 w-4"/> {t.watchOnYouTube}
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6 text-center">
                  <svg className="h-8 w-8 mx-auto mb-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Producer.ai</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">AI-powered music production</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 italic">Countless songs available • Ask for links if needed</p>
                  <Button asChild variant="outline" className="rounded-2xl w-full">
                    <a href="https://www.producer.ai/baitjet" target="_blank" rel="noreferrer">
                      <Music className="mr-2 h-4 w-4"/> {t.viewProfile}
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6 text-center">
                  <svg className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 1c2.97 0 5.46.98 7.28 2.66l-3.57 2.77c-.98-.66-2.23-1.06-3.71-1.06-2.86 0-5.29 1.93-6.16 4.53H2.18V7.07C3.99 3.47 7.7 1 12 1z"/>
                  </svg>
                  <h3 className="text-lg font-semibold mb-2">Google Music</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">Discover Baitjet across all platforms</p>
                  <Button asChild variant="outline" className="rounded-2xl w-full">
                    <a href="https://www.google.com/search?q=baitjet" target="_blank" rel="noreferrer">
                      <Play className="mr-2 h-4 w-4"/> {t.searchBaitjet}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title={t.skillsTitle} eyebrow={t.skillsEyebrow}>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([group, items]) => (
              <Card key={group} className="rounded-2xl border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold mb-4">{group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((it) => (
                      <Badge key={it}>{it}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title={t.contactTitle} eyebrow={t.contactEyebrow}>
          <div className="max-w-2xl">
            <p className="text-zinc-600 dark:text-zinc-300">
              {t.contactDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="mailto:baitjet@gmail.com"><Mail className="mr-2 h-4 w-4"/> {t.emailMe}</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="https://github.com/thereal-baitjet" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/> GitHub</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="https://linkedin.com/in/juansantosrealty" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4"/> LinkedIn</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="https://goldinthehudson.com" target="_blank" rel="noreferrer"><Globe className="mr-2 h-4 w-4"/> Gold in the Hudson</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            asChild
            size="sm"
            className="rounded-full w-12 h-12 p-0 shadow-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <a href="#home">
              <ChevronUp className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Juan Santos. {t.footer}
          </div>
        </footer>
      </div>
    );
  }

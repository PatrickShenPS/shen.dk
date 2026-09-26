import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Banner.module.css'

const translations = {
  da: {
    nav: ['Profil', 'Uddannelse', 'Erfaring', 'Projekter', 'Kompetencer'],
    sectionLabels: {
      intro: 'Bachelor (BSc) i Softwareudvikling',
      profile: 'Profil',
      education: 'Uddannelse',
      experience: 'Erhvervserfaring',
      projects: 'Udvalgte projekter',
      skills: 'Kompetencer',
    },
    heroTitle: 'Softwareudvikler med fokus på algoritmer, systemdesign og web.',
    heroSummary:
      'Nyuddannet bachelor i softwareudvikling fra IT-Universitetet i København med et stærkt fagligt fundament inden for algoritmer, datastrukturer, softwarearkitektur og full-stack webudvikling.',
    highlightsTitle: 'Højdepunkter',
    highlights: [
      'Full-stack udvikling i C#, React og Azure',
      'Erfaring med undervisning, IT-support og projektarbejde',
    ],
    aboutHeading: 'Om mig',
    aboutText:
      'Jeg er en nyuddannet softwareudvikler, der kombinerer stærk teoretisk viden med praktisk problemløsning. Fra komplekse algoritmer og grafproblemer til praktisk IT-support og undervisning er jeg vant til at løse opgaver både struktureret og samarbejdende.',
    educationHeading: 'Akademisk baggrund',
    experienceHeading: 'Professionel erfaring',
    projectsHeading: 'Projektarbejde',
    skillsHeading: 'Færdigheder og værktøjer',
    contact: {
      phone: 'Tlf.: +45 27 58 02 11',
      email: 'E-mail: patrick@shen.dk',
      dob: 'Fødselsdato: 14. januar 2003',
    },
    education: [
      {
        title: 'Bachelor (BSc) i Softwareudvikling',
        place: 'IT-Universitetet i København',
        period: '1. september 2023 – 23. juni 2026',
        detail: 'Udvalgte karakterer:',
        gradeList: [
          'Digital transformation og forretningsmodeller: 12 / A',
          'Algorithmic Problem Solving: 10 / B',
          'Introduktion til security: 10 / B',
          'Algoritmer og datastrukturer: 10 / B',
          'Foundations of Computing - Discrete Mathematics: 10 / B',
          'Reflektion over IT: 10 / B',
        ],
      },
      {
        title: 'Bachelor i Jura (Ikke afsluttet)',
        place: 'Det Juridiske Fakultet – Københavns Universitet',
        period: '1. september 2022 – 1. september 2023',
      },
      {
        title: 'HTX (Computer Science)',
        place: 'NEXT Sukkertoppen Gymnasium',
        period: '12. august 2019 – 24. juni 2022',
      },
    ],
    workExperience: [
      {
        title: 'Underviser / Teaching Assistant (TA)',
        place: 'IT-Universitetet i København',
        period: '1. august 2026 – 31. december 2026',
        bullets: [
          'Underviste og assisterede studerende på faget Digital transformation og forretningsmodeller.',
          'Varetog pædagogisk vejledning, øvelsestimer og faglig støtte i tæt samarbejde med kursusansvarlig.',
        ],
      },
      {
        title: 'IT-supporter og Eksamensvært',
        place: 'Københavns Universitet',
        period: '14. november 2024 – Nu',
        bullets: [
          'Teknisk support, fejlfinding og udbedring af IT-problemer for studerende under eksamener på både dansk og engelsk.',
          'Koordinering af eksamenstilsyn, vagtplanlægning samt konflikthåndtering i pressede situationer.',
        ],
      },
      {
        title: 'Student Software Developer (Praktik / Samarbejde)',
        place: 'Danoffice IT (i samarbejde med ITU)',
        period: '6. februar 2025 – 30. juni 2025',
        bullets: [
          'Udviklede en platform til generering af rapporter med heatmaps baseret på IMU-positionsdata under kurset Industrial Software Engineering.',
          'Strømlinede produktionsklargøringsprocesser gennem automatiseret rapporthåndtering.',
        ],
      },
      {
        title: 'Lærervikar',
        place: 'Avedøre Skole – Hvidovre Kommune',
        period: '26. april 2023 – 11. oktober 2023',
        bullets: [
          'Underviste i diverse fag på tværs af klassetrin samt anvendte pædagogiske værktøjer til fremme af læring og trivsel.',
        ],
      },
    ],
    projects: [
      {
        title: 'Bachelorprojekt: Graph Solver',
        meta: '2026 // ITU',
        text: 'Udviklede en højtydende algoritme i C# (.NET) til løsning af NP-hårde graf-optimeringsproblemer (Minimum Dominating Set). Implementerede tilpassede datastrukturer såsom Indexed Max Heap, to-niveaus konfigurationsstyring og heuristiske perturbationsstrategier.',
      },
      {
        title: 'Report Generation & Managing Web Application',
        meta: '2025 // ITU & Danoffice IT',
        text: 'Full-stack webapplikation udviklet i et Scrum-team på 9 personer med C# og React. Integrerede Azure cloud-services (Entra ID, Key Vault, App Services) til sikker drift og brugerhåndtering.',
      },
      {
        title: 'Micro-blogging Web Application',
        meta: '2024 // ITU',
        text: 'Byggede en skalerbar full-stack webapplikation baseret på MVC-arkitektur med vægt på software-designprincipper og Git/GitHub-workflows.',
      },
      {
        title: 'Interactive Map Displaying Tool',
        meta: '2024 // ITU',
        text: 'Udviklede en Java-applikation til interaktiv kortvisning med optimeret 2D-rendering (KD-Tree) og ruteplanlægning via A*-algoritmen.',
      },
      {
        title: 'Personal Homepage / Domain Project',
        meta: '2025 // Hobbyprojekt',
        text: 'Design og udvikling af personlig hjemmeside med React, Cloudflare services og GitHub Actions CI/CD-pipeline.',
      },
    ],
    skills: [
      {
        heading: 'Programmeringssprog',
        items: ['C', 'C#', 'F#', 'Python', 'Java', 'Go', 'JavaScript', 'SQL'],
      },
      {
        heading: 'Frameworks & Teknologier',
        items: ['.NET / ASP.NET', 'React', 'PostgreSQL', 'SQLite', 'Azure Services', 'Cloudflare', 'Git / GitHub', 'GitHub Actions'],
      },
      {
        heading: 'Datalogisk teori & metode',
        items: ['Algoritmer & Datastrukturer', 'Graf-teori & Heuristik', 'Softwarearkitektur', 'Distribuerede Systemer', 'Operativsystemer', 'Cyber/IT-sikkerhed'],
      },
      {
        heading: 'Hardware & IT-infrastruktur',
        items: ['Netværks- og AV-opsætning', 'Computerhardware og komponenter'],
      },
      {
        heading: 'Personlige & pædagogiske',
        items: ['Teknisk formidling og undervisning', 'Konflikthåndtering', 'Scrum/agil holddynamik', 'Tværdisciplinært samarbejde'],
      },
      {
        heading: 'Sprog',
        items: ['Dansk (Modersmål)', 'Engelsk (Flydende i skrift og tale / undervisningsniveau)'],
      },
    ],
  },
  en: {
    nav: ['Profile', 'Education', 'Experience', 'Projects', 'Skills'],
    sectionLabels: {
      intro: 'Bachelor (BSc) in Software Development',
      profile: 'Profile',
      education: 'Education',
      experience: 'Experience',
      projects: 'Selected projects',
      skills: 'Skills',
    },
    heroTitle: 'Software developer focused on algorithms, system design, and web technologies.',
    heroSummary:
      'A newly graduated software engineering bachelor from IT University of Copenhagen with a strong foundation in algorithms, data structures, software architecture, and full-stack web development.',
    highlightsTitle: 'Highlights',
    highlights: [
      'Full-stack development in C#, React, and Azure',
      'Experience in teaching, IT support, and project work',
    ],
    aboutHeading: 'About me',
    aboutText:
      'I am a newly graduated software developer who combines strong theoretical knowledge with practical problem-solving. From complex algorithms and graph problems to practical IT support and teaching, I am used to solving tasks both systematically and collaboratively.',
    educationHeading: 'Academic background',
    experienceHeading: 'Professional experience',
    projectsHeading: 'Project work',
    skillsHeading: 'Skills and tools',
    contact: {
      phone: 'Phone: +45 27 58 02 11',
      email: 'Email: patrick@shen.dk',
      dob: 'Date of birth: 14 January 2003',
    },
    education: [
      {
        title: 'Bachelor (BSc) in Software Development',
        place: 'IT University of Copenhagen',
        period: '1 September 2023 – 23 June 2026',
        detail: 'Selected grades:',
        gradeList: [
          'Digital transformation and business models: 12 / A',
          'Algorithmic Problem Solving: 10 / B',
          'Introduction to security: 10 / B',
          'Algorithms and data structures: 10 / B',
          'Foundations of Computing - Discrete Mathematics: 10 / B',
          'Reflection on IT: 10 / B',
        ],
      },
      {
        title: 'Bachelor of Laws (unfinished)',
        place: 'Faculty of Law – University of Copenhagen',
        period: '1 September 2022 – 1 September 2023',
      },
      {
        title: 'Upper Secondary School (Computer Science)',
        place: 'NEXT Sukkertoppen Gymnasium',
        period: '12 August 2019 – 24 June 2022',
      },
    ],
    workExperience: [
      {
        title: 'Lecturer / Teaching Assistant (TA)',
        place: 'IT University of Copenhagen',
        period: '1 August 2026 – 31 December 2026',
        bullets: [
          'Taught and assisted students in the subject Digital transformation and business models.',
          'Handled pedagogical guidance, exercise sessions, and academic support in close collaboration with the course responsible.',
        ],
      },
      {
        title: 'IT Supporter and Exam Host',
        place: 'University of Copenhagen',
        period: '14 November 2024 – Present',
        bullets: [
          'Technical support, troubleshooting, and resolution of IT issues for students during exams in both Danish and English.',
          'Coordinated exam supervision, shift planning, and conflict resolution in high-pressure situations.',
        ],
      },
      {
        title: 'Student Software Developer (Internship / Collaboration)',
        place: 'Danoffice IT (in collaboration with ITU)',
        period: '6 February 2025 – 30 June 2025',
        bullets: [
          'Developed a platform for generating reports with heatmaps based on IMU position data in the course Industrial Software Engineering.',
          'Streamlined production readiness processes through automated report handling.',
        ],
      },
      {
        title: 'Substitute Teacher',
        place: 'Avedøre Skole – Hvidovre Municipality',
        period: '26 April 2023 – 11 October 2023',
        bullets: [
          'Taught various subjects across grade levels and used pedagogical tools to promote learning and well-being.',
        ],
      },
    ],
    projects: [
      {
        title: 'Bachelor Project: Graph Solver',
        meta: '2026 // ITU',
        text: 'Developed a high-performance algorithm in C# (.NET) for NP-hard graph optimization problems (Minimum Dominating Set). Implemented custom data structures such as Indexed Max Heap, two-level configuration management, and heuristic perturbation strategies.',
      },
      {
        title: 'Report Generation & Managing Web Application',
        meta: '2025 // ITU & Danoffice IT',
        text: 'Full-stack web application developed in a 9-person Scrum team using C# and React. Integrated Azure cloud services (Entra ID, Key Vault, App Services) for secure operations and user management.',
      },
      {
        title: 'Micro-blogging Web Application',
        meta: '2024 // ITU',
        text: 'Built a scalable full-stack web application based on MVC architecture with attention to software design principles and Git/GitHub workflows.',
      },
      {
        title: 'Interactive Map Displaying Tool',
        meta: '2024 // ITU',
        text: 'Developed a Java application for interactive map visualization with optimized 2D rendering (KD-Tree) and route planning via the A* algorithm.',
      },
      {
        title: 'Personal Homepage / Domain Project',
        meta: '2025 // Hobby project',
        text: 'Design and development of a personal website using React, Cloudflare services, and a GitHub Actions CI/CD pipeline.',
      },
    ],
    skills: [
      {
        heading: 'Programming languages',
        items: ['C', 'C#', 'F#', 'Python', 'Java', 'Go', 'JavaScript', 'SQL'],
      },
      {
        heading: 'Frameworks & Technologies',
        items: ['.NET / ASP.NET', 'React', 'PostgreSQL', 'SQLite', 'Azure Services', 'Cloudflare', 'Git / GitHub', 'GitHub Actions'],
      },
      {
        heading: 'Computer science theory & methods',
        items: ['Algorithms & Data Structures', 'Graph Theory & Heuristics', 'Software Architecture', 'Distributed Systems', 'Operating Systems', 'Cyber/IT Security'],
      },
      {
        heading: 'Hardware & IT infrastructure',
        items: ['Network and AV setup', 'Computer hardware and components'],
      },
      {
        heading: 'Personal & pedagogical',
        items: ['Technical communication and teaching', 'Conflict management', 'Scrum/agile team dynamics', 'Cross-disciplinary collaboration'],
      },
      {
        heading: 'Languages',
        items: ['Danish (native)', 'English (fluent in writing and speaking / teaching level)'],
      },
    ],
  },
}

function Home() {
  const [language, setLanguage] = useState('da')
  const content = translations[language]

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.titleWrap}>
          <div className={styles.titleLabelRow}>
            <Link to="/" className={styles.backLink} aria-label="Go back to welcome page">
              ←
            </Link>
            <span className={styles.kicker}>Portfolio</span>
          </div>
          <h1>Patrick Shen</h1>
        </div>

        <div className={styles.rightCluster}>
          <nav className={styles.nav} aria-label={language === 'da' ? 'Hovednavigation' : 'Main navigation'}>
            <a href="#profil">{content.nav[0]}</a>
            <a href="#uddannelse">{content.nav[1]}</a>
            <a href="#erfaring">{content.nav[2]}</a>
            <a href="#projekter">{content.nav[3]}</a>
            <a href="#kompetencer">{content.nav[4]}</a>
          </nav>

          <div className={styles.langToggle} data-language={language}>
            <span className={styles.langActiveMarker} aria-hidden="true" />
            <button
              type="button"
              className={`${styles.langOption} ${language === 'da' ? styles.active : ''}`}
              onClick={() => setLanguage('da')}
              aria-label="Skift til dansk"
            >
              DA
            </button>
            <button
              type="button"
              className={`${styles.langOption} ${language === 'en' ? styles.active : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{content.sectionLabels.intro}</p>
            <h2>{content.heroTitle}</h2>
            <p className={styles.summary}>{content.heroSummary}</p>
            <div className={styles.contactRow}>
              <span>{content.contact.phone}</span>
              <span>{content.contact.email}</span>
              <span>{content.contact.dob}</span>
            </div>
          </div>

          <aside className={styles.card}>
            <h3>{content.highlightsTitle}</h3>
            <ul className={styles.cardList}>
              {content.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section id="profil" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>{content.sectionLabels.profile}</span>
            <h3>{content.aboutHeading}</h3>
          </div>
          <p>{content.aboutText}</p>
        </section>

        <section id="uddannelse" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>{content.sectionLabels.education}</span>
            <h3>{content.educationHeading}</h3>
          </div>

          <div className={styles.timeline}>
            {content.education.map((item) => (
              <article key={item.title} className={styles.timelineItem}>
                <div className={styles.meta}>
                  <span className={styles.badge}>{item.period}</span>
                </div>
                <div className={styles.content}>
                  <h4>{item.title}</h4>
                  <p className={styles.place}>{item.place}</p>
                  {item.detail && <p>{item.detail}</p>}
                  {item.gradeList && (
                    <ul className={styles.gradeList}>
                      {item.gradeList.map((grade) => (
                        <li key={grade}>{grade}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="erfaring" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>{content.sectionLabels.experience}</span>
            <h3>{content.experienceHeading}</h3>
          </div>

          <div className={styles.timeline}>
            {content.workExperience.map((item) => (
              <article key={item.title} className={styles.timelineItem}>
                <div className={styles.meta}>
                  <span className={styles.badge}>{item.period}</span>
                </div>
                <div className={styles.content}>
                  <h4>{item.title}</h4>
                  <p className={styles.place}>{item.place}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projekter" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>{content.sectionLabels.projects}</span>
            <h3>{content.projectsHeading}</h3>
          </div>

          <div className={styles.projectList}>
            {content.projects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h4>{project.title}</h4>
                  <span>{project.meta}</span>
                </div>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="kompetencer" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>{content.sectionLabels.skills}</span>
            <h3>{content.skillsHeading}</h3>
          </div>

          <div className={styles.skills}>
            {content.skills.map((group) => (
              <div key={group.heading} className={styles.skillGroup}>
                <h4>{group.heading}</h4>
                <div className={styles.chips}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.chip}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

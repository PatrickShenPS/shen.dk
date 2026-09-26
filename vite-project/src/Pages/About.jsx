import { Link } from 'react-router-dom'

function About() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '2rem',
      background: 'linear-gradient(180deg, #0b1220 0%, #111827 100%)',
      color: '#e5edf7',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <section style={{
        maxWidth: '720px',
        background: 'rgba(15, 23, 42, 0.9)',
        border: '1px solid rgba(148, 163, 184, 0.25)',
        borderRadius: '18px',
        padding: '2rem',
        boxShadow: '0 12px 40px rgba(15, 23, 42, 0.35)',
      }}>
        <p style={{ letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7dd3fc', marginBottom: '0.75rem' }}>
          Profil
        </p>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Patrick Shen</h1>
        <p style={{ lineHeight: 1.7, color: '#dbeafe' }}>
          Jeg er en nyuddannet softwareudvikler med interesse for algoritmer, webteknologier og praktisk problemløsning.
          Mit fokus ligger på at kombinere teknisk dygtighed med tydelig kommunikation, samarbejde og læring i teams.
        </p>
        <Link to="/" style={{
          display: 'inline-block',
          marginTop: '1.25rem',
          background: '#38bdf8',
          color: '#082f49',
          padding: '0.8rem 1.2rem',
          borderRadius: '999px',
          fontWeight: 700,
          textDecoration: 'none',
        }}>
          Tilbage til portfolio
        </Link>
      </section>
    </main>
  )
}

export default About

import { Link } from 'react-router-dom'

const games = [
  {
    title: 'Prototype 01',
    type: 'Action / Puzzle',
    description:
      'A small playable prototype focused on fast reactions, level flow, and polished feedback loops.',
  },
  {
    title: 'Prototype 02',
    type: 'Strategy / Systems',
    description:
      'An experimental game design project exploring progression, economy, and decision-driven gameplay.',
  },
  {
    title: 'Prototype 03',
    type: 'Arcade / Exploration',
    description:
      'A concept prototype built to test movement, atmosphere, and player rhythm in a compact experience.',
  },
]

function Games() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Link
                to="/"
                aria-label="Go back to welcome page"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: '50%',
                  color: 'var(--text)',
                  border: '1px solid var(--secondary)',
                  background: 'transparent',
                  fontSize: '1.3rem',
                  textDecoration: 'none',
                }}
              >
                ←
              </Link>
              <p
                style={{
                  margin: 0,
                  color: 'var(--text)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                Games
              </p>
            </div>
            <h1 style={{ margin: 0, fontSize: 'clamp(2.1rem, 4vw, 3.5rem)', color: 'var(--text)' }}>Game projects</h1>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'var(--text)',
                background: 'var(--card)',
                border: '1px solid var(--secondary)',
                borderRadius: '999px',
                padding: '0.75rem 1.1rem',
                fontWeight: 600,
              }}
            >
              Welcome
            </Link>
            <Link
              to="/portfolio"
              style={{
                textDecoration: 'none',
                color: 'var(--buttonText)',
                background: 'var(--primary)',
                borderRadius: '999px',
                padding: '0.75rem 1.1rem',
                fontWeight: 700,
              }}
            >
              Portfolio
            </Link>
          </div>
        </div>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.2rem',
          }}
        >
          {games.map((game) => (
            <article
              key={game.title}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--secondary)',
                borderRadius: '20px',
                padding: '1.5rem',
              }}
            >
              <p style={{ margin: 0, color: 'var(--text)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {game.type}
              </p>
              <h2 style={{ margin: '0.8rem 0', fontSize: '1.6rem', color: 'var(--text)' }}>{game.title}</h2>
              <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--text)' }}>{game.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Games

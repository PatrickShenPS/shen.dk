import { Link } from 'react-router-dom'

export const games = [
  {
    slug: 'ice-box',
    title: 'Ice Box',
    type: 'Puzzle / Logic',
    description:
      'A browser-based PuzzleScript prototype using box-pushing, movement, and spatial reasoning.',
    src: '/ice-box.html',
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
            <Link
              key={game.slug}
              to={game.src ? `/games/${game.slug}` : '#'}
              style={{
                display: 'block',
                textDecoration: 'none',
                background: 'var(--card)',
                border: '1px solid var(--secondary)',
                borderRadius: '20px',
                overflow: 'hidden',
                padding: '1.5rem',
                color: 'var(--text)',
                cursor: game.src ? 'pointer' : 'default',
              }}
            >
              <p style={{ margin: 0, color: 'var(--text)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {game.type}
              </p>
              <h2 style={{ margin: '0.8rem 0', fontSize: '1.6rem', color: 'var(--text)' }}>{game.title}</h2>
              <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--text)' }}>{game.description}</p>

              {game.src && (
                <div
                  style={{
                    marginTop: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--buttonText)',
                    background: 'var(--primary)',
                    borderRadius: '999px',
                    padding: '0.65rem 1rem',
                    fontWeight: 700,
                  }}
                >
                  Play game
                  <span aria-hidden="true">→</span>
                </div>
              )}
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Games

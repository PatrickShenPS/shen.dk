import { Link, useParams } from 'react-router-dom'
import { games } from './Games'

function GameDetail() {
  const { slug } = useParams()
  const game = games.find((item) => item.slug === slug)

  if (!game) {
    return (
      <main
        style={{
          minHeight: '100vh',
          background: 'var(--bg)',
          color: 'var(--text)',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
          fontFamily: 'Segoe UI, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '1rem' }}>Game not found</h1>
          <Link
            to="/games"
            style={{
              textDecoration: 'none',
              color: 'var(--buttonText)',
              background: 'var(--primary)',
              padding: '0.8rem 1.2rem',
              borderRadius: '999px',
              fontWeight: 700,
            }}
          >
            Back to games
          </Link>
        </div>
      </main>
    )
  }

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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Link
              to="/games"
              aria-label="Go back to games page"
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
            <div>
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
                Game
              </p>
              <h1 style={{ margin: '0.4rem 0 0', fontSize: 'clamp(2rem, 3vw, 3rem)' }}>{game.title}</h1>
            </div>
          </div>

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

        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--secondary)',
            borderRadius: '22px',
            padding: '1rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          }}
        >
          <iframe
            title={game.title}
            src={game.src}
            style={{
              display: 'block',
              width: '100%',
              minHeight: '80vh',
              border: 'none',
              borderRadius: '16px',
              background: '#000',
            }}
          />
        </div>
      </div>
    </main>
  )
}

export default GameDetail

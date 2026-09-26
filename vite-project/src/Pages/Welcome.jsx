import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <section
        style={{
          width: 'min(960px, 100%)',
          background: 'var(--card)',
          border: '2px solid var(--secondary)',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '3rem 2rem 2rem',
            borderBottom: '2px solid var(--secondary)',
            background: 'var(--bg)',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              fontWeight: 700,
            }}
          >
            Welcome
          </p>
          <h1
            style={{
              margin: '0.8rem 0 0.6rem',
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.05em',
              color: 'var(--text)',
            }}
          >
            Patrick Shen
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: '620px',
              color: 'var(--text)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            Software developer, problem solver, and creative builder exploring code, systems,
            and game development.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            padding: '2rem',
            background: 'var(--card)',
          }}
        >
          <Link
            to="/portfolio"
            style={{
              display: 'block',
              padding: '1.25rem 1.1rem',
              borderRadius: '18px',
              textDecoration: 'none',
              color: 'var(--buttonText)',
              background: 'var(--primary)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                opacity: 0.9,
              }}
            >
              <span>Portfolio</span>
            </div>
            <div style={{ marginTop: '0.8rem', fontSize: '1.5rem', fontWeight: 700 }}>Open my CV</div>
          </Link>

          <Link
            to="/games"
            style={{
              display: 'block',
              padding: '1.25rem 1.1rem',
              borderRadius: '18px',
              textDecoration: 'none',
              color: 'var(--text)',
              background: 'var(--secondary)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                opacity: 0.9,
              }}
            >
              <span>Games</span>
            </div>
            <div style={{ marginTop: '0.8rem', fontSize: '1.5rem', fontWeight: 700 }}>See my projects</div>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Welcome

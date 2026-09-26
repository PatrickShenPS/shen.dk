import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import Home from './Pages/Home'
import Games from './Pages/Games'
import About from './Pages/About'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <button
        type="button"
        className="themeToggle"
        onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        <span aria-hidden="true">{theme === 'light' ? '☼' : '☾︎'}</span>
      </button>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

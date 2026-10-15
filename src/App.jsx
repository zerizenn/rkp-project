import { Link, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Visits from './pages/Visits'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Link to="/about" className="site-logo">
          VetClinic
        </Link>

        <nav className="site-nav">
          <Link to="/login">Вход</Link>
          <Link to="/visits">Приёмы</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />

          <Route path="/login" element={<Login />} />

          <Route path="/visits" element={<Visits />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
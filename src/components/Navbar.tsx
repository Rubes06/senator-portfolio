import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/bills', label: 'Bills & Motions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const shown = links.filter((l) => l.to !== '/gallery' || profile.gallery.length > 0)
  return (
    <header className="nav">
      <div className="container nav-in">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="dot" />{profile.shortName}
        </Link>
        <nav className={`links ${open ? 'open' : ''}`}>
          {shown.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
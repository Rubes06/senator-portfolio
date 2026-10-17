import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-in">
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.office}</p>
          <p className="tag">{profile.tagline}</p>
        </div>
        <nav>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/bills">Bills &amp; Motions</Link>
          {profile.gallery.length > 0 && <Link to="/gallery">Gallery</Link>}
          <Link to="/about">About</Link>
        </nav>
      </div>
      <div className="copy">&copy; {new Date().getFullYear()} Office of {profile.name}</div>
    </footer>
  )
}
import Hero from './components/Hero'
import RecordStrip from './components/RecordStrip'
import Projects, { Legislation, Gallery } from './components/Projects'
import About from './components/About'
import { profile } from './data/profile'

export default function App() {
  return (
    <div className="wrap">
      <Hero />
      <RecordStrip />
      <Projects />
      <Legislation />
      <Gallery />
      <About />
      <footer>
        <span>&copy; {new Date().getFullYear()} Office of {profile.name}</span>
      </footer>
    </div>
  )
}
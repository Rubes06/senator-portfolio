import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import RecordStrip from '../components/RecordStrip'
import Icon from '../components/Icon'
import { Reveal, Words } from '../components/Reveal'
import { categories, projects } from '../data/projects'
import { tone } from '../data/palette'
import Marquee from '../components/Marquee'
import FlagBanner from '../components/FlagBanner'
const works = categories.filter((c) => c.id !== 'legislation')

export default function Home() {
  return (
    <>
      <Hero />
      <RecordStrip />
      <Marquee />
      <FlagBanner />

      <section className="section">
        <div className="container">
          <Words as="h2" text="What has been delivered" />
          <Words className="lead" text="Tap any sector to see the projects behind the numbers." />
          <div className="tiles">
            {works.map((c, i) => {
              const n = projects.filter((p) => p.category === c.id).length
              return (
                <Reveal key={c.id} delay={(i % 4) * 80}>
                  <Link to="/projects" state={{ cat: c.id }} className="tile" style={tone(i)}>
                    <span className="ico"><Icon name={c.icon} /></span>
                    <h3>{c.label}</h3>
                    <p>{n} {n === 1 ? 'project' : 'projects'}</p>
                    <span className="more">View <ArrowRight size={16} /></span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <Reveal className="cta">
          <h2>One link. Everything he has done.</h2>
          <p>Browse the full record of projects, bills and motions across Ogun Central.</p>
          <Link to="/projects" className="btn dark">Explore all projects <ArrowRight size={18} /></Link>
        </Reveal>
      </section>
    </>
  )
}
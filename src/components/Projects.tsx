import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Icon from './Icon'
import { Reveal } from './Reveal'
import { categories, projects, STATUS_LABEL } from '../data/projects'
import { profile } from '../data/profile'
import { tone } from '../data/palette'
import type { Project } from '../types'

const hide = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = 'none'
}
const worksCats = categories.filter((c) => c.id !== 'legislation')

function Card({ p, icon, i }: { p: Project; icon: string; i: number }) {
  const n = p.places?.length ?? 0
  return (
    <Reveal className="card" delay={(i % 3) * 90}>
      <div className="media">
        <div className="ph"><Icon name={icon} size={46} /></div>
        {p.image && <img src={p.image} alt={p.title} loading="lazy" onError={hide} />}
      </div>
      <div className="cbody">
        <div className="cmeta">
          {p.scale && <span className="pill">{p.scale}</span>}
          {p.year && <span className="pill">{p.year}</span>}
          {p.status !== 'done' && <span className="pill alert">{STATUS_LABEL[p.status]}</span>}
        </div>
        <h4>{p.title}</h4>
        <p>{p.summary}</p>
        {n === 1 && <p className="loc"><Icon name="location_on" size={16} />{p.places?.[0]}</p>}
        {n > 1 && (
          <details className="locs">
            <summary>View {n} locations <Icon name="expand_more" size={16} /></summary>
            <ul>
              {p.places?.map((pl) => (
                <li key={pl}><Icon name="check" size={16} />{pl}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const loc = useLocation()
  const [cat, setCat] = useState((loc.state as { cat?: string } | null)?.cat ?? 'all')

  const groups = worksCats
    .map((c, idx) => ({ ...c, idx, items: projects.filter((p) => p.category === c.id) }))
    .filter((g) => (cat === 'all' || g.id === cat) && g.items.length > 0)

  return (
    <section className="section">
      <div className="container">
        <div className="filters" role="group" aria-label="Filter by sector">
          <button className="chip" aria-pressed={cat === 'all'} onClick={() => setCat('all')}>All</button>
          {worksCats.map((c) => (
            <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
              {c.label}
            </button>
          ))}
        </div>

        {groups.map((g) => (
          <div className="group" key={g.id} style={tone(g.idx)}>
            <Reveal className="ghead">
              <span className="ico"><Icon name={g.icon} /></span>
              <h3>{g.label}</h3>
              <span className="count">{g.items.length}</span>
            </Reveal>
            <div className="cards">
            {g.items.map((p, i) => <Card key={p.id} p={p} icon={g.icon} i={i} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Legislation() {
  const items = projects.filter((p) => p.category === 'legislation')
  return (
    <section className="section">
      <div className="container bills">
        {items.map((p, i) => (
          <Reveal className="bill" key={p.id} delay={(i % 4) * 70} style={tone(i)}>
            <span className="ico"><Icon name="gavel" /></span>
            <div>
              <h4>{p.title}</h4>
              <p>{p.summary}</p>
            </div>
            <span className={`pill ${p.status === 'ongoing' ? 'alert' : ''}`}>
              {p.status === 'ongoing' ? 'In progress' : 'Motion raised'}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="section">
      <div className="container gallery">
        {profile.gallery.map((g) => (
          <Reveal key={g.src}>
            <figure>
              <img src={g.src} alt={g.caption} loading="lazy" onError={hide} />
              <figcaption>{g.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
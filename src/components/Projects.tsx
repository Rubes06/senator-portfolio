import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import Icon from './Icon'
import { Reveal, Words } from './Reveal'
import { categories, projects, STATUS_LABEL } from '../data/projects'
import { profile } from '../data/profile'
import type { Project } from '../types'

const hide = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = 'none'
}
const worksCats = categories.filter((c) => c.id !== 'legislation')

function Card({ p, icon, i }: { p: Project; icon: string; i: number }) {
  const n = p.places?.length ?? 0
  return (
    <Reveal as="article" className="card" delay={(i % 3) * 90}>
      {p.image && <img src={p.image} alt={p.title} loading="lazy" onError={hide} />}
      <div className="cbody">
        <div className="cmeta">
          <span className="ico sm"><Icon name={icon} /></span>
          {p.scale && <span className="pill">{p.scale}</span>}
          {p.year && <span className="pill">{p.year}</span>}
          {p.status !== 'done' && <span className="pill alert">{STATUS_LABEL[p.status]}</span>}
        </div>
        <h4>{p.title}</h4>
        <p>{p.summary}</p>
        {n === 1 && <p className="loc"><Icon name="location_on" />{p.places?.[0]}</p>}
        {n > 1 && (
          <details className="locs">
            <summary>View {n} locations <Icon name="expand_more" /></summary>
            <ul>
              {p.places?.map((pl) => (<li key={pl}><Icon name="location_on" />{pl}</li>))}
            </ul>
          </details>
        )}
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('all')
  const groups = worksCats
    .filter((c) => cat === 'all' || c.id === cat)
    .map((c) => ({ ...c, items: projects.filter((p) => p.category === c.id) }))
    .filter((g) => g.items.length > 0)

  return (
    <section id="projects">
      <Words as="h2" text="Completed projects and programmes" />
      <Words className="lead" text="What has been delivered across Ogun Central, sector by sector." />

      <div className="filters" role="group" aria-label="Filter by sector">
        <button className="chip" aria-pressed={cat === 'all'} onClick={() => setCat('all')}>All</button>
        {worksCats.map((c) => (
          <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
            {c.label}
          </button>
        ))}
      </div>

      {groups.map((g) => (
        <div className="group" key={g.id}>
          <Reveal className="ghead">
            <span className="ico"><Icon name={g.icon} /></span>
            <h3>{g.label}</h3>
            <span className="count">{g.items.length}</span>
          </Reveal>
          <div className="cards">
            {g.items.map((p, i) => (<Card key={p.id} p={p} icon={g.icon} i={i} />))}
          </div>
        </div>
      ))}
    </section>
  )
}

export function Legislation() {
  const items = projects.filter((p) => p.category === 'legislation')
  if (items.length === 0) return null
  return (
    <section id="bills" className="band">
      <Words as="h2" text="Legislative work" />
      <Words className="lead" text="Bills and motions from his work in the National Assembly." />
      <div className="bills">
        {items.map((p) => (
          <Reveal className="bill" key={p.id}>
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
  const gallery = (profile as typeof profile & { gallery?: { src: string; caption: string }[] }).gallery ?? []
  if (gallery.length === 0) return null
  return (
    <section id="gallery">
      <Words as="h2" text="Gallery" />
      <Words className="lead" text="Moments from projects and events across the district." />
      <div className="gallery">
        {gallery.map((g) => (
          <Reveal as="figure" key={g.src}>
            <img src={g.src} alt={g.caption} loading="lazy" onError={hide} />
            <figcaption>{g.caption}</figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Icon from './Icon'
import CountUp from './CountUp'
import { Reveal, Words } from './Reveal'
import { categories, projects } from '../data/projects'
import { profile } from '../data/profile'
import { tone } from '../data/palette'

const works = categories.filter((c) => c.id !== 'legislation')

export default function About() {
  const c = profile.contact
  const rows = [
    { icon: 'phone', v: c.phone },
    { icon: 'mail', v: c.email },
    { icon: 'location_on', v: c.address },
  ].filter((r) => r.v)

  const delivered = projects.filter((p) => p.category !== 'legislation').length
  const bills = projects.length - delivered
  const facts = [
    ...profile.facts,
    { icon: 'construction', label: 'Projects delivered', value: `${delivered} across ${works.length} sectors` },
    ...(bills > 0 ? [{ icon: 'gavel', label: 'Bills & motions', value: `${bills} on record` }] : []),
  ]

  return (
    <>
      <section className="section">
        <div className="container about">
          <Reveal>
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </Reveal>
          <Reveal delay={150}>
            <h2>{profile.name}</h2>
            <p className="role">{profile.office}</p>
            {profile.about.map((t, i) => <p key={i}>{t}</p>)}
            <div className="facts">
              {facts.map((f, i) => (
                <div className="fact" key={f.label} style={tone(i)}>
                  <span className="ico sm"><Icon name={f.icon} size={16} /></span>
                  <div><small>{f.label}</small><strong>{f.value}</strong></div>
                </div>
              ))}
            </div>
            {rows.length > 0 && (
              <ul className="contact">
                {rows.map((r) => (
                  <li key={r.v}><span className="ico sm"><Icon name={r.icon} size={16} /></span>{r.v}</li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </section>

      <Reveal className="strip">{profile.tagline}</Reveal>

      <section className="section band">
        <div className="container">
          <Words as="h2" text="Highlights of his record" />
          <div className="checks">
            {profile.highlights.map((h, i) => (
              <Reveal key={h.label} className="chk" delay={(i % 2) * 90} style={tone(i)}>
                <span className="tick"><Icon name="check" size={18} /></span>
                <div>
                  <b><CountUp value={h.value} /></b>
                  <span className="t">{h.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Words as="h2" text="Areas of work" />
          <Words className="lead" text="The sectors where his office has delivered across Ogun Central." />
          <div className="tiles">
            {works.map((cat, i) => {
              const n = projects.filter((p) => p.category === cat.id).length
              return (
                <Reveal key={cat.id} delay={(i % 4) * 80}>
                  <Link to="/projects" state={{ cat: cat.id }} className="tile" style={tone(i)}>
                    <span className="ico"><Icon name={cat.icon} /></span>
                    <h3>{cat.label}</h3>
                    <p>{n} {n === 1 ? 'project' : 'projects'}</p>
                    <span className="more">View <ArrowRight size={16} /></span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {profile.timeline.length > 0 && (
        <section className="section band">
          <div className="container">
            <Words as="h2" text="His journey" />
            <div className="timeline">
              {profile.timeline.map((t) => (
                <Reveal key={t.year + t.title} className="tl">
                  <span className="yr">{t.year}</span>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
import Icon from './Icon'
import CountUp from './CountUp'
import { Reveal } from './Reveal'
import { profile } from '../data/profile'
import { tone } from '../data/palette'

export default function RecordStrip() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {profile.highlights.map((h, i) => (
          <Reveal key={h.label} className="stat" delay={i * 100} style={tone(i)}>
            <span className="ico"><Icon name={h.icon} /></span>
            <div className="num"><CountUp value={h.value} /></div>
            <div className="lbl">{h.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
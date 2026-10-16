import { Reveal } from './Reveal'
import { profile } from '../data/profile'

export default function RecordStrip() {
  return (
    <div className="highlights">
      {profile.highlights.map((h, i) => (
        <Reveal key={h.label} delay={i * 90}>
          <strong>{h.value}</strong>
          <span>{h.label}</span>
        </Reveal>
      ))}
    </div>
  )
}
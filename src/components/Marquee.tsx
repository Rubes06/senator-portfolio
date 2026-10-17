import Icon from './Icon'
import { categories } from '../data/projects'

const items = categories.filter((c) => c.id !== 'legislation')

export default function Marquee() {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="marquee" aria-hidden>
      <div className="track">
        {row.map((c, i) => (
          <span key={i} className="mitem"><Icon name={c.icon} size={20} />{c.label}</span>
        ))}
      </div>
    </div>
  )
}
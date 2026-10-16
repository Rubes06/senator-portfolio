import Icon from './Icon'
import { plans } from '../data/plans'

export default function Plans() {
  if (plans.length === 0) return null
  return (
    <section id="plans">
      <h2>Plans for the next term</h2>
      <p className="lead">The priorities and the specific commitments behind each one.</p>
      <div className="plans">
        {plans.map((p) => (
          <div className="plan" key={p.title}>
            <Icon name={p.icon} />
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul>
              {p.points.map((x) => (<li key={x}><Icon name="check" /><span>{x}</span></li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

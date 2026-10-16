import { useState } from 'react'
import Icon from './Icon'
import { Reveal, Words } from './Reveal'
import { profile } from '../data/profile'

export default function About() {
  const [noPhoto, setNoPhoto] = useState(false)
  const { phone, email, address, social } = profile.contact
  const rows = [
    phone && { icon: 'call', text: phone, href: `tel:${phone}` },
    email && { icon: 'mail', text: email, href: `mailto:${email}` },
    address && { icon: 'location_on', text: address },
    social && { icon: 'public', text: social },
  ].filter(Boolean) as { icon: string; text: string; href?: string }[]
  const hasSide = rows.length > 0 || !noPhoto

  return (
    <section id="about">
      <div className={hasSide ? 'two' : ''}>
        <div>
          <Words as="h2" text="About" />
          {profile.about.map((t) => (<Words key={t} className="lead" text={t} />))}
        </div>
        {hasSide && (
          <div className="side">
            {!noPhoto && (
              <Reveal as="figure" className="aboutphoto">
                <img src="/images/senator-2.jpg" alt={profile.name} loading="lazy" onError={() => setNoPhoto(true)} />
              </Reveal>
            )}
            {rows.length > 0 && (
              <Reveal className="contact">
                <h3>Get in touch</h3>
                {rows.map((r) => (
                  <a key={r.text} href={r.href ?? '#'}><Icon name={r.icon} />{r.text}</a>
                ))}
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
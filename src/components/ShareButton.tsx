import { useState } from 'react'
import Icon from './Icon'
import { profile } from '../data/profile'

export default function ShareButton() {
  const [msg, setMsg] = useState('')
  const flash = (m: string) => {
    setMsg(m)
    setTimeout(() => setMsg(''), 2200)
  }
  const share = async () => {
    const data = { title: profile.name, text: `See what ${profile.shortName} has delivered in Ogun Central.`, url: window.location.href }
    try {
      if (navigator.share) return await navigator.share(data)
      await navigator.clipboard.writeText(data.url)
      flash('Link copied')
    } catch {
      /* user closed the share sheet */
    }
  }
  return (
    <>
      <button className="btn" onClick={share}>
        <Icon name="share" />Share this page
      </button>
      <div className={`toast ${msg ? 'on' : ''}`} role="status">{msg}</div>
    </>
  )
}
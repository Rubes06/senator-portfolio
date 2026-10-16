import { useState } from 'react'
import Icon from './Icon'
import ShareButton from './ShareButton'
import { profile } from '../data/profile'

export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false)
  return (
    <div className="top">
      <header className="bar">
        <b>{profile.shortName}</b>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#bills">Bills</a>
          <a href="#about">About</a>
        </nav>
      </header>
      <div className="hero">
        <div>
          <p className="office">{profile.office}</p>
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <p className="pitch">{profile.pitch}</p>
          <div className="btns">
            <a className="btn main" href="#projects"><Icon name="construction" />See the projects</a>
            <ShareButton />
          </div>
        </div>
        {!noPhoto && (
          <div className="portrait">
           <img src="/images/salisu.jpg" alt={profile.name} onError={() => setNoPhoto(true)} />          </div>
        )}
      </div>
    </div>
  )
}
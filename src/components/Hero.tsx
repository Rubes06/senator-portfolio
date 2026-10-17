import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Droplets, GraduationCap, Lightbulb, MapPin } from 'lucide-react'
import RotatingText from './RotatingText'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-in">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge"><MapPin size={16} /> {profile.office}</span>
          <h1>
            Delivering
            <RotatingText words={['Education', 'Power', 'Clean Water', 'Better Roads', 'Empowerment']} />
            to Ogun Central
          </h1>
          <p className="pitch">{profile.pitch}</p>
          <div className="btns">
            <Link to="/projects" className="btn gold">See the projects <ArrowRight size={18} /></Link>
            <Link to="/about" className="btn ghost">About the Senator</Link>
          </div>
        </motion.div>

        <motion.div
          className="photo-outer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="photo-wrap">
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className="orb o1"><Lightbulb size={24} /></span>
            <span className="orb o2"><GraduationCap size={24} /></span>
            <span className="orb o3"><Droplets size={24} /></span>
                        <div className="float-card">
              <span className="live" />
              <div><strong>{profile.shortName}</strong><small>Ogun Central</small></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Check, Share2 } from 'lucide-react'
import { profile } from '../data/profile'

export default function FloatingActions() {
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const on = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const share = async () => {
    const data = {
      title: profile.name,
      text: `See the projects delivered by ${profile.name}`,
      url: window.location.origin,
    }
    try {
      if (navigator.share) { await navigator.share(data); return }
      await navigator.clipboard.writeText(data.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* share cancelled */
    }
  }

  return (
    <div className="fab-wrap">
      <AnimatePresence>
        {show && (
          <motion.button
            className="fab up"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
      <button className="fab share" onClick={share} aria-label="Share this site">
        {copied ? <Check size={20} /> : <Share2 size={20} />}
        <span>{copied ? 'Link copied' : 'Share'}</span>
      </button>
    </div>
  )
}
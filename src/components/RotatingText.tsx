import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function RotatingText({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span className="rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          className="rotator-word"
          initial={{ y: '70%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-70%', opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
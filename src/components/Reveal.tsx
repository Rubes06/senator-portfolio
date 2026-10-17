import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

export function Reveal({ children, className, delay = 0, style }: {
  children: ReactNode; className?: string; delay?: number; style?: CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Words({ text, as = 'p', className }: {
  text: string; as?: 'h1' | 'h2' | 'h3' | 'p'; className?: string
}) {
  const Tag = as
  return (
    <Tag className={className}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  )
}
import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  const m = value.match(/^(\D*)([\d,]+)(.*)$/)
  const target = m ? Number(m[2].replace(/,/g, '')) : 0

  useEffect(() => {
    if (!inView || !target) return
    const c = animate(0, target, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => c.stop()
  }, [inView, target])

  if (!m) return <span>{value}</span>
  return <span ref={ref}>{m[1]}{n.toLocaleString('en-US')}{m[3]}</span>
}
import { createElement, Fragment, useEffect, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

// People who asked their device for less motion, or very old browsers, just see everything at once.
const still =
  typeof window === 'undefined' ||
  !('IntersectionObserver' in window) ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// The "js" class tells the CSS it is safe to hide things until they scroll into view.
if (!still) document.documentElement.classList.add('js')

function useSeen(): [(el: Element | null) => void, boolean] {
  const [el, setEl] = useState<Element | null>(null)
  const [seen, setSeen] = useState(still)
  useEffect(() => {
    if (seen || !el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [el, seen])
  return [setEl, seen]
}

type BlockTag = 'div' | 'article' | 'figure'

/** A block that rises into place when it scrolls into view. */
export function Reveal({
  as = 'div',
  className = '',
  delay = 0,
  children,
}: {
  as?: BlockTag
  className?: string
  delay?: number
  children: ReactNode
}) {
  const [ref, seen] = useSeen()
  return createElement(
    as,
    { ref, className: `rv ${seen ? 'in' : ''} ${className}`, style: { '--d': `${delay}ms` } as CSSProperties },
    children,
  )
}

/** Text that comes in word by word when it scrolls into view. */
export function Words({
  text,
  as = 'p',
  className = '',
}: {
  text: string
  as?: 'h2' | 'p'
  className?: string
}) {
  const [ref, seen] = useSeen()
  return createElement(
    as,
    { ref, className: `words ${seen ? 'in' : ''} ${className}` },
    text.split(' ').map((w, i) => (
      <Fragment key={i}>
        <span className="w" style={{ '--i': i } as CSSProperties}>{w}</span>{' '}
      </Fragment>
    )),
  )
}
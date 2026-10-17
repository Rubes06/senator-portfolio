import type { CSSProperties } from 'react'

const palette = [
  { c: '#12684a', bg: '#e6f5ee' },
  { c: '#d97706', bg: '#fff3dc' },
  { c: '#2563eb', bg: '#e6eeff' },
  { c: '#c026d3', bg: '#fbe8fd' },
  { c: '#dc2626', bg: '#fde8e8' },
  { c: '#0891b2', bg: '#e0f6fa' },
  { c: '#7c3aed', bg: '#efe8ff' },
  { c: '#65a30d', bg: '#eef7dc' },
]

export const tone = (i: number) => {
  const p = palette[i % palette.length]
  return { '--c': p.c, '--bg': p.bg } as CSSProperties
}
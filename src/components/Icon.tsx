// Material Symbols icon. Browse names at fonts.google.com/icons
export default function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`icon ${className}`} aria-hidden="true">
      {name}
    </span>
  )
}

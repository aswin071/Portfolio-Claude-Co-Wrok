'use client'

export default function SmoothLink({ to, children, className, ...props }) {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.getElementById(to)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  )
}

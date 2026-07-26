import { useEffect, useState } from 'react'
import './Hero.css'

const ROLES = [
  'AI & ML Engineer in training',
  'Full-stack Java developer',
  'Machine learning practitioner',
  'Security-minded software builder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (phase === 'typing') {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 45)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1400)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 25)
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, phase, roleIndex])

  return (
    <section id="top" className="hero theme-dark">
      <div className="hero__grid" aria-hidden="true">
        <div className="hero__scanline" />
      </div>

      <div className="container hero__inner">
        <div className="hero__status" role="status">
          <span className="hero__status-dot" />
          <span>OPEN TO OPPORTUNITIES</span>
          <span className="hero__status-sep">/</span>
          <span>NAGPUR, MAHARASHTRA</span>
        </div>

        <p className="eyebrow">MCA · AI &amp; ML — Ramdeobaba University</p>

        <h1 className="hero__title">
          Pooja Behura builds
          <br />
          software that <span className="hero__title-accent">reasons</span>,
          <br />
          learns, and defends itself.
        </h1>

        <p className="hero__role">
          <span className="hero__role-label">Currently:</span>{' '}
          <span className="hero__role-text">{displayText}</span>
          <span className="hero__cursor" />
        </p>

        <p className="hero__desc">
          A Master's student specializing in AI &amp; Machine Learning, with a builder's
          instinct for Java, data systems, and human-centred interfaces — turning academic
          research into working, end-to-end applications.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

import { useReveal } from '../hooks/useReveal'
import './About.css'

const STATS = [
  { value: '2', label: 'Degrees — BCA + MCA (AI & ML)' },
  { value: '3', label: 'End-to-end academic projects shipped' },
  { value: '7+', label: 'Certifications across AI, cloud & security' },
  { value: '2', label: 'Languages spoken fluently' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container about__grid">
        <div className="reveal">
          <p className="eyebrow">01 — About</p>
          <h2 className="section-title">
            Grounded in computer science fundamentals, driven by applied AI.
          </h2>
          <p className="about__text">
            I'm Pooja Behura, a Master of Computer Applications student specializing in AI &amp; ML
            at Ramdeobaba University, Nagpur — building on a Bachelor's in Computer Applications.
            My work sits at the intersection of solid software engineering and applied machine
            learning: I care as much about clean architecture and database design as I do about
            model accuracy.
          </p>
          <p className="about__text">
            Across my academic projects I've taken ideas from a soil-and-weather dataset to a
            working crop-recommendation model, and from a login page to a full security-analytics
            dashboard with real-time visualizations and geolocation mapping. I'm looking for a
            professional environment where I can bring that same end-to-end thinking to real
            problems.
          </p>
        </div>

        <div className="about__stats reveal">
          {STATS.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

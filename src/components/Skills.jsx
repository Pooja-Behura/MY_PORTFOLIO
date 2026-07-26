import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const GROUPS = [
  {
    id: '01',
    title: 'Languages',
    items: ['Java', 'Python', 'C++'],
  },
  {
    id: '02',
    title: 'Data & Databases',
    items: ['SQL', 'DBMS', 'Oracle APEX'],
  },
  {
    id: '03',
    title: 'Core CS',
    items: ['OOP', 'Data Structures', 'Computer Networks', 'Cloud Computing'],
  },
  {
    id: '04',
    title: 'AI, ML & Practice',
    items: ['Machine Learning', 'Data Analysis', 'Prompt Engineering', 'Human-Computer Interaction'],
  },
  {
    id: '05',
    title: 'Web Technologies',
    items: ['JSP', 'Servlets', 'Apache Tomcat', 'Chart.js', 'Leaflet.js'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">02 — Capabilities</p>
        <h2 className="section-title reveal">A stack built for full-cycle development.</h2>
        <p className="section-sub reveal">
          From relational data modelling to model training to the interface a user actually sees —
          here's the toolkit I draw on.
        </p>

        <div className="skills__grid">
          {GROUPS.map((group) => (
            <div className="skill-card reveal" key={group.id}>
              <div className="skill-card__head">
                <span className="skill-card__id">{group.id}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-card__chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

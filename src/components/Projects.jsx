import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    title: 'Intelligent Resume Keyword Analyzer',
    stack: ['Java', 'ATS Logic', 'Text Processing'],
    description:
      'A Java-based resume analysis system that compares resumes against job descriptions using keyword-matching techniques.',
    points: [
      'Identifies relevant ATS keywords to improve resume-job compatibility',
      'Enhances resume visibility against real hiring requirements',
    ],
  },
  {
    id: '02',
    title: 'Crop Recommendation System',
    stack: ['Machine Learning', 'Python', 'Data Preprocessing'],
    description:
      'A machine learning model that recommends suitable crops based on soil composition and weather conditions.',
    points: [
      'Full pipeline: preprocessing, feature analysis, training and evaluation',
      'Applies ML concepts to deliver real-world agricultural recommendations',
    ],
  },
  {
    id: '03',
    title: 'Login Security Monitoring Dashboard',
    stack: ['Java', 'JSP & Servlets', 'Apache Tomcat', 'Chart.js', 'Leaflet.js'],
    description:
      'A session-based login monitoring system with authentication and real-time login-log analysis, deployed on Apache Tomcat.',
    points: [
      'Detects SQL-injection attempts and brute-force login attacks with automated Low/Medium/High risk scoring',
      'Interactive Chart.js analytics dashboard plus Leaflet.js geolocation mapping of login attempts',
      'End-to-end flow from authentication to security analysis and visualization',
    ],
    liveUrl: 'https://cyberdashboard-7cqf.onrender.com/',
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">03 — Selected Work</p>
        <h2 className="section-title reveal">Projects that go from idea to interface.</h2>
        <p className="section-sub reveal">
          Academic in origin, production-minded in execution — each one built end to end.
        </p>

        <div className="projects__list">
          {PROJECTS.map((project) => (
            <article className="project-row reveal" key={project.id}>
              <div className="project-row__id">{project.id}</div>
              <div className="project-row__body">
                <h3>{project.title}</h3>
                <p className="project-row__desc">{project.description}</p>
                <ul className="project-row__points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project-row__stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-row__live"
                  >
                    View Live Dashboard ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

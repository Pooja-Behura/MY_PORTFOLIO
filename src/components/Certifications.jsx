import { useReveal } from '../hooks/useReveal'
import './Certifications.css'

const CERTS = [
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services (AWS Academy)',
    date: 'Trained Badge',
    badgeImage: '/certs/aws-cloud-foundations.jpeg',
  },
  {
    title: 'Human Computer Interaction',
    issuer: 'BITS Pilani, via Coursera',
    date: 'Apr 14, 2026',
    verifyUrl: 'https://coursera.org/verify/RI6SW9EABETH',
  },
  {
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI, via Coursera',
    date: 'Mar 29, 2026',
    verifyUrl: 'https://coursera.org/verify/KER97L591C7E',
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University, via Coursera',
    date: 'Mar 29, 2026',
    verifyUrl: 'https://coursera.org/verify/QOSRSYPB1C21',
  },
  {
    title: 'Connect and Protect: Networks and Network Security',
    issuer: 'Google, via Coursera',
    date: 'Mar 4, 2026',
    verifyUrl: 'https://coursera.org/verify/L3D7NOJZ7ANS',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google, via Coursera',
    date: 'Apr 2, 2026',
    verifyUrl: 'https://coursera.org/verify/R1YTIUCKW20J',
  },
]

export default function Certifications() {
  const ref = useReveal()

  return (
    <section id="certifications" className="section certifications" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">04 — Continuous Learning</p>
        <h2 className="section-title reveal">Certifications &amp; coursework log.</h2>
        <p className="section-sub reveal">
          A running record of structured learning across AI, cloud infrastructure and security —
          verified certificates linked where available.
        </p>

        <div className="cert-log">
          {CERTS.map((cert) => {
            const isVerifiable = Boolean(cert.verifyUrl)
            const RowTag = isVerifiable ? 'a' : 'div'
            const rowProps = isVerifiable
              ? { href: cert.verifyUrl, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <RowTag className="cert-log__row reveal" key={cert.title} {...rowProps}>
                {cert.badgeImage ? (
                  <img
                    src={cert.badgeImage}
                    alt={`${cert.title} badge`}
                    className="cert-log__badge"
                  />
                ) : (
                  <span className="cert-log__date">{cert.date || '—'}</span>
                )}

                <div className="cert-log__main">
                  <span className="cert-log__title">
                    {cert.title}
                    {isVerifiable && <span className="cert-log__verify-tag">Verified ↗</span>}
                  </span>
                  <span className="cert-log__issuer">
                    {cert.issuer}
                    {cert.badgeImage && cert.date ? ` · ${cert.date}` : ''}
                  </span>
                </div>
              </RowTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}

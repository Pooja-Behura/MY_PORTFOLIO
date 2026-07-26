import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { sendContactMessage } from '../services/emailService'
import './Contact.css'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      await sendContactMessage(form)
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container contact__grid">
        <div className="reveal">
          <p className="eyebrow">05 — Contact</p>
          <h2 className="section-title">Let's build something together.</h2>
          <p className="contact__text">
            Open to internships, entry-level roles, and collaborative projects in software
            development, data analysis or machine learning. Send a message and it'll land
            directly in my inbox.
          </p>

          <div className="contact__details">
            <a href="mailto:behurapooja29@gmail.com" className="contact__detail">
              <span className="contact__detail-label">Email</span>
              <span className="contact__detail-value">behurapooja29@gmail.com</span>
            </a>
            <a href="tel:+917507693884" className="contact__detail">
              <span className="contact__detail-label">Phone</span>
              <span className="contact__detail-value">+91 7507693884</span>
            </a>
            <div className="contact__detail">
              <span className="contact__detail-label">Location</span>
              <span className="contact__detail-value">Maharashtra, India</span>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary contact-form__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="contact-form__note contact-form__note--success">
              Message sent — thank you, I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form__note contact-form__note--error">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  )
}

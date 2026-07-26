import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Pooja Behura. Built with React.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a set of elements matching `.reveal`
 * inside the given container ref, adding `.is-visible` as they scroll
 * into view. Falls back gracefully if IntersectionObserver is unavailable.
 */
export function useReveal(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const nodes = root.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    nodes.forEach((n) => observer.observe(n))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}

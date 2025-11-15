'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = [
    'AI & ML Engineer',
    'LLM Specialist',
    'Computer Vision Expert',
    'Deep Learning Engineer',
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.splineContainer}>
        <spline-viewer url="https://prod.spline.design/iIk9JwwrBTX9iuzE/scene.splinecode"></spline-viewer>
      </div>

      {/* Dark overlay for better text readability */}
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.name}>
            Hi, I'm <span className={styles.highlight}>Kunal Arora</span>
          </h1>
          <div className={styles.typingContainer}>
            <span className={styles.typing}>
              {text}
              <span className={styles.cursor}>|</span>
            </span>
          </div>
          <p className={styles.tagline}>
            Building intelligent systems with AI/ML • Specializing in LLMs, Computer Vision & Edge Deployment
          </p>
          <div className={styles.cta}>
            <a href="#contact" className="btn">Get In Touch</a>
            <a href="#projects" className={`btn ${styles.btnSecondary}`}>View Work</a>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  )
}

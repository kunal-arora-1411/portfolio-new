'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

// Custom Cursor Component
function CustomCursor() {
  useEffect(() => {
    const dot = document.createElement('div')
    const ring = document.createElement('div')
    dot.className = 'cursor-dot'
    ring.className = 'cursor-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0
    let ringX = 0, ringY = 0

    const moveCursor = () => {
      dotX += (mouseX - dotX) * 0.8
      dotY += (mouseY - dotY) * 0.8
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15

      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`

      requestAnimationFrame(moveCursor)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => {
      ring.classList.add('hover')
    }

    const handleMouseLeave = () => {
      ring.classList.remove('hover')
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    moveCursor()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      dot.remove()
      ring.remove()
    }
  }, [])

  return null
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <CustomCursor />
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </main>
  )
}

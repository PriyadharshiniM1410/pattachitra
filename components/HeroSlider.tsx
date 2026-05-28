'use client'
import { useEffect, useState } from 'react'

const HERO_IMAGES = [
  '/images/3.jpg',
  '/images/4.jpg',
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url(' + HERO_IMAGES[current] + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease-in-out',
      }}
    >
      {/* OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.45)',
        }}
      />

      <div
        className="hero-text"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1>PATTACHITRA</h1>

        <p>
          Ancient art of Odisha — where myths breathe through colour
        </p>
      </div>

      {/* Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          width: '100%',
          zIndex: 2,
        }}
      >
        {HERO_IMAGES.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background:
                i === current
                  ? 'white'
                  : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          />
        ))}
      </div>
    </section>
  )
}
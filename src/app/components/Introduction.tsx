'use client'

import { useEffect, useRef, useState } from 'react'

const introText = [
  "Willkommen zur Website der Rechtsanwaltskanzlei Barth.",
  "Die Kanzlei stellt sich vor: Mit langjähriger Erfahrung, persönlichem Engagement und fundierter juristischer Expertise setzen wir uns für Ihre Rechte ein.",
  "Unsere Mandanten schätzen unsere hochspezialisierte und kompetente Betreuung ebenso wie das Selbstverständnis, wirtschaftliche und soziale Aspekte im Blick zu haben."
]

export default function Introduction() {
  const [inView, setInView] = useState(false)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of text container is visible
      }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const allWords = introText.join(' ').split(' ')

  return (
    <section className="relative w-full py-24 px-6 text-left text-primary">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/heidelberg.jpg"
          alt="Heidelberg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content inside rounded background */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div
          ref={textRef}
          className="bg-white/30 rounded-2xl p-8 shadow-md backdrop-blur-sm"
        >
          <h2
            className={`flex flex-wrap gap-2 text-lg sm:text-xl font-medium transition duration-[3s] ease-[cubic-bezier(0.5,1,0.89,1)] ${
              inView ? 'scale-100' : 'scale-95'
            }`}
          >
            {allWords.map((word, index) => (
              <span
                key={index}
                className={`opacity-0 transition duration-[800ms] ease-[cubic-bezier(0.11,0,0.5,0)] ${
                  inView ? 'opacity-100' : ''
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  )
}

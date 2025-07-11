'use client'

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Welcome from './Welcome'
import { useEffect, useState } from 'react'

const specialties = [
  'Arbeitsrechts',
  'Gewerblichen Rechtsschutz',
  'Urheberrechts',
  'Vertragsrechts',
  'Wettbewerbsrechts',
  'Zivilrechts',
]

export default function Hero() {

const [index, setIndex] = useState(0)
const [displayed, setDisplayed] = useState('')
const [subIndex, setSubIndex] = useState(0)
const [deleting, setDeleting] = useState(false)
const [hasAnimated, setHasAnimated] = useState(false) 

// Delay start until fade-in is finished
useEffect(() => {
  const timer = setTimeout(() => {
    setHasAnimated(true)
  }, 700) // Adjust to match your fade-in duration (ms)

  return () => clearTimeout(timer)
}, [])

// Typewriter logic (runs only after fade-in)
useEffect(() => {
  if (!hasAnimated) return

  if (subIndex === specialties[index].length + 1 && !deleting) {
    setTimeout(() => setDeleting(true), 1000)
    return
  }

  if (subIndex === 0 && deleting) {
    setDeleting(false)
    setIndex((prev) => (prev + 1) % specialties.length)
    return
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) => deleting ? prev - 1 : prev + 1)
    setDisplayed(specialties[index].substring(0, subIndex))
  }, deleting ? 50 : 100)

  return () => clearTimeout(timeout)
}, [subIndex, deleting, index, hasAnimated]) // ⬅️ includes hasAnimated



  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#cdcdcd_1.5px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2 mb-20">
            <h1 className="opacity-0  animate-fade-up delay-title text-3xl sm:text-4xl font-extrabold text-primary mb-4 md:mx-0 mx-10 leading-tight">
              Rechtsanwaltskanzlei Barth
            </h1>

            <p className="opacity-0  animate-fade-up delay-text1 text-xl sm:text-2xl text-primary mb-8 max-w-xl md:mx-0 mx-10 mt-10">
              Vertrauen Sie auf Erfahrung, Klarheit und kompetente Unterstützung in allen Fragen des{' '}
              <span className="text-primary font-semibold">{displayed}|</span>
            </p>

            <p className="opacity-0  animate-fade-up delay-text2 text-xl sm:text-2xl text-primary mb-8 max-w-xl md:mx-0 mx-10 mt-20">
              Persönliche Beratung. Individuelle Lösungen. Kompetent und zuverlässig.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="mailto:recht@kanzleibarth.de"
                className="opacity-0  animate-fade-left delay-button group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition"
              >
                <EnvelopeIcon className="h-5 w-5 text-secondary transition-colors group-hover:text-primary" />
                Jetzt mailen
              </a>
              <a
                href="tel:+496221757400"
                className="opacity-0  animate-fade-right delay-button group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition"
              >
                <PhoneIcon className="h-5 w-5 text-secondary transition-colors group-hover:text-primary" />
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Welcome Component */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Welcome />
          </div>
        </div>
      </div>
    </section>
  )
}

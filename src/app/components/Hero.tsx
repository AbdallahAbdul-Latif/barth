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

  useEffect(() => {
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
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      )
      setDisplayed(
        specialties[index].substring(0, subIndex)
      )
    }, deleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index])


  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4 leading-tight">
              Rechtsanwaltskanzlei Barth
            </h1>

            <p className="text-lg sm:text-xl text-primary mb-8 max-w-xl mx-auto lg:mx-0 mt-10">
              Vertrauen Sie auf Erfahrung, Klarheit und kompetente Unterstützung in allen Fragen des{' '}
              <span className="text-primary font-semibold">{displayed}|</span>
            </p>

            <p className="text-lg sm:text-xl text-primary mb-8 max-w-xl mx-auto lg:mx-0 mt-20">
              Persönliche Beratung. Individuelle Lösungen. Kompetent und zuverlässig.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mb-20">
              <a
                href="mailto:latif_abdallah@icloud.com"
                className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition"
              >
                <EnvelopeIcon className="h-5 w-5 text-secondary transition-colors group-hover:text-primary" />
                Jetzt mailen
              </a>
              <a
                href="tel:+4917681241143"
                className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition"
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

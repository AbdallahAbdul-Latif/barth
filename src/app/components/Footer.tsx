'use client'

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Logo from './Logo'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const specialties = [
  'Arbeitsrechts',
  'Gewerblichen Rechtsschutz',
  'Urheberrechts',
  'Vertragsrechts',
  'Wettbewerbsrechts',
  'Zivilrechts',
]

export default function Footer() {
  const typeRef = useRef(null)
  const inView = useInView(typeRef, { once: true, amount: 0.2 })

  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView) setHasAnimated(true)
  }, [inView])

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
  }, [subIndex, deleting, index, hasAnimated])

  return (
    <footer className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[repeat(3,1fr)] gap-y-12 md:gap-x-32 text-left">
        {/* Column 1: Navigation */}
        <div>
          <h3 className="uppercase tracking-widest text-secondary font-semibold mb-4">
            Rechtsanwaltskanzlei Barth
          </h3>
          <ul className="space-y-2 tracking-wide">
            <li><Link href="/">Startseite</Link></li>
            <li><Link href="/leistungen">Leistungen</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        {/* Column 2: Profile */}
        <div ref={typeRef}>
          <h3 className="uppercase tracking-widest text-secondary font-semibold mb-4">
            Spezialisiert auf{' '}
            <span className="text-secondary font-semibold">{displayed}|</span>
          </h3>
          <p className="leading-relaxed">
            Rechtsanwaltin Christine Barth<br /><br />
            Mit langjähriger Erfahrung, persönlichem Engagement und fundierter juristischer Expertise
            setzen wir uns für Ihre Rechte ein. Unsere Mandanten schätzen unsere hochspezialisierte und 
            kompetente Betreuung ebenso wie das Selbstverständnis, wirtschaftliche und soziale Aspekte im Blick zu haben.
          </p>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="uppercase tracking-widest text-secondary font-semibold mb-4">
            Kontaktieren Sie uns
          </h3>

          <div className="relative w-[160px] aspect-[11/4]">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <p className="mt-4 leading-relaxed text-sm">
            Hans-Bunte-Str. 8<br />
            69123 Heidelberg
          </p>

          <p className="mt-4 text-sm">
            Telefon 06221 6722350<br />
            recht@kanzleibarth.de
          </p>

          <div className="flex space-x-3 mt-6">
            <a href="tel:+4962216722350" className="bg-secondary text-primary p-2 rounded">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a href="mailto:recht@kanzleibarth.de" className="bg-secondary text-primary p-2 rounded">
              <EnvelopeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white text-center text-xs py-4 px-6">
        <p className="mb-2">
          ©2025 Rechtsanwaltskanzlei Barth
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/impressum" className="hover:underline">Impressum & Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}

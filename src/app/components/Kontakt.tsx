'use client'

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import clsx from 'clsx'

export default function Kontakt() {
  const titleRef = useRef(null)
  const addressRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const appointmentRef = useRef(null)
  const timesRef = useRef(null)
  const phoneTimesRef = useRef(null)
  const mailButtonRef = useRef(null)
  const callButtonRef = useRef(null)
  const bankRef = useRef(null)

  const titleInView = useInView(titleRef, { once: true, amount: 0.1 })
  const addressInView = useInView(addressRef, { once: true, amount: 0.1 })
  const emailInView = useInView(emailRef, { once: true, amount: 0.1 })
  const phoneInView = useInView(phoneRef, { once: true, amount: 0.1 })
  const appointmentInView = useInView(appointmentRef, { once: true, amount: 0.1 })
  const timesInView = useInView(timesRef, { once: true, amount: 0.1 })
  const phoneTimesInView = useInView(phoneTimesRef, { once: true, amount: 0.1 })
  const mailInView = useInView(mailButtonRef, { once: true, amount: 0.1 })
  const callInView = useInView(callButtonRef, { once: true, amount: 0.1 })
  const bankInView = useInView(bankRef, { once: true, amount: 0.1 })

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Kontakt</h1>

        {/* Map */}
        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-md h-[400px]">
          <iframe
            title="Standort Heidelberg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.0748820686113!2d8.644327977095896!3d49.40748957141189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c727e05c0571%3A0xa5d4cdb58125e9c1!2sHans-Bunte-Stra%C3%9Fe%208%2C%2069123%20Heidelberg!5e0!3m2!1sen!2sde!4v1752076566225!5m2!1sen!2sde"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-left text-primary items-start">
          {/* Left Column */}
          <div>
            <h2
              ref={titleRef}
              className={clsx(
                'opacity-0 text-2xl font-bold mb-6',
                titleInView && 'animate-fade-up'
              )}
            >
              Rechtsanwaltskanzlei Barth
            </h2>

            <p
              ref={addressRef}
              className={clsx('opacity-0 text-lg mb-4', addressInView && 'animate-fade-up')}
            >
              Hans-Bunte-Str. 8<br />
              69123 Heidelberg
            </p>

            <p
              ref={emailRef}
              className={clsx('opacity-0 text-lg mb-2', emailInView && 'animate-fade-up')}
            >
              recht@kanzleibarth.de
            </p>

            <p
              ref={phoneRef}
              className={clsx('opacity-0 text-lg mb-4', phoneInView && 'animate-fade-up')}
            >
              06221 6722350
            </p>

            {/* Bank Info */}
            <div
              ref={bankRef}
              className={clsx('opacity-0 mt-8', bankInView && 'animate-fade-up')}
            >
              <h3 className="text-lg font-semibold mb-2">Bankverbindung</h3>
              <p className="text-sm">
                Kto 7175 1010 18 [100 101 01]<br />
                Bad.Württ.Bank Heidelberg. SOLADEST600<br />
                DE 42 6105 1101 7175 101018
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-start">
            <p
              ref={appointmentRef}
              className={clsx('opacity-0 text-lg mb-6 mt-[60px]', appointmentInView && 'animate-fade-up')}
            >
              Nach Absprache können Termine jederzeit stattfinden.
            </p>

            <div
              ref={timesRef}
              className={clsx('opacity-0 text-lg mb-4', timesInView && 'animate-fade-up')}
            >
              <strong>Regulären Bürozeiten sind:</strong><br />
              Mo — Fr: 8 — 18 Uhr
            </div>

            <div
              ref={phoneTimesRef}
              className={clsx('opacity-0 text-lg mb-8', phoneTimesInView && 'animate-fade-up')}
            >
              <strong>Telefonzeiten:</strong><br />
              Mo — Fr: 10 — 13 Uhr & 14 — 16 Uhr
            </div>

            {/* Buttons for large screens */}
            <div className="hidden md:flex flex-nowrap gap-4 mt-4">
              <a
                ref={mailButtonRef}
                href="mailto:recht@kanzleibarth.de"
                className={clsx(
                  'whitespace-nowrap group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors opacity-0',
                  mailInView && 'animate-fade-left'
                )}
              >
                <EnvelopeIcon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
                Jetzt mailen
              </a>
              <a
                ref={callButtonRef}
                href="tel:+4962216722350"
                className={clsx(
                  'whitespace-nowrap group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors opacity-0',
                  callInView && 'animate-fade-right'
                )}
              >
                <PhoneIcon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>

        {/* Buttons for small screens */}
        <div className="flex flex-col md:hidden gap-4 mt-10 items-center">
          <a
            href="mailto:recht@kanzleibarth.de"
            className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
            Jetzt mailen
          </a>
          <a
            href="tel:+4962216722350"
            className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors"
          >
            <PhoneIcon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  )
}

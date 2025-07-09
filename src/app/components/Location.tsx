'use client'

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import clsx from 'clsx'

export default function Location() {
  const titleRef = useRef(null)
  const h3Ref = useRef(null)
  const addressRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const mailButtonRef = useRef(null)
  const callButtonRef = useRef(null)

  const titleInView = useInView(titleRef, { once: true, amount: 0.1 })
  const h3InView = useInView(h3Ref, { once: true, amount: 0.1 })
  const addressInView = useInView(addressRef, { once: true, amount: 0.1 })
  const emailInView = useInView(emailRef, { once: true, amount: 0.1 })
  const phoneInView = useInView(phoneRef, { once: true, amount: 0.1 })
  const mailInView = useInView(mailButtonRef, { once: true, amount: 0.1 })
  const callInView = useInView(callButtonRef, { once: true, amount: 0.1 })

  return (
    <section className="bg-gray-100 pt-16 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className={clsx(
            'opacity-0 text-3xl font-bold text-primary mb-12 text-left delay-title',
            titleInView && 'animate-fade-up'
          )}
        >
          So finden Sie unsere Kanzlei
        </h2>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12">
          {/* Map */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe
              title="Büro Heidelberg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.0748820686113!2d8.644327977095896!3d49.40748957141189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c727e05c0571%3A0xa5d4cdb58125e9c1!2sHans-Bunte-Stra%C3%9Fe%208%2C%2069123%20Heidelberg!5e0!3m2!1sen!2sde!4v1752076566225!5m2!1sen!2sde" 
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <h3
                ref={h3Ref}
                className={clsx(
                  'opacity-0 text-2xl font-semibold mb-4 delay-text1',
                  h3InView && 'animate-fade-up'
                )}
              >
                Büro Heidelberg
              </h3>

              <p
                ref={addressRef}
                className={clsx('opacity-0 text-lg mb-2 delay-text2', addressInView && 'animate-fade-up')}
              >
                Hans-Bunte-Str. 8<br />
                69123 Heidelberg
              </p>

              <p
                ref={emailRef}
                className={clsx('opacity-0 text-lg mb-2 delay-text2', emailInView && 'animate-fade-up')}
              >
                recht@kanzleibarth.de
              </p>

              <p
                ref={phoneRef}
                className={clsx('opacity-0 text-lg mb-6 delay-text2', phoneInView && 'animate-fade-up')}
              >
                06221 6722350
              </p>

              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  ref={mailButtonRef}
                  href="mailto:latif_abdallah@icloud.com"
                  className={clsx(
                    'whitespace-nowrap group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors opacity-0 delay-button',
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
                    'whitespace-nowrap group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors opacity-0 delay-button',
                    callInView && 'animate-fade-right'
                  )}
                >
                  <PhoneIcon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

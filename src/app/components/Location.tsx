'use client'

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Location() {
  return (
    <section className="bg-gray-100 pt-16 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-primary mb-12 text-left">
          So finden Sie unsere Kanzlei
        </h2>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12">

          {/* Map */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe
              title="Büro Heidelberg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9990503002615!2d8.66863431567417!3d49.40935807934737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c12554ef7b1b%3A0x1dd8726d76163a6d!2sAlte%20Glockengießerei%209%2C%2069115%20Heidelberg!5e0!3m2!1sen!2sde!4v1689752640412!5m2!1sen!2sde"
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
              <h3 className="text-2xl font-semibold mb-4">Büro Heidelberg</h3>

              <p className="text-lg mb-2">
                Hans-Bunte-Str. 8<br />
                69123 Heidelberg
              </p>

              <p className="text-lg mb-2">latif_abdallah@icloud.com</p>
              <p className="text-lg mb-6">06221 6722350</p>

              <div className="flex justify-center lg:justify-start gap-4">
  <a
    href="mailto:latif_abdallah@icloud.com"
    className="opacity-0 animate-fade-left delay-button group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors"
  >
    <EnvelopeIcon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors" />
    Jetzt mailen
  </a>
  <a
    href="tel:+4962216722350"
    className="opacity-0 animate-fade-right delay-button group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-colors"
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


import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[repeat(3,1fr)] gap-y-12 md:gap-x-32 text-left">


  {/* Column 1: Navigation */}
        <div>
          <h3 className="uppercase tracking-widest text-secondary font-semibold mb-4">
            Rechtsanwaltskanzlei Barth
          </h3>
          <ul className="space-y-2 tracking-wide">
            <li>Startseite</li>
            <li>Leistungen</li>
            <li>Kontakt</li>
          </ul>
        </div>

        {/* Column 2: Profile */}
        <div>
          <h3 className="uppercase tracking-widest text-secondary font-semibold mb-4">
            Fachanwalt für Sozialrecht
          </h3>
          <p className="leading-relaxed">
            Rechtsanwalt Maximilian Rein<br /><br />
            Spezialisiert auf sozialrechtliche Angelegenheiten betreuen wir Mandanten/innen im Raum
            Tübingen, Reutlingen, Böblingen/Sindelfingen, Esslingen und im Großraum Stuttgart,
            übernehmen aber auch überregional und insbesondere im Bereich der Unternehmen und
            Selbstständigen deutschlandweit Mandate.
          </p>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="uppercase tracking-widest text-secondary font-semibold mb-4">
            Kontaktieren Sie uns
          </h3>
          
          <div className="relative w-[160px] aspect-[11/4]">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 150px, 160px"
            />
          </div>

          <p className="mt-4 leading-relaxed text-sm">
            Konrad-Adenauer-Straße 23<br />
            72072 Tübingen
          </p>

          <p className="mt-4 text-sm">
            Telefon 07071 791711<br />
            info@kilger-und-rein.de
          </p>

          <div className="flex space-x-3 mt-6">
            <a href="tel:+497071791711" className="bg-secondary text-primary p-2 rounded">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a href="mailto:info@kilger-und-rein.de" className="bg-secondary text-primary p-2 rounded">
              <EnvelopeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

    </div>

      {/* Bottom Row */}
      <div className="border-t border-white text-center text-xs py-4 px-6">
        <p className="mb-2">
          ©2025 Anwaltskanzlei Kilger+Rein – Fachanwalt für Sozialrecht Tübingen
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:underline">Impressum</a>
          <a href="#" className="hover:underline">Datenschutz</a>
        </div>
    </div>
    </footer>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

const practiceAreas = [
  {
    slug: 'arbeitsrecht',
    name: 'Arbeitsrecht',
    description:
      'Wir beraten Sie umfassend bei Kündigungen, Arbeitsverträgen, Abmahnungen, Abfindungen und sonstigen arbeitsrechtlichen Themen.',
    image: '/fachbereiche/arbeitsrecht.jpg',
  },
  {
    slug: 'verkehrsrecht',
    name: 'Verkehrsrecht',
    description:
      'Ob Bußgeldbescheid, Unfallregulierung oder Führerscheinentzug – wir vertreten Ihre Interessen schnell und zuverlässig.',
    image: '/fachbereiche/verkehrsrecht.jpg',
  },
  {
    slug: 'erbrecht',
    name: 'Erbrecht',
    description:
      'Wir unterstützen bei der Testamentsgestaltung, Durchsetzung von Pflichtteilsansprüchen und Regelung von Nachlässen.',
    image: '/fachbereiche/erbrecht.jpg',
  },
  {
    slug: 'familienrecht',
    name: 'Familienrecht',
    description:
      'Verlässliche Begleitung in Trennungs- und Scheidungssituationen, inklusive Sorgerecht, Umgangsrecht und Unterhalt.',
    image: '/fachbereiche/familienrecht.jpg',
  },
  {
    slug: 'mietrecht',
    name: 'Mietrecht',
    description:
      'Rechtsbeistand für Mieter und Vermieter – von Kündigungen und Mieterhöhungen bis hin zu Betriebskostenabrechnungen.',
    image: '/fachbereiche/mietrecht.jpg',
  },
]


export default function LeistungenPage() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12">Leistungen</h1>
        <div className="space-y-10">
          {practiceAreas.map((area, index) => (
            <Link href={`/leistungen/${area.slug}`} key={index} className="block">
              <div
                className={clsx(
                  'flex flex-col md:flex-row items-center rounded-2xl bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:cursor-pointer',
                  'hover:ring-2 hover:ring-secondary',
                )}
              >
                <div className="relative w-full md:w-1/2 h-64 md:h-72">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 w-full md:w-1/2 text-left">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {area.name}
                  </h3>
                  <p className="text-gray-700 text-base line-clamp-4">
                    {area.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

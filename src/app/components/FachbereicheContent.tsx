'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const practiceAreas = [
  {
    name: 'Arbeitsrecht',
    title: 'Individuelle Beratung bei Kündigung, Arbeitsverträgen und mehr',
    points: ['Kündigungsschutz', 'Arbeitsverträge', 'Abfindungen'],
    image: '/fachbereiche/arbeitsrecht.jpg',
  },
  {
    name: 'Verkehrsrecht',
    title: 'Rechtssicherheit bei Unfällen, Bußgeldern und Schadensregulierung',
    points: ['Unfallabwicklung', 'Fahrerlaubnisrecht', 'Ordnungswidrigkeiten'],
    image: '/fachbereiche/verkehrsrecht.jpg',
  },
  {
    name: 'Erbrecht',
    title: 'Gestaltung von Testamenten und Durchsetzung von Erbansprüchen',
    points: ['Testamentsgestaltung', 'Pflichtteilsrecht', 'Nachlassregelung'],
    image: '/fachbereiche/erbrecht.jpg',
  },
  {
    name: 'Familienrecht',
    title: 'Begleitung bei Trennung, Scheidung und Sorgerecht',
    points: ['Scheidung', 'Unterhalt', 'Sorgerecht'],
    image: '/fachbereiche/familienrecht.jpg',
  },
  {
    name: 'Mietrecht',
    title: 'Unterstützung für Mieter und Vermieter bei Konflikten',
    points: ['Kündigungen', 'Mieterhöhungen', 'Nebenkostenabrechnungen'],
    image: '/fachbereiche/mietrecht.jpg',
  },
]

export default function FachbereicheContent() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4 tracking-wide text-primary">FACHBEREICHE</h2>
      <div className="w-20 h-1 bg-secondary mx-auto mb-10" />

      <div className="relative px-6 max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop={true}
          spaceBetween={50}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.prev-btn-fb',
            nextEl: '.next-btn-fb',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {practiceAreas.map((area, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col h-[480px] text-center bg-transparent rounded-2xl overflow-hidden">
                <div className="relative w-full h-[250px]">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover w-full h-full rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (min-width: 1024px) 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-between p-6">
                  <div>
                    <h3 className="text-xl text-primary font-bold uppercase tracking-wide">
                      {area.name}
                    </h3>
                    <p className="text-primary mt-1 text-sm">{area.title}</p>
                    <ul className="mt-3 text-primary text-sm space-y-1">
                      {area.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="prev-btn-fb p-2 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            className="next-btn-fb p-2 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dennis König',
    title: 'Rechtsanwalt',
    specializations: ['Fachanwalt für Verkehrsrecht', 'Fachanwalt für Arbeitsrecht'],
    image: '/team/dennis.jpg',
  },
  {
    name: 'Cosima Christmann',
    title: 'Rechtsanwältin',
    specializations: ['Fachanwältin für Erbrecht', 'Fachanwältin für Familienrecht'],
    image: '/team/cosima.jpg',
  },
  {
    name: 'Melanie Mussotter-Schwarz',
    title: 'Rechtsanwältin',
    specializations: ['Fachanwältin für Miet- und Wohnungseigentumsrecht'],
    image: '/team/melanie.jpg',
  },
  {
    name: 'Christine Reinsberg',
    title: 'Rechtsanwältin',
    specializations: ['Fachanwältin für Arbeitsrecht'],
    image: '/team/christine.jpg',
  },
  {
    name: 'Michael Meng',
    title: 'Rechtsanwalt',
    specializations: ['Fachanwalt für Verkehrsrecht'],
    image: '/team/michael.jpg',
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4 tracking-wide text-primary">TEAM</h2>
      <div className="w-20 h-1 bg-secondary mx-auto mb-10" />

      <div className="relative px-6 max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop={true}
          spaceBetween={50}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col h-[480px] text-center bg-transparent rounded-2xl overflow-hidden">
                <div className="relative w-full h-[250px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover w-full h-full rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (min-width: 1024px) 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-between p-6">
                  <div>
                    <h3 className="text-xl text-primary font-bold uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-primary mt-1">{member.title}</p>
                    <ul className="mt-3 text-primary text-sm space-y-1">
                      {member.specializations.map((spec, i) => (
                        <li key={i}>{spec}</li>
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
            className="prev-btn p-2 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            className="next-btn p-2 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

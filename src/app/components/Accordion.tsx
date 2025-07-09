'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Welche Dienstleistungen bietet die Kanzlei an?',
    answer: 'Unsere Kanzlei bietet umfassende rechtliche Beratung in den Bereichen Zivilrecht, Familienrecht, Arbeitsrecht und Strafrecht an.',
  },
  {
    question: 'Wie kann ich einen Termin vereinbaren?',
    answer: 'Sie können uns telefonisch, per E-Mail oder über unser Kontaktformular auf der Website erreichen, um einen Termin zu vereinbaren.',
  },
  {
    question: 'Was sollte ich zum ersten Beratungsgespräch mitbringen?',
    answer: 'Bitte bringen Sie alle relevanten Unterlagen und Informationen mit, die Ihren Fall betreffen. Dazu gehören Verträge, Schriftwechsel und eventuell bereits erhaltene Bescheide.',
  },
  {
    question: 'Wie hoch sind die Kosten für eine Erstberatung?',
    answer: 'Die Kosten für eine Erstberatung richten sich nach dem Rechtsanwaltsvergütungsgesetz (RVG) und betragen in der Regel bis zu 190 Euro zzgl. MwSt.',
  },
]

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      {/* Gradient Top Border with fade on edges */}
      <div className="h-0.5 w-full mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-secondary rounded-full [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]"></div>

      <h2 className="text-3xl font-bold text-center mb-8">Häufig gestellte Fragen</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-secondary rounded-md">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-primary focus:outline-none"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="text-secondary">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-white text-base bg-primary">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

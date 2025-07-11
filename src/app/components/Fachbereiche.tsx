'use client'

import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'

// Dynamically import to avoid loading until needed
const LazyFachbereicheContent = dynamic(() => import('./FachbereicheContent'), {
  ssr: false,
  loading: () => <div className="h-[600px]" />, // optional skeleton
})

export default function Fachbereiche() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div ref={ref}>
      {inView && <LazyFachbereicheContent />}
    </div>
  )
}

import Hero from './components/Hero' // adjust path if needed
import Header from './components/Header' // adjust path if needed
import Footer from './components/Footer'
import Location from './components/Location' // adjust path if needed
import Team from './components/Team' // adjust path if needed

export default function Home() {
  return (
    <div>
      <Hero />
      <Location />
      <Team />
    </div>
  )
}

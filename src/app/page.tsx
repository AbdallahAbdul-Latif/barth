import Hero from './components/Hero' 
import Location from './components/Location' 
import Team from './components/Team'
import Accordion from './components/Accordion'
import Introduction from './components/Introduction'

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Location />
      <Team />
      <Accordion />
    </div>
  )
}

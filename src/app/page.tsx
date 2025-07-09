import Hero from './components/Hero' 
import Location from './components/Location' 
import Team from './components/Team'
import Accordion from './components/Accordion'
import Introduction from './components/Introduction'
import Fachbereiche from './components/Fachbereiche'

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Fachbereiche />      
      <Location />
      <Team />
      <Accordion />
    </div>
  )
}

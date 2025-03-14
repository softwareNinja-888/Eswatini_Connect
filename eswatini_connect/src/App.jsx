
// import './App.css'
import { About } from './components/About'
import { ClientDisplay } from './components/ClientDisplay'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import { Hero } from './components/Hero'
import { Hero2 } from './components/Hero2'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Team } from './components/Team'

function App() {

  return (
    <>
      <div id='#' className="flex flex-col overflow-x-hidden" >
        <Hero/>
        <ClientDisplay/>
        <Services/>
        <About/>
        <Pricing/>
        <Team/>
      </div>
    </>
  )
}

export default App

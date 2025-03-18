
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
import { WhyUs } from './components/About/WhyUs'
import { Video } from './components/About/Video'
import ChatbotComponent from './components/ChatBot'
import { ChatbotButton } from './components/ChatBotBtn'

function App() {

  return (
    <>
      <div id='#' className="flex flex-col overflow-x-hidden" >
        {/* <ChatbotComponent/> */}
        {/* <ChatbotButton/> */}
        <Hero/>
        <ClientDisplay/>
        <div className="py-50">
          <Video/>
        </div>
        <Services/>
        <About/>
        <Pricing/>
        <WhyUs sectionWidth='w-11/12'/>
        <Team/>

      </div>
    </>
  )
}

export default App

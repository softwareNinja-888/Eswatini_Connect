
// import './App.css'
import { About } from './components/About'
import { ClientDisplay } from './components/ClientDisplay'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollToTop } from './components/Helper/ScrollToTop'
import { Whatsapp } from './components/Helper/Whatsapp'
import { Hero } from './components/Hero'
import { Services } from './components/Services'

function App() {

  return (
    <>
      <div id='#' className="flex flex-col overflow-x-hidden" >
        <Header/>
        <Hero/>
        <ClientDisplay/>
        <Services/>
        <About/>
        <Footer/>
        <ScrollToTop/>
        <Whatsapp/>
      </div>
    </>
  )
}

export default App

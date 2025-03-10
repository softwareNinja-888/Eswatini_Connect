
// import './App.css'
import { ClientDisplay } from './components/ClientDisplay'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {

  return (
    <>
      <div id='#' className="flex flex-col overflow-x-hidden mb-52" >
        <Header/>
        <Hero/>
        <ClientDisplay/>
      </div>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import { AboutHome } from './components/About/AboutHome.jsx'
import { ServiceHome } from './components/Services/ServiceHome.jsx'
import { ServiceInfo } from './components/Services/ServiceInfo.jsx'
import { Layout } from './components/Layout.jsx'
import { ContactHome } from './components/Contact/ContactHome.jsx'
import { PricingHome } from './components/Pricing/PricingHome.jsx'
import { PorfolioHome } from './components/Portfolio/PortfolioHome.jsx'
import { ScrollToTop } from './components/Helper/ScrollToTop'
import { Whatsapp } from './components/Helper/Whatsapp'
import { FAQ } from './components/FAQ.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App/>}/>
          <Route path='services'>
            <Route index element={<ServiceHome/>}/>
            <Route path=':service' element={<ServiceInfo/>}/>
          </Route>
          <Route path='contact'>
            <Route index element={<ContactHome/>}/>
          </Route>
          <Route path='pricing'>
            <Route index element={<PricingHome/>}/>
          </Route>
          <Route path='portfolio'>
            <Route index element={<PorfolioHome/>}/>
          </Route>
          <Route path='about'>
            <Route index element={<AboutHome/>}/>
          </Route>
          <Route path='faq'>
            <Route index element={<FAQ/>}/>
          </Route>
        </Route>
      </Routes>
      <ScrollToTop/>
      <Whatsapp/>
    </BrowserRouter>
  </StrictMode>,
)

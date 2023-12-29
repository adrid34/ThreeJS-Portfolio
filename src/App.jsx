import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

function App() {

  return (

    <BrowserRouter>
        <div className='relative z-0 bg-primary text-gray-900'>

          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>

          <footer className='text-[10px] p-1 opacity-80'>&#169; Adrian Madrid</footer>
        </div>
    </BrowserRouter>

  )
}

export default App

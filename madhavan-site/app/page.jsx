import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import WhoThisIsFor from '../src/components/WhoThisIsFor'
import WhatIDo from '../src/components/WhatIDo'
import BrandWall from '../src/components/BrandWall'
import Testimonials from '../src/components/Testimonials'
import About from '../src/components/About'
import BookCall from '../src/components/BookCall'
import Newsletter from '../src/components/Newsletter'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import WaveToBlue from '../src/components/WaveToBlue'
import WaveToWhite from '../src/components/WaveToWhite'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <AboutIntro /> */}
      <BrandWall />
      <WhoThisIsFor />
      <WhatIDo />
      <Testimonials />
      <About />
      <BookCall />
      <WaveToBlue />
      <Newsletter />
      <WaveToWhite />
      <Contact />
      <WaveToBlue />
      <Footer />
    </div>
  )
}

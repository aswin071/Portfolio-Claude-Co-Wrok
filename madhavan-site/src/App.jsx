import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoThisIsFor from './components/WhoThisIsFor'
import WhatIDo from './components/WhatIDo'
import BrandWall from './components/BrandWall'
import Testimonials from './components/Testimonials'
import About from './components/About'
import BookCall from './components/BookCall'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoThisIsFor />
      <WhatIDo />
      <BrandWall />
      <Testimonials />
      <About />
      <BookCall />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

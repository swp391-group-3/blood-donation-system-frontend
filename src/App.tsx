import { useState, useEffect } from "react"
import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar.tsx"
import Hero from "./components/Hero.tsx"
import Stats from "./components/Stats.tsx"
import Process from "./components/Process.tsx"
import About from "./components/About.tsx"
import Testimonials from "./components/Testinomials.tsx"
import Urgent from "./components/Urgent.tsx"
import CTA from "./components/CTA.tsx"
import Footer from "./components/Footer.tsx"

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="font-sans bg-white text-gray-900">
      <Cursor />
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Urgent />
      <Stats />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
export default App

import { useState, useEffect } from "react"
import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar.tsx"

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
    </div>
  )
}
export default App

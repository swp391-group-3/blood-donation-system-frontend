import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NavbarProps {
  scrollY: number
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  // Function to handle click on nav items
  const handleNavClick = (href: string) => {
    setActiveSection(href)
  }

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    // Come in future    
  }

  // Check which section is active on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? "bg-white py-2" : "bg-transparent py-4"
      }`}
      style={{
        backgroundColor:
          scrollY > 50 ? (isDarkTheme ? "#1f2937" : "white") : isDarkTheme ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)",
        boxShadow:
          scrollY > 50
            ? isDarkTheme
              ? "0 4px 20px rgba(0, 0, 0, 0.3)"
              : "0 4px 20px rgba(0, 0, 0, 0.1)"
            : "0 4px 30px rgba(0, 0, 0, 0.15)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <motion.div
            className="h-10 w-10 rounded-full bg-red-600 mr-3 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </motion.div>
          <motion.h1
            className="text-xl font-bold"
            style={{
              color: isDarkTheme ? "#f87171" : scrollY > 50 ? "#dc2626" : "#ffffff",
              textShadow: scrollY > 50 ? "none" : "0px 0px 4px rgba(0,0,0,0.5)",
            }}
          >
            LifeDrop
          </motion.h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={`font-medium relative overflow-hidden px-3 py-2 rounded-md transition-all duration-300`}
              style={{
                color: isDarkTheme ? (scrollY > 50 ? "#e5e7eb" : "#ffffff") : scrollY > 50 ? "#1f2937" : "#ffffff",
                textShadow: scrollY > 50 ? "none" : "0px 0px 4px rgba(0,0,0,0.3)",
              }}
              whileHover={{
                scale: 1.1,
                color: isDarkTheme ? "#f87171" : "#dc2626",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
              onClick={() => handleNavClick(item.href)}
            >
              {item.name}
              {/* Active indicator */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-red-600 rounded-full"
                initial={{ width: 0, left: "50%" }}
                animate={{
                  width: activeSection === item.href ? "100%" : "0%",
                  left: activeSection === item.href ? "0%" : "50%",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover line animation - top */}
              <motion.span
                className="absolute top-0 left-0 h-0.5 bg-red-600 rounded-full"
                initial={{ width: 0 }}
                whileHover={{
                  width: "100%",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              />

              {/* Hover line animation - bottom */}
              <motion.span
                className="absolute bottom-0 right-0 h-0.5 bg-red-600 rounded-full"
                initial={{ width: 0 }}
                whileHover={{
                  width: "100%",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              />

              {/* Hover line animation - left */}
              <motion.span
                className="absolute left-0 top-0 w-0.5 bg-red-600 rounded-full"
                initial={{ height: 0 }}
                whileHover={{
                  height: "100%",
                  transition: { duration: 0.3, delay: 0.1, ease: "easeOut" },
                }}
              />

              {/* Hover line animation - right */}
              <motion.span
                className="absolute right-0 bottom-0 w-0.5 bg-red-600 rounded-full"
                initial={{ height: 0 }}
                whileHover={{
                  height: "100%",
                  transition: { duration: 0.3, delay: 0.1, ease: "easeOut" },
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-md -z-10"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 0.1,
                  backgroundColor: isDarkTheme ? "#f87171" : scrollY > 50 ? "#dc2626" : "#ffffff",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle and Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Modern Icon Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: isDarkTheme ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.05)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                rotate: isDarkTheme ? 180 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              {/* Sun/Moon Icon */}
              <AnimatePresence mode="wait" initial={false}>
                {isDarkTheme ? (
                  <motion.svg
                    key="moon"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white absolute inset-0 m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="sun"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-800 absolute inset-0 m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>

          <motion.button
            className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(220, 38, 38, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
          >
            Sign In
          </motion.button>
          <motion.button
            className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(220, 38, 38, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
          >
            Donate Now
          </motion.button>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: isDarkTheme ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.05)",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDarkTheme ? (
                <motion.svg
                  key="moon-mobile"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="sun-mobile"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${
              isDarkTheme ? "text-white" : scrollY > 50 ? "text-gray-800" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 18h12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden shadow-lg"
            style={{
              backgroundColor: isDarkTheme ? "#1f2937" : "white",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="font-medium relative overflow-hidden py-2 px-3"
                  style={{
                    color: isDarkTheme ? "#e5e7eb" : "#1f2937",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  whileHover={{
                    x: 5,
                    color: isDarkTheme ? "#f87171" : "#dc2626",
                  }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-red-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              <motion.button
                className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                Sign In
              </motion.button>
              <motion.button
                className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
              >
                Donate Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar


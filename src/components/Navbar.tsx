"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, Heart, Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./ThemeProvider"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("about")
  const { theme, setTheme } = useTheme()
  const navRef = useRef(null)

  // Updated navigation items (removed Home and Donate)
  const navItems = ["About", "Locations", "Stories", "Contact"]

  // Scroll animations
  const { scrollYProgress } = useScroll()
  const navbarOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.98])
  const navbarBlur = useTransform(scrollYProgress, [0, 0.05], [0, 8])
  const navbarHeight = useTransform(scrollYProgress, [0, 0.05], [88, 70])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Staggered animation for navbar items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  // Logo animation
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  // Heart beat animation
  const heartVariants = {
    initial: { scale: 0 },
    animate: {
      scale: [0, 1.2, 1],
      transition: {
        times: [0, 0.6, 1],
        duration: 0.8,
      },
    },
    pulse: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        height: navbarHeight,
        backdropFilter: `blur(${navbarBlur.get()}px)`,
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(17, 24, 39, 0.85)"
            : "rgba(255, 255, 255, 0.85)"
          : "transparent",
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-[100px] bg-gradient-to-r from-red-500/10 via-transparent to-red-500/5 dark:from-red-900/20 dark:to-red-900/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 h-full flex items-center justify-between relative z-10">
        <motion.div
          className="flex items-center"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.div variants={heartVariants} initial="initial" animate="animate" whileHover="pulse">
            <Heart className="h-8 w-8 text-red-600 mr-2" />
          </motion.div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">LifeDrop</span>
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-gray-700 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-400 font-medium transition-colors ${activeItem === item.toLowerCase() ? "text-red-600 dark:text-red-400" : ""
                }`}
              variants={item}
              onClick={() => setActiveItem(item.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              {activeItem === item.toLowerCase() && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400"
                  layoutId="activeNavIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div className="flex items-center space-x-4" variants={container} initial="hidden" animate="show">
          {/* Theme Toggle Switch */}
          <motion.div variants={item} className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <motion.button
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <motion.div
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${theme === "dark" ? "bg-gray-900 ml-6" : "bg-white ml-0"
                  }`}
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="text-yellow-400"
                    >
                      <Moon className="h-3 w-3" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="text-yellow-500"
                    >
                      <Sun className="h-3 w-3" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div variants={item}>
            <Button
              variant="outline"
              className="hidden md:flex border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                Sign In
              </motion.span>
            </Button>
          </motion.div>

          <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              className="hidden md:flex bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1 h-9"
            >
              <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                Donate Now
              </motion.span>
              <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                <ChevronDown className="ml-1 h-3 w-3" />
              </motion.span>
            </Button>
          </motion.div>

          <motion.button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              opacity: { duration: 0.2 },
            }}
          >
            <motion.div
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-700 dark:text-gray-200 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors ${activeItem === item.toLowerCase()
                    ? "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
                    : ""
                    }`}
                  onClick={() => {
                    setActiveItem(item.toLowerCase())
                    setIsMobileMenuOpen(false)
                  }}
                  variants={item}
                  custom={index}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div variants={item} custom={navItems.length}>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
              </motion.div>
              <motion.div variants={item} custom={navItems.length + 1}>
                <Button
                  variant="default"
                  className="bg-red-600 hover:bg-red-700 text-white w-full text-sm py-1 h-9"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar


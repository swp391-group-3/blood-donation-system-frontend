"use client"

import { useRef, useState, useEffect, useContext } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ThemeContext } from "./ThemeContext"

const Urgent = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const { isDarkTheme } = useContext(ThemeContext)

  // Emergency cases data
  const emergencyCases = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      bloodType: "O-",
      location: "Memorial Hospital",
      urgency: "Critical",
      description: "Car accident victim requiring multiple transfusions",
      neededBy: "Within 24 hours",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 42,
      bloodType: "AB+",
      location: "City Medical Center",
      urgency: "Urgent",
      description: "Scheduled for open heart surgery",
      neededBy: "Within 48 hours",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: 7,
      bloodType: "A+",
      location: "Children's Hospital",
      urgency: "Critical",
      description: "Leukemia patient needing regular transfusions",
      neededBy: "Within 24 hours",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "David Wilson",
      age: 35,
      bloodType: "B-",
      location: "General Hospital",
      urgency: "Urgent",
      description: "Severe anemia requiring blood transfusion",
      neededBy: "Within 48 hours",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      age: 62,
      bloodType: "O+",
      location: "University Medical Center",
      urgency: "Critical",
      description: "Undergoing emergency surgery after a stroke",
      neededBy: "Immediately",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "James Taylor",
      age: 19,
      bloodType: "A-",
      location: "Trauma Center",
      urgency: "Critical",
      description: "Multiple injuries from motorcycle accident",
      neededBy: "Within 12 hours",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Calculate visible cases based on current slide
  const getVisibleCases = () => {
    const totalCases = emergencyCases.length

    // If we have 3 or fewer cases, just show all of them
    if (totalCases <= 3) {
      return emergencyCases
    }

    // Otherwise, show 3 cases per slide
    const visibleCases = []
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide * 3 + i) % totalCases
      visibleCases.push(emergencyCases[index])
    }

    return visibleCases
  }

  // Handle next slide
  const nextSlide = () => {
    if (emergencyCases.length <= 3) return // Don't slide if we have 3 or fewer cases

    const totalSlides = Math.ceil(emergencyCases.length / 3)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  // Handle previous slide
  const prevSlide = () => {
    if (emergencyCases.length <= 3) return // Don't slide if we have 3 or fewer cases

    const totalSlides = Math.ceil(emergencyCases.length / 3)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, autoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const facts = [
    {
      title: "Every 2 Seconds",
      description: "Someone in the world needs blood every 2 seconds",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "1 Donation = 3 Lives",
      description: "A single donation can save up to three lives",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Only 38% Eligible",
      description: "Only 38% of the population is eligible to donate blood",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
    },
    {
      title: "Blood Types Matter",
      description: "There are 8 different blood types, each crucial for specific patients",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="urgent"
      className={`py-20 ${isDarkTheme ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Emergency Cases Carousel */}
        <motion.div
          className="mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-center mb-8">
            <h2 className={`${isDarkTheme ? "text-white" : "text-gray-900"} text-2xl md:text-3xl font-bold`}>
              Emergency Blood Needs
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto my-4"></div>
            <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              These patients urgently need blood donations. Your help can save their lives.
            </p>
          </div>

          <div className="relative px-12 md:px-16">
            {/* Carousel Navigation Buttons */}
            {emergencyCases.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  className={`absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 ${
                    isDarkTheme ? "bg-gray-700" : "bg-white"
                  } hover:bg-red-600 hover:text-white text-red-600 p-3 rounded-full shadow-lg border-2 border-red-600`}
                  aria-label="Previous case"
                  style={{ touchAction: "manipulation" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className={`absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 ${
                    isDarkTheme ? "bg-gray-700" : "bg-white"
                  } hover:bg-red-600 hover:text-white text-red-600 p-3 rounded-full shadow-lg border-2 border-red-600`}
                  aria-label="Next case"
                  style={{ touchAction: "manipulation" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Carousel Track */}
            <div className="overflow-hidden">
              {emergencyCases.length <= 3 ? (
                // Simple version for 3 or fewer cases
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                  <AnimatePresence mode="wait">
                    {emergencyCases.map((caseItem) => (
                      <motion.div
                        key={caseItem.id}
                        className={`${isDarkTheme ? "bg-gray-800" : "bg-white"} rounded-lg overflow-hidden shadow-lg ${isDarkTheme ? "border-gray-700" : "border-gray-100"} flex flex-col h-full`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        {/* Case content remains the same */}
                        <div className="relative">
                          <div className="h-40 bg-red-100 flex items-center justify-center">
                            <img
                              src={caseItem.image || "/placeholder.svg"}
                              alt={caseItem.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div
                            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-white text-sm font-bold ${
                              caseItem.urgency === "Critical" ? "bg-red-600" : "bg-orange-500"
                            }`}
                          >
                            {caseItem.urgency}
                          </div>
                        </div>

                        <div className="p-5 flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`${isDarkTheme ? "text-white" : "text-gray-900"} text-xl font-bold`}>
                              {caseItem.name}
                            </h3>
                            <div className="text-xl font-bold text-red-600">{caseItem.bloodType}</div>
                          </div>
                          <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"} mb-2`}>
                            Age: {caseItem.age} • {caseItem.location}
                          </p>
                          <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-700"} mb-4`}>
                            {caseItem.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-1 text-red-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Needed: {caseItem.neededBy}
                          </div>
                        </div>

                        <div className="px-5 pb-5">
                          <motion.button
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Donate Now
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                // Sliding carousel for more than 3 cases
                <motion.div
                  className="flex"
                  animate={{ x: `calc(-${currentSlide * 100}%)` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {Array.from({ length: Math.ceil(emergencyCases.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {emergencyCases.slice(slideIndex * 3, slideIndex * 3 + 3).map((caseItem) => (
                          <motion.div
                            key={caseItem.id}
                            className={`${isDarkTheme ? "bg-gray-800" : "bg-white"} rounded-lg overflow-hidden shadow-lg ${isDarkTheme ? "border-gray-700" : "border-gray-100"} flex flex-col h-full`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          >
                            {/* Case content remains the same */}
                            <div className="relative">
                              <div className="h-40 bg-red-100 flex items-center justify-center">
                                <img
                                  src={caseItem.image || "/placeholder.svg"}
                                  alt={caseItem.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div
                                className={`absolute top-2 right-2 px-3 py-1 rounded-full text-white text-sm font-bold ${
                                  caseItem.urgency === "Critical" ? "bg-red-600" : "bg-orange-500"
                                }`}
                              >
                                {caseItem.urgency}
                              </div>
                            </div>

                            <div className="p-5 flex-grow">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className={`${isDarkTheme ? "text-white" : "text-gray-900"} text-xl font-bold`}>
                                  {caseItem.name}
                                </h3>
                                <div className="text-xl font-bold text-red-600">{caseItem.bloodType}</div>
                              </div>
                              <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"} mb-2`}>
                                Age: {caseItem.age} • {caseItem.location}
                              </p>
                              <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-700"} mb-4`}>
                                {caseItem.description}
                              </p>
                              <div className="flex items-center text-sm text-gray-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 mr-1 text-red-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Needed: {caseItem.neededBy}
                              </div>
                            </div>

                            <div className="px-5 pb-5">
                              <motion.button
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Donate Now
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Carousel Indicators */}
            {emergencyCases.length > 3 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(emergencyCases.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-red-600 w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    style={{ touchAction: "manipulation" }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block"
            animate={{
              rotate: [0, 5],
            }}
            transition={{
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 3,
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-600 mx-auto mb-4"
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
          <h2 className={`${isDarkTheme ? "text-white" : "text-gray-900"} text-3xl md:text-4xl font-bold mb-4`}>
            Why Blood Donation Matters
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto text-lg`}>
            Blood donation is a critical lifeline for millions of people around the world. Every day, thousands of
            patients rely on the generosity of blood donors to survive.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className={`${isDarkTheme ? "bg-gray-800" : "bg-white"} rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow ${isDarkTheme ? "border-gray-700" : "border-gray-100"}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="mb-4 inline-block"
                animate={{
                  rotate: [0, 10],
                }}
                transition={{
                  rotate: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 2,
                  },
                }}
              >
                {fact.icon}
              </motion.div>
              <h3 className={`${isDarkTheme ? "text-white" : "text-gray-900"} text-xl font-bold mb-2`}>{fact.title}</h3>
              <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>{fact.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={`mt-16 ${isDarkTheme ? "bg-gray-800 text-white" : "bg-red-50"} rounded-xl p-8 md:p-12 relative overflow-hidden`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animated blood cells */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-red-200"
                style={{
                  width: Math.random() * 40 + 20,
                  height: Math.random() * 40 + 20,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Become a Blood Donor Today</h3>
              <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-700"}`}>
                Your donation can be the difference between life and death for someone in need. It takes just 30-45
                minutes to donate, and that small amount of time can give someone else a lifetime.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <motion.button
                className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Urgent

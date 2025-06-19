import { useState, useRef, useEffect, useContext } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ThemeContext } from "./ThemeContext"

interface Testimonial {
  name: string
  role: string
  quote: string
  image: string
}

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [current, setCurrent] = useState(0)

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Regular Donor",
      quote:
        "I've been donating blood for over 5 years now. It's such a simple way to make a huge impact. The staff are always friendly and the process is quick and easy.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      role: "Blood Recipient",
      quote:
        "After my accident, I needed multiple blood transfusions. I'm alive today because strangers took the time to donate. Now I donate regularly to pay it forward.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily Rodriguez",
      role: "Nurse",
      quote:
        "As a healthcare professional, I see firsthand how critical blood donations are. Every day, we rely on donors to help save our patients' lives.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const { isDarkTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, testimonials.length])

  return (
    <section
      id="testimonials"
      className={`py-20 ${isDarkTheme ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Donor Stories</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto text-lg`}>
            Hear from donors and recipients about the impact of blood donation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Blood drop decorations */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 text-red-200 hidden md:block"
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.4183 21 20 17.4183 20 13C20 10 18 6 12 2C6 6 4 10 4 13C4 17.4183 7.58172 21 12 21Z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -right-10 w-20 h-20 text-red-200 hidden md:block"
            animate={{
              rotate: [0, -10, 10, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.4183 21 20 17.4183 20 13C20 10 18 6 12 2C6 6 4 10 4 13C4 17.4183 7.58172 21 12 21Z" />
            </svg>
          </motion.div>

          <div
            className={`${isDarkTheme ? "bg-gray-800" : "bg-red-50"} rounded-xl p-8 md:p-12 shadow-lg relative overflow-hidden`}
          >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <svg
                className="absolute top-0 left-0 w-full h-full text-red-100 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <motion.path
                  fill="currentColor"
                  fillOpacity="1"
                  d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  animate={{
                    d: [
                      "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                      "M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,106.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                      "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </svg>
            </div>

            <div className="relative z-10 min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <img
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <svg
                    className="w-10 h-10 text-red-300 mx-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className={`${isDarkTheme ? "text-gray-200" : "text-gray-700"} text-lg md:text-xl mb-6 italic`}>
                    "{testimonials[current].quote}"
                  </p>

                  <h3 className={`${isDarkTheme ? "text-white" : "text-gray-900"} text-xl font-bold`}>
                    {testimonials[current].name}
                  </h3>
                  <p className="text-red-600">{testimonials[current].role}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full ${current === index ? "bg-red-600" : "bg-red-200"}`}
                    onClick={() => setCurrent(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={current === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={current === index ? { duration: 1, repeat: Number.POSITIVE_INFINITY } : {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

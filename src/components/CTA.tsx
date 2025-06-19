import { useRef, useContext } from "react"
import { motion, useInView } from "framer-motion"
import { ThemeContext } from "./ThemeContext"

const CTA = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-800 via-red-900 to-gray-900"
          : "bg-gradient-to-br from-red-700 via-red-600 to-red-500"
      } text-white transition-colors duration-300`}
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
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

              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Save Lives?</h2>
              <p className="text-lg text-red-100 mb-6">
                Your donation can save up to three lives. Schedule an appointment today or find a donation center near
                you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-4"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Find a Donation Center</h3>
                    <p className="text-red-100">Locate the nearest center to donate</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-4"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.3,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Schedule an Appointment</h3>
                    <p className="text-red-100">Book your donation time online</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-4"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.6,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Contact Hotline</h3>
                    <p className="text-red-100">Call us at 1-800-DONATE</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your message"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-white text-red-600 px-6 py-3 rounded-md font-bold hover:bg-red-100 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

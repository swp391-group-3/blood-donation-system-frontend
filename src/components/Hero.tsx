import { useEffect, useRef, useContext } from "react"
import { motion } from "framer-motion"
import { ThemeContext } from "./ThemeContext"

const Hero = () => {
  const bloodDropsRef = useRef<HTMLDivElement>(null)
  const { isDarkTheme } = useContext(ThemeContext)

  useEffect(() => {
    const createBloodDrop = () => {
      if (!bloodDropsRef.current) return

      const drop = document.createElement("div")
      drop.className = "absolute bg-red-600 rounded-full opacity-70"

      // Random size between 10px and 30px
      const size = Math.random() * 20 + 10
      drop.style.width = `${size}px`
      drop.style.height = `${size}px`

      // Random position
      drop.style.left = `${Math.random() * 100}%`
      drop.style.top = "0"

      // Animation
      drop.animate(
        [
          { transform: "translateY(0) scale(1)", opacity: 0.7 },
          { transform: `translateY(${Math.random() * 300 + 200}px) scale(0.5)`, opacity: 0 },
        ],
        {
          duration: Math.random() * 3000 + 2000,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
      )

      bloodDropsRef.current.appendChild(drop)

      // Remove the drop after animation
      setTimeout(() => {
        if (drop.parentNode === bloodDropsRef.current) {
          bloodDropsRef.current.removeChild(drop)
        }
      }, 5000)
    }

    // Create drops at intervals
    const interval = setInterval(createBloodDrop, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-red-900"
          : "bg-gradient-to-br from-red-900 via-red-800 to-red-700"
      } text-white transition-colors duration-500`}
    >
      {/* Animated blood drops */}
      <div ref={bloodDropsRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Pulsing circle background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="rounded-full bg-red-500 opacity-20"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ width: "80vw", height: "80vw", maxWidth: "800px", maxHeight: "800px" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Donation <br />
            <motion.span
              className="text-red-300"
              animate={{
                color: ["#fca5a5", "#ffffff", "#fca5a5"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Saves Lives
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-red-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            One donation can save up to three lives. Join our community of heroes and make a difference today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-red-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {/* Blood drop shape */}
            <motion.div
              className="absolute inset-0 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            {/* Enhanced Pulsing Heart with Effects */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center perspective-[1200px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* 3D rotating container */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{
                  rotateY: [0, 10, -10, 0],
                  rotateX: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {/* Dramatic background glow */}
                <motion.div
                  className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 blur-2xl"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Outer glow effect */}
                <motion.div
                  className="absolute w-40 h-40 rounded-full bg-red-500/20 blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Radiating pulse rings */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute rounded-full border-2 border-red-500/30"
                    initial={{ width: 60, height: 60 }}
                    animate={{
                      width: [60, 180],
                      height: [60, 180],
                      opacity: [0.8, 0],
                      borderWidth: [3, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Animated blood vessels */}
                <div className="absolute w-[300px] h-[300px] opacity-70">
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * Math.PI) / 4
                    const x = Math.cos(angle) * 100
                    const y = Math.sin(angle) * 100
                    return (
                      <motion.div
                        key={`vessel-${i}`}
                        className="absolute left-1/2 top-1/2 h-1 bg-red-600 origin-left rounded-full"
                        style={{
                          width: 80,
                          transform: `translate(-50%, -50%) rotate(${angle}rad) translateX(20px)`,
                        }}
                        animate={{
                          scaleX: [0, 1, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.25,
                          repeatDelay: 1,
                        }}
                      />
                    )
                  })}
                </div>

                {/* Main heart with enhanced 3D animation */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotateY: [0, 10, -10, 0],
                    rotateX: [0, 5, -5, 0],
                    z: [0, 20, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.7)]"
                >
                  {/* Heart SVG with gradient fill */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-32 w-32 text-white"
                    viewBox="0 0 20 20"
                    style={{ filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))" }}
                  >
                    <defs>
                      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#fecaca" />
                        <stop offset="100%" stopColor="#ffffff" />
                        <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="y1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="x2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="y2" values="100%;0%;100%" dur="3s" repeatCount="indefinite" />
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                      fill="url(#heartGradient)"
                    />
                  </svg>

                  {/* Beating effect overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-32 w-32 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Floating blood cells with enhanced movement */}
                {[...Array(20)].map((_, i) => {
                  const size = Math.random() * 10 + 5
                  const delay = i * 0.2
                  const duration = Math.random() * 3 + 3
                  const distance = Math.random() * 150 + 50
                  const angle = Math.random() * Math.PI * 2
                  const x = Math.cos(angle) * distance
                  const y = Math.sin(angle) * distance

                  return (
                    <motion.div
                      key={`cell-${i}`}
                      className="absolute rounded-full bg-red-500/80"
                      style={{
                        width: size,
                        height: size,
                        boxShadow: "0 0 5px rgba(239, 68, 68, 0.5)",
                      }}
                      initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        x: [0, x / 2, x],
                        y: [0, y / 2, y],
                        opacity: [0, 0.9, 0],
                        scale: [0, 1, 0],
                        z: [0, 30, 0],
                      }}
                      transition={{
                        duration: duration,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: delay,
                        ease: "easeInOut",
                      }}
                    />
                  )
                })}

                {/* Animated text elements */}
                {["Life", "Hope", "Love"].map((text, i) => {
                  const angle = (i * Math.PI * 2) / 3
                  const radius = 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={`text-${i}`}
                      className="absolute text-white text-opacity-80 font-bold text-sm"
                      style={{
                        textShadow: "0 0 10px rgba(239, 68, 68, 0.8)",
                      }}
                      initial={{ x, y, opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5],
                        x: [x * 0.8, x, x * 0.8],
                        y: [y * 0.8, y, y * 0.8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 1.3,
                      }}
                    >
                      {text}
                    </motion.div>
                  )
                })}

                {/* EKG heartbeat line */}
                <motion.div
                  className="absolute bottom-[-60px] h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #ef4444 50%, transparent 100%)",
                    boxShadow: "0 0 8px rgba(239, 68, 68, 0.8)",
                  }}
                  initial={{ width: 0 }}
                  animate={{
                    width: [0, 100, 120, 140, 160, 180, 200, 0],
                    x: [-100, -90, -70, -50, -30, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 0.5,
                    times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 0.8, 1],
                  }}
                />

                {/* Heartbeat sound wave circles */}
                <div className="absolute w-full h-full pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`wave-${i}`}
                      className="absolute left-1/2 top-1/2 rounded-full border border-red-400/30"
                      style={{
                        width: 200 + i * 40,
                        height: 200 + i * 40,
                        x: "-50%",
                        y: "-50%",
                      }}
                      animate={{
                        opacity: [0, 0.3, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 1.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  )
}

export default Hero

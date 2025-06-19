import { useRef, useState, useEffect, useContext } from "react"
import { motion, useInView } from "framer-motion"
import { ThemeContext } from "./ThemeContext"

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const { isDarkTheme } = useContext(ThemeContext)

  const stats = [
    { value: 4.5, label: "Million", description: "Lives saved annually", suffix: "+" },
    { value: 32, label: "Thousand", description: "Donations needed daily", suffix: "+" },
    { value: 120, label: "Countries", description: "Global blood donation network", suffix: "" },
    { value: 30, label: "Minutes", description: "Average donation time", suffix: "" },
  ]

  return (
    <section
      className={`py-20 ${isDarkTheme ? "bg-red-900" : "bg-red-600"} text-white relative overflow-hidden transition-colors duration-300`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Impact of Your Donation</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-red-100">
            Every donation makes a difference. Here's how your contribution helps save lives around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} isInView={isInView} delay={index * 0.2} />
              <div className="text-xl font-bold mb-2">{stat.label}</div>
              <p className="text-red-100">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CountUpProps {
  target: number
  suffix: string
  isInView: boolean
  delay: number
}

const CountUp = ({ target, suffix, isInView, delay }: CountUpProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }

    let start = 0
    const duration = 2000 // 2 seconds
    const startTime = Date.now() + delay * 1000

    const timer = setInterval(() => {
      const now = Date.now()
      if (now < startTime) return

      const progress = Math.min((now - startTime) / duration, 1)
      const value = Math.floor(progress * target)

      if (value !== start) {
        setCount(value)
        start = value
      }

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [isInView, target, delay])

  return (
    <motion.div
      className="text-4xl md:text-5xl font-bold mb-2"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        delay,
      }}
    >
      {count}
      {suffix}
    </motion.div>
  )
}

export default Stats

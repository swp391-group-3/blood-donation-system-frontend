import { useRef, useContext } from "react"
import { motion, useInView } from "framer-motion"
import { ThemeContext } from "./ThemeContext"
import { Heart, Droplets, Activity, Users, Award, Clock, Calendar, MapPin } from "lucide-react"

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const { isDarkTheme } = useContext(ThemeContext)

  const features = [
    {
      title: "Modern Blood Collection",
      description: "State-of-the-art equipment and procedures ensure safe, efficient blood collection.",
      icon: <Droplets className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Advanced Testing",
      description: "Comprehensive testing protocols to ensure blood safety and compatibility.",
      icon: <Activity className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Nationwide Network",
      description: "Connected blood banks across the country for efficient distribution where needed most.",
      icon: <MapPin className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Donor Recognition",
      description: "Special recognition programs for regular donors who help save countless lives.",
      icon: <Award className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Mobile Donation Units",
      description: "Bringing donation opportunities directly to communities and workplaces.",
      icon: <Users className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Quick Processing",
      description: "Rapid processing and distribution to hospitals and emergency services.",
      icon: <Clock className="h-10 w-10 text-red-600" />,
    },
  ]

  return (
    <section
      id="about"
      className={`py-20 ${isDarkTheme ? "bg-gray-800" : "bg-gray-50"} transition-colors duration-300`}
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            whileInView={{ rotate: [0, 10] }}
            transition={{
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 2,
              },
            }}
          >
            <Heart className="h-16 w-16 text-red-600 mx-auto" />
          </motion.div>

          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkTheme ? "text-white" : "text-gray-900"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About LifeDrop Blood Donation System
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-red-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <motion.p
            className={`text-lg ${isDarkTheme ? "text-gray-300" : "text-gray-600"} mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            LifeDrop is a modern, integrated blood donation management system designed to connect donors with recipients
            efficiently and safely. Our mission is to ensure that no patient goes without the blood they need, when they
            need it.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-red-600" />
              <span className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>Founded in 2020</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-red-600" />
              <span className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>500,000+ Donors</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-600" />
              <span className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>200+ Locations</span>
            </div>
          </motion.div>
        </div>

        {/* Video or Animation Section */}
        <motion.div
          className={`relative rounded-xl overflow-hidden mb-20 ${
            isDarkTheme ? "bg-gray-700" : "bg-white"
          } shadow-xl mx-auto max-w-4xl`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated Blood Flow Visualization */}
              <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-gray-800">
                {/* Circulatory System Animation */}
                <svg
                  viewBox="0 0 800 450"
                  className="absolute inset-0 w-full h-full"
                  style={{ filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.3))" }}
                >
                  {/* Heart */}
                  <motion.path
                    d="M400 150 C 350 100, 300 100, 250 150 C 200 200, 200 300, 400 400 C 600 300, 600 200, 550 150 C 500 100, 450 100, 400 150 Z"
                    fill="rgba(220, 38, 38, 0.8)"
                    stroke="rgba(220, 38, 38, 0.9)"
                    strokeWidth="2"
                    animate={{
                      scale: [1, 1.1, 1],
                      fill: ["rgba(220, 38, 38, 0.8)", "rgba(239, 68, 68, 0.9)", "rgba(220, 38, 38, 0.8)"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Main Arteries */}
                  <motion.path
                    d="M400 150 C 400 100, 400 50, 400 0 M400 150 C 350 200, 300 250, 100 300 M400 150 C 450 200, 500 250, 700 300"
                    fill="transparent"
                    stroke="rgba(220, 38, 38, 0.8)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />

                  {/* Blood Flow Animation */}
                  {[...Array(20)].map((_, i) => (
                    <motion.circle
                      key={`blood-cell-${i}`}
                      r="5"
                      fill="rgba(239, 68, 68, 0.9)"
                      initial={{
                        cx: 400,
                        cy: 150,
                        opacity: 0,
                      }}
                      animate={{
                        cx: [400, 400 - Math.random() * 100, 200 - Math.random() * 100, 100],
                        cy: [150, 200 + Math.random() * 50, 250 + Math.random() * 50, 300],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {[...Array(20)].map((_, i) => (
                    <motion.circle
                      key={`blood-cell-right-${i}`}
                      r="5"
                      fill="rgba(239, 68, 68, 0.9)"
                      initial={{
                        cx: 400,
                        cy: 150,
                        opacity: 0,
                      }}
                      animate={{
                        cx: [400, 400 + Math.random() * 100, 600 + Math.random() * 100, 700],
                        cy: [150, 200 + Math.random() * 50, 250 + Math.random() * 50, 300],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {[...Array(10)].map((_, i) => (
                    <motion.circle
                      key={`blood-cell-up-${i}`}
                      r="5"
                      fill="rgba(239, 68, 68, 0.9)"
                      initial={{
                        cx: 400,
                        cy: 150,
                        opacity: 0,
                      }}
                      animate={{
                        cx: 400,
                        cy: [150, 100, 50, 0],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </svg>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Connecting Donors to Those in Need
                  </motion.h3>
                  <motion.p
                    className="text-white/90 max-w-lg drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Our advanced system ensures that blood donations reach patients quickly and efficiently, maximizing
                    the impact of every donation.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${isDarkTheme ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-50"} rounded-lg p-8 shadow-lg transition-all duration-300 border ${isDarkTheme ? "border-gray-600" : "border-gray-100"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
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
                {feature.icon}
              </motion.div>
              <h3 className={`${isDarkTheme ? "text-white" : "text-gray-900"} text-xl font-bold mb-2`}>
                {feature.title}
              </h3>
              <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className={`${isDarkTheme ? "bg-gradient-to-r from-red-900 to-gray-800" : "bg-gradient-to-r from-red-600 to-red-500"} rounded-xl p-8 md:p-12 text-white relative overflow-hidden`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.1, 0.2, 0.1],
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 mb-4">
                At LifeDrop, we're committed to revolutionizing blood donation through technology and compassion. Our
                mission is to ensure that every patient has access to safe blood products when they need them most.
              </p>
              <p className="text-white/90">
                Through education, innovation, and community engagement, we're building a world where blood shortages
                are a thing of the past.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <motion.div
                className="w-40 h-40 relative"
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
                <motion.div
                  className="absolute inset-0 bg-white rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-20 w-20 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

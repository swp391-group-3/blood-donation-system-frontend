

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { Button } from "./ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

const Hero = () => {
  const bloodDropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bloodDropRef.current) {
      gsap.to(bloodDropRef.current, {
        y: 15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }
  }, [])

  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-red-100 dark:bg-red-900/30 px-4 py-1 rounded-full">
              <span className="text-red-600 dark:text-red-400 font-medium text-sm">Save Lives Today</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-in">
              Your Blood <span className="text-red-600">Donation</span> Can Save Multiple Lives
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-lg animate-in">
              Every drop counts. Join our community of donors and help us ensure that blood is available for those who
              need it most.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-in">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6">Donate Now</Button>
              <Button
                variant="outline"
                className="border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 animate-in">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Regular Drives</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Takes Only 30 Minutes</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-full opacity-30 animate-pulse"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    d="M100,20 C120,20 140,40 140,80 C140,120 110,160 100,180 C90,160 60,120 60,80 C60,40 80,20 100,20 Z"
                    fill="#ef4444"
                    className="drop-shadow-lg"
                  />
                </svg>

                <div
                  ref={bloodDropRef}
                  className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      d="M100,20 C120,20 140,40 140,80 C140,120 110,160 100,180 C90,160 60,120 60,80 C60,40 80,20 100,20 Z"
                      fill="#b91c1c"
                      className="drop-shadow-lg"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 animate-in">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                    <span className="text-red-600 dark:text-red-400 font-bold">A+</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Most Needed</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Type A+ blood</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 animate-in">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                    <span className="text-red-600 dark:text-red-400 font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Lives Saved</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Per donation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div>
    </section>
  )
}

export default Hero


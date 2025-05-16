import Navbar from "./components/Navbar"
import { motion } from "framer-motion"
import Hero from "./components/Hero"

const App = () => {

  return (
    <div className="relative overflow-hidden bg-white">
      <motion.div
        className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-red-600 shadow-lg flex items-center justify-center cursor-pointer"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-red-100"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.div>

      <Navbar />

      <motion.div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-red-100 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-100 to-transparent opacity-50"></div>
      </motion.div>

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;

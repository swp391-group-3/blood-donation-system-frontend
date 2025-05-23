import { motion, AnimatePresence } from "framer-motion";
import {Sun, Moon} from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";


const ToggleThemeButton = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <motion.button
            onClick={toggleTheme}
            className={`relative w-8 h-8 rounded-full flex items-center justify-center focus:outline-none ${
              isDarkTheme ? "bg-gray-700" : "bg-yellow-50"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
                <AnimatePresence mode="wait" initial={false}>
                    {isDarkTheme ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 m-auto flex items-center justify-center"
                        >
                            <Moon className="h-5 w-5 text-yellow-500" strokeWidth={2} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 m-auto flex items-center justify-center"
                        >
                            <Sun className="h-5 w-5 text-yellow-500" strokeWidth={2} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    )
}
export default ToggleThemeButton;
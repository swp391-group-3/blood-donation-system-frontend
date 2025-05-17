import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)


  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)


  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {

    const timer = setTimeout(() => setIsVisible(true), 1000)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)


    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement


      const computedStyle = window.getComputedStyle(target)


      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.onclick != null ||
        computedStyle.cursor === "pointer" ||
        target.closest("button, a, [role=button]") !== null

      setIsPointer(isClickable)
      setIsHovering(isClickable)
    }


    const handleMouseLeave = () => {
      cursorX.set(-100)
      cursorY.set(-100)
    }


    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)


    return () => {
      clearTimeout(timer)
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])


  useEffect(() => {
    document.body.style.cursor = "none"


    const makeInteractive = (selector: string) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("cursor-interactive")
      })
    }

    makeInteractive("a, button, input, [role=button]")

    return () => {
      document.body.style.cursor = ""
    }
  }, [])

  if (!isVisible) return null

  return (
    <>

      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >

        <motion.div
          className="absolute rounded-full border-2"
          style={{
            borderColor: isHovering ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)",
          }}
          initial={{ width: 40, height: 40, x: -20, y: -20, opacity: 0.5 }}
          animate={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            x: isHovering ? -40 : -20,
            y: isHovering ? -40 : -20,
            opacity: isClicking ? 0.2 : 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          }}
        />


        <motion.div
          className="absolute bg-black rounded-full"
          initial={{ width: 8, height: 8, x: -4, y: -4 }}
          animate={{
            width: isHovering ? 12 : isClicking ? 6 : 8,
            height: isHovering ? 12 : isClicking ? 6 : 8,
            x: isHovering ? -6 : isClicking ? -3 : -4,
            y: isHovering ? -6 : isClicking ? -3 : -4,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
        />


        {isHovering && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gray-800"
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  x: [0, (Math.random() - 0.5) * 60],
                  y: [0, (Math.random() - 0.5) * 60],
                  width: [4, 0],
                  height: [4, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}
      </motion.div>


      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 z-[9998] pointer-events-none"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        >
          <motion.div
            className="absolute rounded-full border-2 border-black"
            initial={{ width: 10, height: 10, x: -5, y: -5, opacity: 0.8 }}
            animate={{
              width: 80,
              height: 80,
              x: -40,
              y: -40,
              opacity: 0,
              borderWidth: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}
    </>
  )
}

export default Cursor

